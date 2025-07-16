![](assets/react-top.png)
# Фреймворк React JS. Обучение: Факультатив
### 
### Урок: 1,2.<br> Тема: Знакомство с React и первые компоненты. Работа с JSX<br> - > [lesson-1](lesson-1/README.md)
### 
### Урок: 3,4.<br> Тема: State, Props. Жизненный цикл react компонента. Хуки<br> - > [lesson-2](lesson-2/README.md)
### 
### Урок: 5,6.<br> Тема: Virtual DOM. Подключение библиотеки UI-компонентов<br> - > [lesson-3](lesson-3/README.md)
### 
### Урок: 7,8.<br> Тема: Children. Роутинг в React<br> - > [lesson-4](lesson-4/README.md)
### 
### Урок: 9,10.<br> Тема: Компоненты высшего порядка знакомство с Redux<br> - > [lesson-5](lesson-5/README.md)
### 
### Урок: 11,12.<br> Тема: Погружение в Redux. Connect<br> - > [lesson-6](lesson-6/README.md)
###
### Урок: 13,14.<br> Тема: Redux middlewares. Redux persist<br> - > [lesson-7](lesson-7/README.md)
### 
### Урок: 15,16.<br> Тема: Работа с API<br> - > [lesson-8](lesson-8/README.md)
##
##
## Инструкция

При установленной глобально в систему React JS, создать проект можно с помощью команды:
```
npx create-react-app my-react-app
```
, где: 
- my-react-app - название проекта, <br>
- команда create-react-app создаёт готовую к разработке среду с минимальной конфигурацией, в которой: <br>
  - public - статические файлы, включая основной HTML. <br>
  - src - весь исходный код приложения. <br>
  - package.json - управление зависимостями и скриптами. <br>
  - остальные файлы обеспечивают инфраструктуру разработки и сборки. <br>

В каталоге my-react-app автоматически создаётся базовая структура проекта на React с предустановленными файлами и папками. <br>
Объяснение назначения каждого элемента этой структуры. <br>
Понятная структура упрощает навигацию по коду, то есть легко найти, где что лежит. Разделяет ответственность: UI, страницы, логика - в разных местах. <br>
Масштабируется: добавлять новые страницы, компоненты и сервисы просто. Упрощает тестирование - каждый модуль легко покрыть unit-тестами.

##
### Вложенные папки и файлы
Общая структура проекта:
- node_modules/, 
- public/, 
- src/, 
- .gitignore, 
- package.json, 
- package-lock.json,
- README.md

##
#### Папка node_modules/ 
Папка, автоматически создаваемая после установки зависимостей (npm install), содержит все пакеты, нужные для работы приложения. <br>
Содержит библиотеки, указанные в package.json, и их зависимости. <br>
Обычно не коммитится в систему контроля версий.
##
#### Папка public/
Папка, содержит статические файлы, доступные напрямую из браузера. <br>
Основные файлы:
- index.html - главный HTML-шаблон, в который React "вставляет" приложение (через div с id="root")
- favicon.ico - иконка вкладки браузера
- manifest.json - настройки для Progressive Web App (PWA), например, название, иконки
- robots.txt - указывает поисковым системам, как индексировать сайт
- logo192.png, logo512.png - иконки для PWA
- asset-manifest.json - создаётся при сборке, содержит информацию о сгенерированных файлах, полезна для загрузки ресурсов <br>
Всё, что находится в public, доступно по прямому пути: /имя_файла.

##
#### Папка src/
Основная папка для исходного кода приложения. Папка src - место, где выполняется большая часть разработки. <br>
Всё, что должно быть написано в проекте: компоненты, стили, утилиты, находится в папке src. <br>
Основные файлы:
- index.js - точка входа в приложение. Здесь ReactDOM рендерит <App /> в элемент с id "root" из index.html
- App.js - основной компонент приложения. Часто используется как контейнер для маршрутов или макета
- App.css - стили для App.js. Можно модифицировать или заменить
- index.css - общие стили, применяемые ко всему приложению. Подключаются в index.js
- App.test.js - файл для тестирования компонента App.js с помощью Jest и React Testing Library
- logo.svg - пример ресурса, иконка React. Используется в App.js
- reportWebVitals.js - отправка (опционально) метрик производительности. Можно подключить систему аналитики
- setupTests.js - конфигурация для запуска тестов (Jest), например, подключение утилит для тестирования.

##
#### Файл .gitignore

Файл указывает для Git, какие файлы и папки нужно игнорировать и не добавлять в репозиторий. <br>
Пример не указывать для репозитория GitHub: node_modules/, .env, временные файлы сборки и т.д.
##
#### Файл package.json

Файл package.json - это основной файл настроек проекта. <br>
Содержит: 
- название проекта, 
- зависимости (dependencies, devDependencies), 
- команды (scripts),
- настройки сборки,
- информация о версии и лицензии.

Пример команд в scripts:
```
"scripts": { "start": "react-scripts start", // запуск локального сервера 
            "build": "react-scripts build", // сборка проекта для продакшена 
            "test": "react-scripts test", // запуск тестов 
            "eject": "react-scripts eject" // извлечение конфигурации Webpack (необратимая операция) 
            }
```
##
#### Файл package-lock.json

Файл package-lock.json автоматически создаётся при установке зависимостей. <br>
Зафиксирует точные версии всех установленных пакетов и их вложенных зависимостей. <br>
Обеспечивает воспроизводимость сборки на разных машинах. <br>

##
#### Файл README.md
Первоначальная документация к проекту. Содержит краткое описание, команды для запуска, сборки и тестирования проекта. <br>
Можно отредактировать и использовать как полноценную документацию. 
##
### Дополнительные папки проекта
Еще в проектах применяют папки pages/, components/, services/, store/, assets/, utils/. <br>
Это структурные единицы, которые не входят в стандарт create-react-app, но часто используются в реальных проектах на React для удобства и масштабируемости. 
##
#### pages/ - папка со страницами приложения
Здесь хранятся компоненты, соответствующие отдельным маршрутам (routes), например: /login, /about, /products. <br>
Каждая страница в папке pages/ - это, как правило, крупный компонент, отображающий целый экран, и может включать множество других мелких компонентов. <br>
Пример структуры:
- src/ 
  - pages/ 
    - HomePage.jsx 
    - AboutPage.jsx 
    - LoginPage.jsx 
    - NotFoundPage.jsx

Пример кода:
```
// pages/HomePage.jsx 
import React from 'react'; 
import Header from '../components/Header'; 
import ProductList from '../components/ProductList'; 
export default function HomePage() { 
    return ( <> <Header /> <h1>Добро пожаловать!</h1> <ProductList /> </> ); 
}
```
##
#### Папка components/ - повторно используемые компоненты

Содержит мелкие, переиспользуемые части интерфейса: кнопки, карточки, формы, заголовки, модальные окна и т.д. <br>
Компоненты не завязаны на маршруты, они просто части UI, которые можно встраивать в разные страницы. <br>
Пример структуры: <br>
- src/ 
  - components/ 
    - Header.jsx 
    - Footer.jsx 
    - ProductCard.jsx 
    - Button.jsx 
    - Modal.jsx

Пример кода:
```
// components/Button.jsx 
import React from 'react'; 
export default function Button({ text, onClick }) { 
    return <button onClick={onClick}>{text}</button>; 
}
```
##
#### Папка services/ - работа с API и бизнес-логикой

Содержит модули для взаимодействия с внешними сервисами, API-запросов, локального хранилища, а также бизнес-логики (например, работа с авторизацией). <br>
Эти файлы не отображают UI, а содержат вспомогательные функции. <br>
Пример структуры: <br>
- src/ 
  - services/ 
    - authService.js 
    - productService.js 
    - api.js

Пример кода:
```
// services/authService.js 
import axios from './api'; 
export async function login(email, password) { const response = await axios.post('/auth/login', { email, password }); return response.data; } 
// services/api.js 
import axios from 'axios'; 
const instance = axios.create({ baseURL: 'https://api.example.com', timeout: 5000, }); 
export default instance;
```
##
#### Папка store/ - глобальное хранилище состояния

Папка store/ нужна для управления глобальным состоянием (Redux, Zustand, Context). <br>
Содержит файлы, связанные с глобальным состоянием приложения, например: <br>
- Redux,
- Zustand,
- MobX,
- Context API + useReducer.

Используется, если нужно хранить данные, доступные в разных частях приложения: авторизация, корзина, настройки, пользовательские данные и т.п. <br>
Пример структуры с Redux: <br>
- src/ 
  - store/ 
    - index.js // корневой store 
    - userSlice.js // reducer + actions для пользователя 
    - cartSlice.js // reducer + actions для корзины

Пример кода:
```
// store/userSlice.js (с Redux Toolkit) 
import { createSlice } from '@reduxjs/toolkit'; 
const userSlice = createSlice({ name: 'user', initialState: { 
    isLoggedIn: false, userData: null },    
    reducers: { login(state, action) { 
        state.isLoggedIn = true; state.userData = action.payload; }, 
        logout(state) { state.isLoggedIn = false; state.userData = null; 
        } 
    } 
}); 
export const { login, logout } = userSlice.actions; 
export default userSlice.reducer; 
// store/index.js import { configureStore } from '@reduxjs/toolkit'; 
import userReducer from './userSlice'; 
import cartReducer from './cartSlice'; 
const store = configureStore({ 
    reducer: { 
        user: userReducer, 
        cart: cartReducer,   
    } 
}); 
export default store;
```
##
#### Папка assets/ - ресурсы: изображения, шрифты, иконки, стили

Папка assets/ нужна для хранения ресурсов: изображений, иконок, стилей, шрифтов. <br>
Содержит статические ресурсы, которые используются в интерфейсе: <br>
- изображения: логотипы, фоновые картинки
- SS/SASS-файлы
- шрифты
- SVG-иконки

Не нужно путать с public/, потому, что файлы из assets/ импортируются через import, а не через путь /img/logo.png.

Пример структуры:
- src/ 
  - assets/ 
    - images/ 
      - logo.png 
    - fonts/ 
      - Roboto-Regular.ttf 
    - icons/ 
      - cart.svg 
    - styles/ 
      - variables.css

Пример использования:
```
import logo from '../assets/images/logo.png'; 
export default function Header() { 
    return <img src={logo} alt="Логотип" />; 
    }  
    /* assets/styles/variables.css */ 
    :root { --main-color: #0066ff; }
```
##
#### Папка utils/ - вспомогательные функции (утилиты)

Папка utils/ нужна для выполнения утилитарных функций: форматирование, проверки, вспомогательные операции. <br>
Папка содержит переиспользуемые функции, которые не связаны напрямую с UI, но облегчают работу с данными, форматированием, проверками, математикой и т.д. <br>
Пример структуры:
- src/ 
  - utils/ 
    - formatDate.js
    - validators.js
    - mathUtils.js

Пример кода:
```
// utils/formatDate.js 
export function formatDate(date) { 
    return new Date(date).toLocaleDateString('ru-RU');  
    } 
// utils/validators.js 
export function isEmailValid(email) { 
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);    
    }
```
Использование в компоненте:
```
import { formatDate } from '../utils/formatDate'; 
export default function Profile({ user }) { 
    return <p>Дата регистрации: {formatDate(user.createdAt)}</p>; 
    }
```
##
### Взаимосвязь между папками

Например:
- HomePage из pages/ -> использует ProductList, Header из components/
- ProductList -> вызывает getProducts() из productService в services/

##
#### **Примечание**: 
Для работы с собственным репозиторием проекта, после создания проекта react, <br> 
необходимо удалить предустановленную папку .git/ из корневой папки проекта.

<br><br><br><br>
![](assets/react.png)
<br><br><br><br>

