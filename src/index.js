import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
    {id: 1, post: "Hi how are you?", likesCount: 5},
    {id: 2, post: "It is my first post", likesCount: 23},
    {id: 2, post: "It is my first post", likesCount: 23},
    {id: 2, post: "It is my first post", likesCount: 23},
]

let dialogs = [
    {id: 1, name: "Nikita"},
    {id: 2, name: "Alex"},
    {id: 3, name: "Andrey"},
    {id: 4, name: "Dasha"}
]

let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your it-kamasutra"},
    {id: 3, message: "Yo"},
    {id: 4, message: "WIe geht's bro"}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
