[//]: # (my-first-react-app/server/README.md)
# Добавление в React-проекте файлов `comments.txt` и `server.js`
## Добавление backend


| Путь                                     | Назначение                                        |
|------------------------------------------|---------------------------------------------------|
| `my-first-react-app/server/server.js`    | основной backend-сервер Node.js                   |
| `my-first-react-app/server/comments.txt` | текстовый файл для хранения комментариев          |
| `src/components/CommentsList.js`         | React-компонент отправляет запросы на `server.js` |


##
## Настройка запуска backend
### 1. Перейти в папку `server`:

```bash
  cd lesson-7/work-7/my-first-react-app/server/
```

### 2. Инициализировать `package.json` и установить зависимости:

```bash
  npm init -y  
```
, а также
```bash
  npm install express cors
```

### 3. Создать файл `server.js`, если отсутствует

```bash
  touch server.js
```


## Запуск

В корне проекта (`my-first-react-app`) открыть два терминала. <br>


### Терминал 1: React

- Перейти в коревую папку проекта, папку `my-first-react-app`, для этого выполнить команды:

```bash
  cd lesson-7/work-7/my-first-react-app/
```
- Запустить проект на react:
```bash
  npm start
```

### Терминал 2: Backend

- Перейти в папку `server` проекта `my-first-react-app`, для этого выполнить команды:

```bash
  cd lesson-7/work-7/my-first-react-app/server/  
```
- Запустить сервер Node.js командой:
```bash  
  node server.js
```


В `CommentsList.js` все запросы должны идти на:

```javascript
    fetch('http://localhost:5000/comments')
```

### Перезапуск сервера

```bash
  node server/server.js
```

<br><br><br><br>


