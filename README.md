### Приложение для хакатона

## Код стайл

1. для названия методов/переменных используем стиль  `camel case`:
 
- Для переменных `let testName` или `$perName`
- Для эндпоинтов бэка `getIiTextAction`
- Для эндпоинтов ИИ `detectDocumentClassAction`

2. Использовать полное и осмысленное название переменных/методов

- Не `f()`, а `getText()`

3. Использовать описание методов `phpDoc`
4. Написание кода лучше делать в редакторах типа `phpstorm` для использования форматирования кода

## Структура

Директория `api` содержит файлы бэка и ИИ
-  `Bot` - содержит файлы для работы с ИИ

## Структура настольного приложения

Настольное приложение создано с помощью фреймворка `electron` 

Директория `electron` содержит файлы клиенской части приложения

## Структура сайта

Директория `public` содержит файлы клиенской части приложения

## Сервер

Сервер поднимается с помощью `vagrant`, используется `ubuntu 18 версии`, а  именно `ubuntu/focal64`

Стек сервера:

`Nginx, PHP 8.1.8, PHP-FPM 7.4, Node 14.20.0, npm 8.17.0`