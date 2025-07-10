![](../assets/react-top.png)
# Фреймворк React JS. Обучение: Факультатив
## Урок 9,10. Компоненты высшего порядка знакомство с Redux
### Домашнее задание
#### Приложение для переключения темы сайта
Создать приложение, позволяющее пользователю переключать между светлой и темной темой сайта.

#### Функционал:

*Action types:* TOGGLE_THEME. <br>
*Actions:* Создать действие для переключения темы. <br>
*Reducer:* Реализовать редьюсер, который обрабатывает это действие и изменяет тему в состоянии приложения. <br>
*Component:* Создать компонент, который отображает переключатель для изменения темы сайта. <br>


#### Описание:

Состояние: Для хранения текущей темы можно использовать логическую переменную <br>
(true для темной темы и false для светлой) или строку ("dark" или "light"). <br>
Интерфейс: Интерфейс может состоять из переключателя, который изменяет тему со светлой на темную и обратно.

##
### Решение задания

Тема: Компоненты высшего порядка, Знакомство с Redux  

Цель: Освоение работы с Redux через реализацию переключения светлой/тёмной темы интерфейса.

##
## Задание: Приложение для переключения темы сайта

Создать приложение, позволяющее пользователю переключать между светлой и тёмной темой, используя Redux.

##
## Зависимости уже установленные в проекте

Эти версии уже стабильно работают для выполнения заданий имеющихся в данном проекте:
```bash
react@18.2.0  
react-dom@18.2.0  
react-router-dom@6.21.1  
@mui/material@5.14.18  
@mui/icons-material@5.14.18  
@emotion/react@11.11.1  
@emotion/styled@11.11.0
```
 
##
### Команды для запуска:

Для доступа в проект выполнить команды:
```bash
  cd lesson-5/work-5/my-first-react-app
```
```bash
  npm start
```
### - > [Переход в Проект версии 5v2](./work-5v2/README.md)
##
## 1. Установка Redux

Устанавливаем зависимости Redux в папке `my-first-react-app` проекта.

Общая команда для установки Redux:
```bash
  npm install redux react-redux
```
Корректная команда установки зависимостей `Redux` для данного проекта:
```bash
  npm install redux@4.2.1 react-redux@8.1.3
```

| Пакет 'npm'   | Версия пакета | Пояснение совместимости                                   |
|---------------|---------------|-----------------------------------------------------------|
| `redux`       | `4.2.1`       | Последняя стабильная версия, совместима с `react-redux@8` |
| `react-redux` | `8.1.3`       | Полностью совместима с `React 18`, `hooks`, и `Redux 4`   |



##
## 2. Создание Redux-сущностей
### `src/redux/themeActions.js`

```js
export const TOGGLE_THEME = 'TOGGLE_THEME';

export const toggleTheme = () => ({
  type: TOGGLE_THEME
});
```

##
### `src/redux/themeReducer.js`

```js
import { TOGGLE_THEME } from './themeActions';

const initialState = {
  isDark: false // false - светлая тема
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, isDark: !state.isDark };
    default:
      return state;
  }
};
```

##
## 3. Подключение хранилища Redux

### `src/redux/store.js`

```
import { createStore } from 'redux';
import { themeReducer } from './themeReducer';

const store = createStore(themeReducer);

export default store;
```

##
### Обернуть приложение в `Provider`

В `src/index.js`:

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

##
## 4. Компонент переключения темы
### `src/components/ThemeToggle.js`

```
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeActions';

const ThemeToggle = () => {
  const isDark = useSelector((state) => state.isDark);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div style={{
      backgroundColor: isDark ? '#333' : '#fff',
      color: isDark ? '#fff' : '#000',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1>{isDark ? 'Тёмная тема' : 'Светлая тема'}</h1>
      <button onClick={handleToggle}>
        Переключить тему
      </button>
    </div>
  );
};

export default ThemeToggle;
```

##
## 5. Использование компонента

В `App.js`:

```
import React from 'react';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return <ThemeToggle />;
}

export default App;
```

##
## Возможные ошибки

- Не обернуто приложение в `<Provider>` - `useSelector` и `useDispatch` не будут работать.
- Ошибка в названии `type` или `case` в `reducer`.
- Не обновлено `store` после изменения `reducer`.

##
## Результат

- При запуске приложения отображается текущая тема.
- Кнопка позволяет переключать между светлой и тёмной темой.
- Состояние темы сохраняется в Redux и используется в интерфейсе.

##

<br><br><br><br>
### - > [Переход в Корневой каталог](../README.md)
<hr><hr><hr><hr>

![](../assets/react.png)

<hr><hr><hr><hr>