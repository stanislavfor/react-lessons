import React, { useState } from 'react';
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

const TodoList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        if (typeof task === 'string' && task.trim() !== '') {
            const newTasks = [...tasks, { id: Date.now(), text: task }]; // объявляем переменную

            // Строки для отладки
            console.log("Добавляем задачу:", task);
            console.log("Список задач после добавления:", newTasks);

            setTasks(newTasks); // переменная newTasks
            setTask('');
        }
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((t) => t.id !== id));
    };

    return (
        <Box sx={{ padding: 4 }}>
            {/* Заголовок */}
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
                        secondaryAction={
                            <IconButton edge="end" onClick={() => handleDeleteTask(t.id)}>
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText primary={t.text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default TodoList;
