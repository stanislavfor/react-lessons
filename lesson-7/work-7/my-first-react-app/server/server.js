const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

// CSP-заголовок
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy",
        "default-src 'self'; " +
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
        "font-src 'self' https://fonts.gstatic.com data:; " +
        "img-src 'self' data:; " +
        "script-src 'self';"
    );
    next();
});

// Middleware
app.use(cors());
app.use(express.json());

const FILE = path.join(__dirname, 'comments.txt');
const TASKS_FILE = path.join(__dirname, 'tasks.txt');

// автоматически создавать файл comments.txt, если он отсутствует
if (!fs.existsSync(FILE)) {
    fs.writeFileSync(FILE, '', 'utf-8');
    console.log('Файл comments.txt создан');
}

// автоматически создавать файл tasks.txt, если он отсутствует
if (!fs.existsSync(TASKS_FILE)) {
    fs.writeFileSync(TASKS_FILE, '', 'utf-8');
    console.log('Файл tasks.txt создан');
}


// ====== API Комментарии ======
// Получить все комментарии
app.get('/comments', (req, res) => {
    if (!fs.existsSync(FILE)) return res.json([]);

    try {
        const data = fs.readFileSync(FILE, 'utf-8');
        const comments = data
            .split('\n')
            .filter(Boolean)
            .map((line) => JSON.parse(line));
        res.json(comments);
    } catch (err) {
        console.error('Ошибка чтения/парсинга файла:', err);
        res.status(500).json({ error: 'Ошибка чтения комментариев' });
    }
});

// Добавить комментарий
app.post('/comments', (req, res) => {
    const comment = req.body;

    if (!comment || !comment.text) {
        return res.status(400).json({ error: 'Некорректный формат комментария' });
    }

    fs.appendFile(FILE, JSON.stringify(comment) + '\n', (err) => {
        if (err) {
            console.error('Ошибка записи:', err);
            return res.status(500).json({ error: 'Ошибка записи' });
        }
        res.sendStatus(200);
    });
});

// Удалить комментарий по ID
app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;

    if (!fs.existsSync(FILE)) return res.sendStatus(404);

    try {
        const lines = fs.readFileSync(FILE, 'utf-8').split('\n').filter(Boolean);
        const filtered = lines
            .map(line => JSON.parse(line))
            .filter(c => String(c.id) !== id);

        fs.writeFile(FILE, filtered.map(c => JSON.stringify(c)).join('\n') + '\n', (err) => {
            if (err) {
                console.error('Ошибка удаления:', err);
                return res.status(500).json({ error: 'Ошибка удаления' });
            }
            res.sendStatus(200);
        });
    } catch (err) {
        console.error('Ошибка удаления:', err);
        res.status(500).json({ error: 'Ошибка обработки данных' });
    }
});


// ====== API Задачи ======

// Получить список задач
app.get('/tasks', (req, res) => {
    try {
        const data = fs.readFileSync(TASKS_FILE, 'utf-8');
        const tasks = data
            .split('\n')
            .filter(Boolean)
            .map(line => JSON.parse(line));
        res.json(tasks);
    } catch (err) {
        console.error('Ошибка чтения/парсинга задач:', err);
        res.status(500).json({ error: 'Ошибка чтения задач' });
    }
});

// Добавить задачу
app.post('/tasks', (req, res) => {
    const task = req.body;
    if (!task || !task.text) {
        return res.status(400).json({ error: 'Некорректный формат задачи' });
    }
    task.id = Date.now();

    fs.appendFile(TASKS_FILE, JSON.stringify(task) + '\n', (err) => {
        if (err) {
            console.error('Ошибка добавления задачи:', err);
            return res.status(500).json({ error: 'Ошибка сохранения задачи' });
        }
        res.status(201).json(task);
    });
});

// Удалить задачу
app.delete('/tasks/:id', (req, res) => {
    const id = req.params.id;
    try {
        const lines = fs.readFileSync(TASKS_FILE, 'utf-8').split('\n').filter(Boolean);
        const tasks = lines.map(line => JSON.parse(line));
        const filtered = tasks.filter(task => String(task.id) !== id);

        fs.writeFile(TASKS_FILE, filtered.map(t => JSON.stringify(t)).join('\n') + '\n', (err) => {
            if (err) {
                console.error('Ошибка удаления задачи:', err);
                return res.status(500).json({ error: 'Ошибка удаления' });
            }
            res.sendStatus(200);
        });
    } catch (err) {
        console.error('Ошибка удаления задачи:', err);
        res.status(500).json({ error: 'Ошибка удаления' });
    }
});

// Обновить задачу
app.put('/tasks/:id', (req, res) => {
    const id = req.params.id;
    const updatedText = req.body.text;

    if (typeof updatedText !== 'string' || updatedText.trim() === '') {
        return res.status(400).json({ error: 'Неверный текст задачи' });
    }

    try {
        const lines = fs.readFileSync(TASKS_FILE, 'utf-8').split('\n').filter(Boolean);
        const tasks = lines.map(line => JSON.parse(line));
        const updatedTasks = tasks.map(task =>
            String(task.id) === id ? { ...task, text: updatedText } : task
        );

        fs.writeFile(TASKS_FILE, updatedTasks.map(t => JSON.stringify(t)).join('\n') + '\n', (err) => {
            if (err) {
                console.error('Ошибка обновления задачи:', err);
                return res.status(500).json({ error: 'Ошибка обновления' });
            }
            res.sendStatus(200);
        });
    } catch (err) {
        console.error('Ошибка при обновлении задачи:', err);
        res.status(500).json({ error: 'Ошибка обработки данных' });
    }
});


// Статика из React - отдача фронтенда
app.use(express.static(path.join(__dirname, '../public')));

// Обработка React-маршрутов
app.get(/^\/(?!comments).*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Запуск
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
