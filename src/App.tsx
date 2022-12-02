import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Input } from "./components/Input";
import { List } from "./components/List";

interface IList {
  message: string;
  tag?: string;
  id?: number;
}

function App() {
  const [list, setList] = useState<IList[]>([
    {
      id: 0,
      message: "",
      tag: "",
    },
  ]);
  const [message, setMessage] = useState("");

  const saveMessage = () => {
    setList((prevValue) => prevValue.concat({ message }));
  };

  return (
    <div className="App">
      <Input setMessage={setMessage} saveMessage={saveMessage} />
      {list.map(({ id, message }) => (
        <List key={message} message={message} />
      ))}
    </div>
  );
}

/*
Привет, коллеги. Вот тестовое прилетело на Trainee FrontEnd Deleloper. АPI нет или самому поискать: науке это не известно. Скидываю описалку:
Тестовое задание Front-end.

Разработать одностраничное приложение на React: текстовый редактор заметок с тегами.
Действия:
1. Создание, редактирование, просмотр и удаление заметок;
2. Фильтр заметок по тегу;
3. Добавление и удаление тегов из списка.
4. Данные хранить в json формате.
5. Использование CSS препроцессора.
6. Использование TypeScript
7. Залить на гит
8. Залить на netlify

Примечания:
Во время редактирования заметки пользователь может создавать теги, используя символ #.
Например: пользователь вводит текст “I wanna go to #shop”. По мере (окончании) ввода должен создаться соответствующий тег и отобразиться в списке под текстовым полем.
При редактировании заметки все слова, соответствующие тегам, должны подсвечиваться.
*/

export default App;
