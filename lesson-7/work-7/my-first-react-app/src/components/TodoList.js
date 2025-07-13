// src/components/TodoList.js
import React, { useState, useEffect } from 'react';
import {
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Box,
    Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import Checkbox from '@mui/material/Checkbox';


const TodoList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then((res) => res.json())
            .then((data) => setTasks(data))
            .catch((err) => console.error('Ошибка загрузки задач:', err));
    }, []);

    const handleAddTask = () => {
        const trimmed = task.trim();
        if (trimmed === '') return;

        const newTask = { id: Date.now(), text: trimmed };

        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTask),
        })
            .then((res) => {
                if (res.ok) {
                    setTasks([...tasks, newTask]);
                    setTask('');
                }
            })
            .catch((err) => console.error('Ошибка добавления задачи:', err));
    };

    const handleDeleteTask = (id) => {
        fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        })
            .then((res) => {
                if (res.ok) {
                    setTasks(tasks.filter((t) => t.id !== id));
                }
            })
            .catch((err) => console.error('Ошибка удаления задачи:', err));
    };

    const handleEditTask = (task) => {
        setEditingId(task.id);
        setEditingText(task.text);
    };

    const handleSaveTask = (id) => {
        const updatedTask = { id, text: editingText.trim() };

        fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedTask),
        })
            .then((res) => {
                if (res.ok) {
                    setTasks(tasks.map(t => t.id === id ? updatedTask : t));
                    setEditingId(null);
                    setEditingText('');
                }
            })
            .catch((err) => console.error('Ошибка обновления задачи:', err));
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setEditingText('');
    };


    const toggleTaskCompleted = (task) => {
        const updated = { ...task, completed: !task.completed };

        fetch(`http://localhost:5000/tasks/${task.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updated),
        })
            .then((res) => {
                if (res.ok) {
                    setTasks(tasks.map(t => t.id === task.id ? updated : t));
                }
            })
            .catch((err) => console.error('Ошибка переключения выполнения задачи:', err));
    };

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h5" gutterBottom>
                Планировщик задач
            </Typography>

            <TextField
                label="Новая задача"
                variant="outlined"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" onClick={handleAddTask} sx={{ mt: 1, mb: 2 }}>
                Добавить
            </Button>

            <List>
                {tasks.map((t) => (
                    <ListItem
                        key={t.id}
                        sx={{
                            textDecoration: t.completed ? 'line-through' : 'none',
                            opacity: t.completed ? 0.6 : 1
                        }}
                        secondaryAction={
                            editingId === t.id ? (
                                <>
                                    <IconButton onClick={() => handleSaveTask(t.id)} title="Сохранить">
                                        <SaveIcon />
                                    </IconButton>
                                    <IconButton onClick={handleCancelEdit} title="Отмена">
                                        <CancelIcon />
                                    </IconButton>
                                </>
                            ) : (
                                <>
                                    <IconButton onClick={() => handleEditTask(t)} title="Редактировать">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleDeleteTask(t.id)} title="Удалить">
                                        <DeleteIcon />
                                    </IconButton>
                                </>
                            )
                        }
                    >
                        <Checkbox
                            checked={t.completed}
                            onChange={() => toggleTaskCompleted(t)}
                            className="custom-checkbox"
                        />
                        {editingId === t.id ? (
                            <TextField
                                value={editingText}
                                onChange={(e) => setEditingText(e.target.value)}
                                fullWidth
                                size="small"
                            />
                        ) : (
                            <ListItemText primary={t.text} />
                        )}
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default TodoList;
