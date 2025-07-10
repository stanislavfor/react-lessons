![](../assets/react-top.png)
# Фреймворк React JS. Обучение: Факультатив
## Урок 7,8. Children. Роутинг в React
### Домашнее задание

Создать приложение с двумя страницами: ```"Главная страница"``` и ```"О нас"```. <br>
На каждой странице должна быть навигационная ссылка для перехода на другую страницу. <br>

##
### Команды для запуска:

Для доступа в проект выполнить команды:
```bash
  cd lesson-4/work-4/my-first-react-app
```
```bash
  npm start
```

#### Этапы выполнения:

1. Установка react-router-dom: <br>
Если еще не установлен, добавить react-router-dom в проект:  <br>

```
    npm install react-router-dom
```

2. Создание компонентов: <br>
Создать два компонента: ```HomePage.jsx``` и ```AboutPage.jsx```. <br>
В каждом компоненте добавить простой текст, например,  <br>
```<h1>Главная страница</h1>``` для HomePage  <br>
и  <br>
```<h1>О нас</h1>``` для AboutPage. <br><br>
3. Реализовать переходы между страницами. <br>

##
### Решение задания

Тема: Children, Routing в React  
 
Цель: Освоить работу с библиотекой `react-router-dom` и реализовать переходы между страницами в React-приложении.

##
## Задание: Приложение с двумя страницами

Создать React-приложение, в котором реализован роутинг между двумя страницами:

- Главная страница
- Страница "О нас"

##
## 1. Установка `react-router-dom`

Если библиотека ещё не установлена, установить `react-router-dom` командой`:

```bash
  npm install react-router-dom
```
Или аналогичную версию в проекте:
```
  npm install react@18 react-dom@18 react-router-dom@6
```
##
### 1.1 Переустановка react-router-dom

Для PowerShell, удаление зависимостей (можно удалить файл из папки вручную, через проводник):
```bash
  Remove-Item -Recurse -Force node_modules, package-lock.json
```
Или для CMD (можно удалить файл из папки вручную, через проводник):
```bash
  rm -rf node_modules package-lock.json
```
Переустановка:
```bash
  npm install react-router-dom@6
```
или
```bash
  npm install react@18.2.0 react-dom@18.2.0 react-router-dom@6
```
Обновление `npm`:
```bash
  npm install
```
Проверка версии `react-router-dom`:

```
npm list react-router-dom
```



##
## 2. Создание файлов компонентов

Создать структуру:

```
src/pages/HomePage.jsx
src/pages/AboutPage.jsx
App.js
```

##
## 3. Код компонентов страниц
### `HomePage.jsx`

```
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <Link to="/about">Перейти на страницу "О нас"</Link>
    </div>
  );
};

export default HomePage;
```

### `AboutPage.jsx`

```
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <h1>О нас</h1>
      <Link to="/">Вернуться на Главную</Link>
    </div>
  );
};

export default AboutPage;
```

### index.js
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

```

##
## 4. Настройка маршрутов в `App.js`

```
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### Порядок использования Router

Все компоненты, которые используют маршрутизацию: Link, Route, Routes, должны быть вложены внутрь Router, 
Router должен находиться во внешней оболочке JSX и выше компонентов, где могут 
использоваться маршруты, например, Link в HomePage и AboutPage.
Пример кода:
```
function App() {
    return (
        <div className="App">
            <header>...</header>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </div>
    );
}

```

##
## Объяснение кода

- `<BrowserRouter>` - контейнер для всего приложения с роутингом.
- `<Routes>` - содержит список маршрутов.
- `<Route path="/" element={<HomePage />} />` - отображает компонент при переходе по URL `/`.
- `<Link to="..." />` - создаёт ссылку для перехода без перезагрузки страницы.

##
## Возможные ошибки

- Не установлен `react-router-dom`.
- Не обернуто приложение в `<BrowserRouter>`.
- Неправильные пути (`path`), из-за которых не отображаются компоненты.

##
## Результат

- Открытие `http://localhost:3000/` показывает "Главную страницу".
- Нажатие на ссылку ведёт на страницу "О нас".
- На странице "О нас" - ссылка для возвращения на главную.

<br><br><br><br>
### - > [Переход в Корневой каталог](../README.md)
##
## Инструкция
##
### Команды для создания проекта в папке work-4

Для доступа в проект `work-4` выполнить команды:
```bash
  cd lesson-4/work-4/
```

Открыть PowerShell внутри папки `work-4` и выполнить последовательно команды:
1. Создание нового проекта:
```powershell
   npx create-react-app my-first-react-app
```
2. Перейти в папку проекта:
```powershell
   cd my-first-react-app
```
3. Удалить сгенерированную папку src, если нужна замена на папку src из предыдущего проекта:
```powershell
   Remove-Item -Recurse -Force .\src
```
4. Скопировать папку src (из распакованного архива) в проект, выполнив команду или вручную:
   Пример:
```powershell
   Copy-Item -Recurse -Force "\Путь\до\распакованного\src" .\src
```
5. Установка зависимостей:
```powershell
   npm install react@18.2.0 react-dom@18.2.0 react-router-dom@6.21.1 @mui/material@5.14.18 @mui/icons-material@5.14.18 @emotion/react@11.11.1 @emotion/styled@11.11.0
```
6. Запуск проекта:
```powershell
   npm start
```



<hr><hr><hr><hr>

![](../assets/react.png)

<hr><hr><hr><hr>