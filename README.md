# simple-form-app

Простая форма в которой отработаны навыки работы с фреймворком Nuxt:

- взаимодействие с хранилищем Vuex
- запросами на сервер с библиотекой Axios 
- архитектурой проекта - разбитием на компоненты, страницы и роутинг меджу ними
- работа с формами
- библиотекой готовых компонентов Vuetify


При загрузке страницы с сервера запрашивается список пользователей для отоброжения.
Пользователю предлогается заполнить форму с своими данными для добавления в список.
При успешном добавлении происходит редирект на страницу с подтверждением и выводом всего списка пользователей на странице, при вызврате на главную страницу если форма уже была отправлена выводится сообщение об этом.


## Запуск проекта

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).



