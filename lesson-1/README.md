![](../assets/react-top.png)
# Фреймворк React JS. Обучение: Факультатив
## Урок 1,2. Знакомство с React и первые компоненты. Работа с JSX
### Домашнее задание

- Развернуть новый проект с использованием create-react-app.
- Создать компонент Message, отображающий переданный ему props текст.
- Стилизовать компоненты через css (при желании можно использовать less или sass).
- Дополнительное задание: Установить расширение React Devtools.

##
### Решение задания
## Цель задания

Научиться создавать базовое React-приложение, разрабатывать простые компоненты, использовать `props`, 
а также подключать стили в проекте на react. Освоить установку полезного инструмента React Devtools.

##
## 1. Развертывание нового проекта с помощью `create-react-app`
### Команда для создания проекта:

```bash
  cd lesson-1/work-1
```

```bash
  npx create-react-app my-first-react-app
```
, где
- `npx` - утилита из npm, позволяющая запускать пакеты без установки.
- `create-react-app` - CLI-инструмент для быстрой сборки React-проекта.
- `my-first-react-app` - имя создаваемой директории (можно заменить на своё).

### Команды для запуска:

```bash
  cd my-first-react-app
```
```bash
  npm start
```

После запуска по адресу [http://localhost:3000](http://localhost:3000) откроется стартовая страница React.

##
## 2. Создание компонента `Message`

Внутри папки src создать папку components, если её ещё нет:

```bash
mkdir src/components
````
Создать в ней файл CommentsList.js, например, через редактор или командой:

```bash
touch src/components/Message.js
```

### Структура:

Файл `Message.js` должен находится по пути:

```
src/components/Message.js
```

### Код компонента:

Открыть файл `src/components/Message.js` и изменить его следующим образом:

```
// src/components/Message.js
import React from 'react';

const Message = (props) => {
  return <p className="message-text">{props.text}</p>;
};

export default Message;
```

##
## 3. Подключение и отображение компонента

Открыть файл `src/App.js` и изменить его следующим образом:

```
import React from 'react';
import './App.css';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <h1>Привет, React!</h1>
      <Message text="Это моё первое React-сообщение!" />
    </div>
  );
}

export default App;
```

##
## 4. Стилизация компонентов через CSS

Создать файл или использовать уже существующий `src/App.css`. Добавить туда стили:

```
/* App.css */
.App {
  text-align: center;
  padding: 40px;
}

.message-text {
  color: darkblue;
  font-size: 1.5em;
  margin-top: 20px;
}
```

#### Примечание:
Возможно использовать CSS-препроцессоры, например, Sass, для этого установить:

```bash
  npm install sass
```

Затем создать файл `App.scss`, импортировать его в `App.js`:

```
import './App.scss';
```

##
## Установка React Developer Tools (дополнительное действие)
### Для Chrome:

1. Открыть страницу расширения [react-developer-tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi).
2. Нажать "Установить".
3. Перезапустить браузер и открыть DevTools (F12) -> вкладка `React`.

### Для Firefox:
1. Установить [react-devtools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).

##
## Проверка результата

- При открытии [http://localhost:3000](http://localhost:3000) должно отображаться:
  ```
  Привет, React!
  Это моё первое React-сообщение!
  ```

- Открытие DevTools -> вкладка React должна показывать структуру компонентов, если расширение установлено.

##
## Результат

| Этап                       | Выполнено                   |
|----------------------------|-----------------------------|
| CRA-проект создан          | `npx create-react-app`      |
| Компонент `Message` создан | Отображает `props.text`     |
| Стили подключены           | CSS-класс `.message-text`   |
| React Devtools установлены | через браузерное расширение |

<br><br><br><br>
### - > [Переход в Корневой каталог](../README.md)


## Инструкция
##
### Проверить, что установлен Node.js (включает `npx` и `npm`)

Необходимо проверять, установлен ли Node.js и правильно ли работает среда.
`npx` - это утилита, входящая в состав Node.js, начиная с версии 5.2.0 и выше.
`npx` используется для запуска npm-пакетов без необходимости устанавливать их глобально.
Если команда `npx` не распознается в консоли значит, что не установлен Node.js, в состав которого входит и `npx`, 
и Node.js не добавлен в переменную среды PATH, или установлен некорректно.

##
#### 1. Установка `npx` и Node.js

1. Перейти на официальный сайт: [https://nodejs.org](https://nodejs.org)
2. Скачать [LTS-версию](https://nodejs.org/en/download), что рекомендуется для большинства пользователей
3. Установить Node.js как обычную программу
4. После установки требуется перезапустить консоль или редактор кода, чтобы переменные среды обновились

##
#### 2. Проверка установки Node.js и `npx`

Открыть терминал и выполнить:

```bash
node -v
npm -v
npx -v
```

Если команды работают и мы видим версии, значит установка успешна. Пример:

```
v22.17.0
10.9.2
10.9.2
```

##
#### 3. Добавление `npx` в системную переменную PATH

Проверить, что путь к Node.js добавлен в системную переменную PATH:

1. Открыть PowerShell и выполнить:

```powershell
[System.Environment]::GetEnvironmentVariable("PATH", "User")
```

Проверить, что там есть путь вроде:

```
C:\Program Files\nodejs\
```

Если его нет:

- Открыть «Переменные среды» Windows
- В разделе "User variables" -> `Path` -> `Edit`
- Добавить:

```
C:\Program Files\nodejs\
```

##
### Дополнительно

Если не требуется использовать `npx`, можно установить `create-react-app` глобально.
Но использование `npx` предпочтительнее, так как всегда использует последнюю версию пакета.
Команды для установки `npx` глобально в систему:

```bash
npm install -g create-react-app
create-react-app my-first-react-app
```






<hr><hr><hr><hr>

![](../assets/react.png)

<hr><hr><hr><hr>