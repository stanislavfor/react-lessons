![](../assets/react-top.png)
# Фреймворк React JS. Обучение: Факультатив
## Урок 3,4. State, Props. Жизненный цикл react компонента. Хуки
### Домашнее задание

Задание: Список комментариев с удалением.

Цель: Комбинирование useState, рендеринга списков и обработки событий для создания интерактивного интерфейса.

Задача: Создать компонент CommentsList, который отображает список комментариев. <br> 
Каждый комментарий должен иметь кнопку для его удаления.  <br>
При нажатии на кнопку комментарий должен удаляться из списка. <br>

Можно использовать заготовку:
```
const [comments, setComments] = useState([
{ id: 1, text: "Это первый комментарий" },
{ id: 2, text: "Это второй комментарий" },
{ id: 3, text: "Это третий комментарий" }
]);
```

##
### Решение задания

Тема: `useState`, рендеринг списков, обработка событий  

Цель: Научиться использовать хук `useState` совместно с рендерингом массивов и обработкой событий, 
чтобы реализовать динамическое обновление UI.

### Команды для запуска:

Для доступа в проект выполнить команды:
```bash
  cd lesson-2/work-2/my-first-react-app
```
```bash
  npm start
```
или 
```bash
  cd my-first-react-app
```
```bash
  npm start
```

После запуска по адресу [http://localhost:3000](http://localhost:3000) откроется стартовая страница React.

##
## Описание задачи

Создать компонент `CommentsList`, который:

- хранит список комментариев в состоянии,
- отображает каждый комментарий с кнопкой «Удалить»,
- удаляет комментарий из состояния при нажатии на кнопку.

##
## 1. Создание проекта и структуры

Если проекта ещё не создан:

```bash
  npx create-react-app comments-app
```

```bash
  cd comments-app
```

```bash
  npm start
```

Создать файл компонента командой:

```bash
  touch src/components/CommentsList.js
```
Или вручную по пути:

```
src/components/CommentsList.js
```

##
## 2. Импорт React и создание компонента

Также требуется подключить компонент CommentsList в App.js, при необходимости использования на странице, например:

```
import CommentsList from './components/CommentsList';
```
И внести изменения в `CommentsList.js`:

```
// src/components/CommentsList.js
import React, { useState } from 'react';
import './CommentsList.css'; // Подключение стилей, если нужно

const CommentsList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" }
  ]);

  const handleDelete = (id) => {
    const updatedComments = comments.filter(comment => comment.id !== id);
    setComments(updatedComments);
  };

  return (
    <div className="comments-container">
      <h2>Список комментариев</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id} className="comment-item">
            {comment.text}
            <button onClick={() => handleDelete(comment.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
```

##
## 3. Добавление стилей (опционально)

Проверить, что есть файл `src/components/CommentsList.css`, или создать его:

```
src/components/CommentsList.css
```

Добавить в него стили:

```
.comments-container {
  padding: 20px;
  font-family: sans-serif;
}

.comment-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}

.comment-item button {
  margin-left: 10px;
  background-color: crimson;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
```

##
## 4. Использование компонента в `App.js`

```
import React from 'react';
import './App.css';
import CommentsList from './components/CommentsList';

function App() {
  return (
    <div className="App">
      <CommentsList />
    </div>
  );
}

export default App;
```

##
## Объяснение кода

- `useState([...])` - создаёт и инициализирует состояние с массивом комментариев.
- `setComments(...)` - функция, изменяющая состояние.
- `filter(...)` - удаляет комментарий по `id`.
- `onClick={() => handleDelete(id)}` - обработчик события.

##
## Возможные ошибки

- Не забыть `key` при `map` - `key={comment.id}`.
- Если `setComments` не вызывает перерисовку - убедись, что `filter` создаёт **новый массив**, а не изменяет существующий.

##
## Лучшие практики

- Использовать `id` как ключ в списке, а не индекс.
- Стараться не мутировать массив напрямую.
- Всегда создавать новые объекты/массивы при обновлении состояния (`setState` должен получать новое значение, не мутацию).

##
## Результат

При запуске страницы:

- Отображается список из 3 комментариев.
- У каждого комментария - кнопка "Удалить".
- При нажатии комментарий исчезает из списка.

<br><br><br><br>
### - > [Переход в Корневой каталог](../README.md)
<hr><hr><hr><hr>

![](../assets/react.png)

<hr><hr><hr><hr>