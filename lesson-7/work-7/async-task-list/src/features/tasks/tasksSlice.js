// async-task-list/src/features/tasks/tasksSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// Импорт имитация данных
import { mockTasks } from '../../data/tasks';


// Асинхронная загрузка задач
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockTasks);
        }, 1000); // имитируем задержку
    });
});


// Создание слайса задач
const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],       // список задач
        status: 'idle',  // idle | loading | succeeded | failed
        error: null
    },


    // Синхронные редьюсеры
    reducers: {
        // добавление новой задачи
        addTask: (state, action) => {
            state.items.push(action.payload);
        },

        // удаление задачи по ID
        deleteTask: (state, action) => {
            state.items = state.items.filter(task => task.id !== action.payload);
        },

        // переключение статуса
        toggleTaskCompletion: (state, action) => {
            const task = state.items.find(t => t.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        }
    },


    // Обработка async thunk
    extraReducers(builder) {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});


export const { addTask, deleteTask, toggleTaskCompletion } = tasksSlice.actions;
export default tasksSlice.reducer;
