##
## Развертывание React-проекта на продакшн-хостинге

Полный проект React (`new-brand-react-app`) с папками `src`, `public`, с файлом `package.json`, можно развернуть на хостинге в собственном домене, например 
```
https://my-domain.com
```


##
### 1. Проверить структуру проекта

В корне проекта (`new-brand-react-app`) должны быть: папки public/ с файлом index.html, папка src/ с компонентами приложения и зависимостями, файлы package.json и package-lock.json или yarn.lock.


##
### 2. Указать требуемый домен в `package.json`

Указать домен в `package.json` проекта на react-js необходимо для правильной генерации путей внутри собранного приложения. <br>
Требуется открыть `package.json` и добавить поле `"homepage"`:

```
"homepage": "https://my-domain.com",
```


##
### 3. Установка зависимостей и сборка

Открыть терминал и выполнить:

```bash
cd new-brand-react-app
npm install      # Установка всех зависимостей
npm run build    # Сборка проекта
```

В результате появится папка `build/` - это и есть продакшн-версия сайта.

##
### 4. Загрузка приложения на хостинг

#### 4.1. Размещение сайта через FTP/хостинг-провайдера, например, Timeweb, Beget, REG.RU, etc.

1. Подключись к хостингу через **FTP/SFTP** или через веб-панель
2. Перейти в папку, соответствующую домену, обычно это папка с названием `public_html`, `www` или `htdocs`
3. Удалить всё лишнее и загрузить содержимое папки `build/`, а не саму папку `build`
4. Проверить, что файл `index.html` находится в корне

Так как используется `react-router-dom` с `BrowserRouter`, нужно добавить `.htaccess`, чтобы работали маршруты:

```
# .htaccess
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```
, где:
- `RewriteEngine On`                        - включает движок перезаписи
- `RewriteBase /`                           - задает базовый путь для правил
- `RewriteCond %{REQUEST_FILENAME} -f [OR]` - если запрашивается реальный файл...
- `RewriteCond %{REQUEST_FILENAME} -d`      - ...или папка - не перенаправляем
- `RewriteRule ^ index.html [L]`            - всё остальное - отдаём `index.html`

Например:
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Не перенаправлять, если файл или папка существует
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # Всё остальное - на index.html
  RewriteRule ^ index.html [L]
</IfModule>
```


#### 4.2. Размещение сайта через Netlify

- Зарегистрироваться на [netlify.com](https://netlify.com)
- Создать новый сайт -> "Deploy manually"
- Перетащить папку `build/` в браузер
- Указать свой домен в разделе Domain settings

#### 4.3. Размещение сайта через Vercel

- Установить Vercel CLI (опционально) или загрузи через веб-интерфейс
- Привязать имеющийся домен
- Указать директорию билда: `build`

#### 4.4. Размещение сайта через GitHub Pages

Требуется иметь:
- Проект на React (`create-react-app`-совместимый)
- Git-репозиторий
- Аккаунт на [GitHub](https://github.com)
- Доступ к терминалу (командной строке)

Разместить сайт на GitHub Pages (React + gh-pages) по [Инструкции](#githubpages)


##
### 5. Подключение домена

#### Если используется обычный хостинг:

В панели управления доменом указать:

- A-запись -> IP сервера (если VPS или shared hosting)
- или CNAME -> если используется Netlify/Vercel

#### Если используется Netlify / Vercel:

- Привязать имеющийся домен, указать адрес домена в панели управления
- Проверить, что DNS записи домена указывают на хостинг, например, CNAME -> `your-site.netlify.app`

##
### 6. Настрой HTTPS (SSL)

Большинство хостингов предоставляют бесплатный Let's Encrypt.
Выдаётся некоммерческим центром сертификации Let's Encrypt, созданным организацией Internet Security Research Group (ISRG).
Сертификат Let's Encrypt - это бесплатный криптографический сертификат для шифрования данных между сайтом и его посетителями (протокол HTTPS). 

Сертификат Let's Encrypt следует загрузить на сайт:

- Включить Let's Encrypt в панели управления
- Для Netlify / Vercel - автоматом активируется при загрузки сайта (web-приложения)

##
### 7. Дополнительные настройки

Следует проверить, что`.htaccess` действительно загружается, иногда FTP скрывает точечные файлы. <br>
Apache разрешает использование `.htaccess`, но в некоторых конфигурациях нужно в `httpd.conf` или `.vhost` прописать `AllowOverride All` для всей папки с загруженным проектом.

##
<h2 id="githubpages">Размещение сайта на GitHub Pages (React + gh-pages)</h2>
##
### 1. Указать `homepage` в `package.json`

Открыть файл `package.json` и добавить поле:

```
"homepage": "https://stanislavfor.github.io/react-lessons"
```

Это нужно для корректной генерации путей в собранном приложении, особенно CSS, JS и маршрутов.

##
### 2. Установить пакет `gh-pages`

В терминале, находясь в корне проекта выполнить команду:

```bash
npm install --save-dev gh-pages
```

##
### 3. Добавить скрипты в `package.json`

Внутрь блока `"scripts"` добавить:

```
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

Например, `scripts` может выглядеть так:

```
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Можно составить package.json [подробно](#package)


##
### 4. Инициализировать и залить в GitHub (если ещё не сделано)

В терминале выполнить команды:

```
git init
git remote add origin https://github.com/stanislavfor/react-lessons.git
git add .
git commit -m "Initial commit"
git push -u origin main  
# или,например, master, в зависимости от ветки
git push -u origin master
```

##
### 5. Выполнить деплой

Выполнить команду:

```bash
npm run deploy
```

С выполнением команды `npm run build` - соберёт проект в папку `build/` и `gh-pages` - опубликует её содержимое в ветке `gh-pages`

##
### 6. Открыть сайт

Перейти по адресу:

```
https://stanislavfor.github.io/react-lessons
```

Если всё настроено корректно, проект отобразится в браузере.

##
### 7. Если используешь маршруты (`react-router-dom`)

GitHub Pages не поддерживает полноценный серверный роутинг.
Для решения требуется использовать `<HashRouter>`:

Следует заменить строку:

```
import { BrowserRouter } from "react-router-dom";
```

На запись:

```
import { HashRouter } from "react-router-dom";
```
Это решает проблему 404 при обновлении страницы на маршрутах вроде `/about`, `/contact` и т.д.
Например:

```
import { HashRouter } from "react-router-dom";

<HashRouter>
  <App />
</HashRouter>
```


##
<h3 id="package">Подробный пример записи в `package.json`</h3>

```
{
  "name": "react-lessons",
  "version": "1.0.0",
  "private": true,
  "homepage": "https://stanislavfor.github.io/react-lessons",
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.1",
    "@mui/icons-material": "^7.2.0",
    "@mui/material": "^7.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.30.1"
  },
  "devDependencies": {
    "gh-pages": "^6.1.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

##
### Частые ошибки и решения

| Проблема                        | Причина                        | Решение                                |
|---------------------------------|--------------------------------|----------------------------------------|
| `404` при переходе по маршрутам | Используется `BrowserRouter`   | Перейти на `HashRouter`                |
| Пустая страница                 | Не указан `"homepage"`         | Добавить `"homepage"` в `package.json` |
| Нет ветки `gh-pages`            | `npm run deploy` не выполнялся | Запустить `npm run deploy`             |
| Статика не грузится             | Неверные пути                  | Снова проверь `homepage`               |



## Автоматизация деплоя React-приложения на GitHub Pages после каждого `git push` в репозитории

Требуется наличие следующих данных:

- Репозиторий на GitHub, например: `https://github.com/stanislavfor/react-lessons`
- Проект на базе `create-react-app` или совместимый
- Использование `HashRouter` или правильная настройка fallback для маршрутов

##
### 1. Указать `"homepage"` в `package.json`

```
"homepage": "https://stanislavfor.github.io/react-lessons"
```

##
### 2. Создать GitHub Action workflow

Создать файл `.github/workflows/deploy.yml` в корне репозитория:

```bash
mkdir -p .github/workflows
touch .github/workflows/deploy.yml
```

##
### 3. Файл `deploy.yml`

Если главная ветка `main`, наполнить `deploy.yml` следующим содержимым:

```
name: Deploy React App to GitHub Pages

on:
  push:
    branches:
      - main  # или master, если у тебя другая основная ветка

permissions:
  contents: write  # нужно для push в gh-pages

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Install Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

Если основная ветка называется master, нужно упоминание и ссылка на master в GitHub Actions workflow-файле:

```
name: Deploy React App to GitHub Pages

on:
  push:
    branches:
      - master  # <- указать свою основную ветку: master или main

permissions:
  contents: write  # нужно для пуша в gh-pages

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Install Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build

```

##
### 4. Проверить, что в `package.json` есть команды:

```
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build"
}
```

Не требуется добавлять `deploy` и `gh-pages`, так как GitHub Actions справляется без них.

##
### 5. Если используется `react-router-dom`

Чтобы избежать проблем с маршрутами:

- Использовать `<HashRouter>` вместо `<BrowserRouter>`
- Пример:

```
import { HashRouter } from 'react-router-dom';

<HashRouter>
  <App />
</HashRouter>
```

##
### 6. Выполнить `git push`

Если `.github/workflows/deploy.yml` в проекте и ветка — `master`, то после каждого коммита будет выполняться авто-деплой на `gh-pages`.

После чего:

- Коммит в ветку `master` (например, `git push origin master`) автоматически:
    - устанавливает зависимости
    - собирает проект
    - публикует в ветку `gh-pages`


##
### 7. Проверить результат

Перейти по адресу:

```
https://stanislavfor.github.io/react-lessons
```

Через 1-2 минуты после пуша сайт будет доступен. GitHub создаст и обновит ветку `gh-pages`.

##
### 8. Безопасность

GitHub автоматически предоставляет `secrets.GITHUB_TOKEN`, поэтому не нужно создавать персональный токен.


##
##
##
##