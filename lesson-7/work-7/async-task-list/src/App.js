import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, addTask, deleteTask, toggleTaskCompletion } from './features/tasks/tasksSlice';

function App() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.items);
    const status = useSelector((state) => state.tasks.status);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchTasks());
        }
    }, [dispatch, status]);

    const handleAddTask = () => {
        const trimmedTitle = newTaskTitle.trim();
        if (trimmedTitle) {
            dispatch(addTask({
                id: Date.now(),
                title: trimmedTitle,
                completed: false // новая задача - ещё не выполнена - false
            }));
            setNewTaskTitle('');
        }
    };



    const handleDeleteTask = (id) => {
        dispatch(deleteTask(id));
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="header-title header-link">Task list</p>
                <p className="App-link  header-link">Edit <code>src/App.js</code> and save to reload. </p>
                <a className="App-link header-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
                <a className="header-icon header-link" href="" target="_blank">&#128240; &#9745; &#128257;</a>
                <p className="header-title header-link">&#128204;&#9989;</p>
            </header>
            <div className="container">
                <h1>Список задач</h1>
                <h2> &#128240; &#9745; &#128257;</h2>

                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <input
                        type="text"
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                        placeholder="Введите задачу"
                        style={{ flexGrow: 1, padding: '8px' }}
                    />
                    <button onClick={handleAddTask} style={{ padding: '8px 16px' }}>Добавить</button>
                </div>

                {status === 'loading' && <p>Загрузка...</p>}
                {status === 'failed' && <p>Ошибка загрузки</p>}
                {status === 'succeeded' && (
                    <ul className="tasks-list">
                        {tasks.map(task => (
                            <li key={task.id}>
                                <span>{task.completed ? '✅' : '📌'} {task.title} </span>

                                <div className="task-actions">
                                    <button className="mark-button"
                                        onClick={() => dispatch(toggleTaskCompletion(task.id))}>
                                        {task.completed ? 'Отменить' : 'Выполнено'}
                                    </button>

                                    <button className="delete-button"
                                        onClick={() => handleDeleteTask(task.id)}>
                                        Удалить
                                    </button>
                                </div>
                            </li>
                        ))}

                    </ul>
                )}
            </div>


            <footer className="App-footer">
                <p className="App-link">React JS lesson, Fullstack and Web development</p>
                <p className="App-link">Moscow, 2025 © copyright</p>
                <img src={logo} className="App-logo" alt="logo" />
                <p className="App-link">Task list application</p>
                <p className="header-title header-link">&#128204;&#9989;</p>
            </footer>
        </div>
    );
}

export default App;
