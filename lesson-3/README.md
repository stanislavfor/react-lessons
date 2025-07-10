![](../assets/react-top.png)
# Фреймворк React JS. Обучение: Факультатив
## Урок 5,6. Virtual DOM. Подключение библиотеки UI-компонентов
### Домашнее задание
#### Задание 1: Температурный конвертер с Material UI

Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI <br>
для ввода и отображения температур в градусах Цельсия и Фаренгейта. <br>

Компоненты: Используйте TextField для ввода значения температуры. <br>
Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта). <br>

Логика: При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом. <br>
Реализуйте конвертацию температур в обоих направлениях. <br>


#### Задание 2: Список дел с Material UI

Цель: Разработать компонент TodoList для управления задачами:  <br>
добавление, отображение, и удаление задач. <br>

Компоненты: Используйте TextField для ввода новой задачи. <br>
Добавьте Button для добавления задачи в список. <br>
Для каждой задачи в списке используйте Card или ListItem из Material UI.  <br>
Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon). <br>

Логика: При нажатии на кнопку добавления, новая задача должна добавляться в список. <br>
Рядом с каждой задачей должна быть кнопка для её удаления. <br>

##
### Решение задания

Тема: Virtual DOM, Material UI, PropTypes  
 
Цель: Использование компонентов библиотеки Material UI для создания пользовательских интерфейсов, обработка событий, работа с `useState`.

##
## Задание 1: Температурный конвертер с Material UI
### Цель:
Создать компонент `TemperatureConverter`, который позволяет пользователю вводить температуру 
в Цельсиях или Фаренгейтах, и автоматически конвертировать в другую единицу.

##
### Команды для запуска:

Для доступа в проект выполнить команды:
```bash
  cd lesson-3/work-3/my-first-react-app
```
```bash
  npm start
```

##
### Реализация:
#### 1. Создать файл TemperatureConverter.js:
```
src/components/TemperatureConverter.js
```

##
#### 2. Внести изменения в `TemperatureConverter.js`:
```
import React, { useState } from 'react';
import { TextField, Box, Typography } from '@mui/material';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (!isNaN(value)) {
      setFahrenheit(((parseFloat(value) * 9) / 5 + 32).toFixed(2));
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (!isNaN(value)) {
      setCelsius((((parseFloat(value) - 32) * 5) / 9).toFixed(2));
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" gutterBottom>
        Температурный конвертер
      </Typography>
      <TextField
        label="Цельсий"
        variant="outlined"
        value={celsius}
        onChange={handleCelsiusChange}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Фаренгейт"
        variant="outlined"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        margin="normal"
        fullWidth
      />
    </Box>
  );
};

export default TemperatureConverter;
```

#### 3. Импортировать компонент в App.js

- Открыть файл `src/App.js`
- Добавить импорт компонента, что позволит использовать <TemperatureConverter /> внутри JSX:

```
import TemperatureConverter from './components/TemperatureConverter';
````
#### 4. Добавить компонент в разметку

В App.js после компонента <CommentsList /> добавить:

```
<TemperatureConverter />
```

Пример импорта компонента в App.js:

```
import React from 'react';
import TemperatureConverter from './components/TemperatureConverter';

function App() {
return (
<div className="App">
<h2>Температурный конвертер</h2>
<TemperatureConverter />
</div>
);
}

export default App;

```


#### 5. Проверить, что библиотека @mui/material установлена

Выполнить команду:

```
npm install @mui/material @emotion/react @emotion/styled
```
и

```
npm install @mui/icons-material
```

Обновить все `@mui/*` пакеты до совместимой версии:

```bash
npm install @mui/material@latest @mui/icons-material@latest @emotion/react@latest @emotion/styled@latest
````

Если требуется подключать несколько компонентов, например, TodoList и TemperatureConverter, 
можно импортировать их оба и вставить в JSX:

```
import TodoList from './components/TodoList';
import TemperatureConverter from './components/TemperatureConverter';

function App() {
return (
<>
<TemperatureConverter />
<TodoList />
</>
);
}
```

#### 6. Обернуть всё приложение в ThemeProvider

Компонент использует MUI (Material UI), его добавить с импортом в `src/index.js`.<br>
Открыть src/index.js и добавляем import так:
```
import { TextField, Box, Typography } from '@mui/material';
```
MUI требует обертку виджета с помощью ThemeProvider для всего приложения. <br>
И в коде файла получаем:

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>  {/* обёртка для MUI */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();

```

##
## Задание 2: Список дел с Material UI
### Цель:
Создать компонент `TodoList`, позволяющий добавлять, отображать и удалять задачи. Использовать Material UI.

##
### Структура:

Создать файл:

```
src/components/TodoList.js
```

##
### Реализация:

```
import React, { useState } from 'react';
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <Box sx={{ padding: 4 }}>
      <TextField
        label="Новая задача"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleAddTask}>
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
```

##
## Установка Material UI (если ещё не установлен)

```bash
  npm install @mui/material @emotion/react @emotion/styled
```
и
```bash
  npm install @mui/icons-material
```

##
## Интеграция компонентов

В `src/App.js`:

```
import React from 'react';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <TemperatureConverter />
      <TodoList />
    </div>
  );
}

export default App;
```

##
## Возможные ошибки:

- Не установлены зависимости MUI - необходимо выполнить `npm install`.
- Не передан `value` или `onChange` в `TextField` - поля не будут реагировать.
- Ошибки при работе с числовыми значениями - убедись, что используется `parseFloat`.

##
## Результат

- Температурный конвертер работает в обе стороны.
- Можно добавлять задачи и удалять их по кнопке с иконкой.

<br><br><br><br>
### - > [Переход в Корневой каталог](../README.md)

##
## Инструкция
### Остановка процесса на порту 3000, если консоль уже закрыта

- Для Windows (PowerShell) выполнить команду:

```bash
  cmd /c 'for /f "tokens=5" %a in ('netstat -aon ^| find ":3000" ^| find "LISTENING"') do taskkill /PID %a /F'
```

- Для Windows (CMD) выполнить команду:
```bash
  for /f "tokens=5" %a in ('netstat -aon ^| find ":3000" ^| find "LISTENING"') do taskkill /PID %a /F
```
- Для Linux/macOS:
```bash
  kill -9 $(lsof -t -i:3000)
```
- Альтернатива для PowerShell в Windows:
```powershell
    Get-NetTCPConnection -LocalPort 3000 | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }
```

#### Дополнительно, если требуется проверить, свободен ли порт 3000:

- Для Windows (PowerShell или CMD) выполнить команду:
```bash
  netstat -aon | find ":3000"
```

- Для Linux/macOS:
```bash
  lsof -i :3000
```


<hr><hr><hr><hr>

![](../assets/react.png)

<hr><hr><hr><hr>