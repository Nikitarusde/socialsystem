import {rerenderEntireTree} from "../render";

export let state = {
    profilePage: {
        posts: [
            {id: 1, post: "Hi how are you?", likesCount: 5},
            {id: 2, post: "It is my first post", likesCount: 23},
            {id: 3, post: "It is my first post", likesCount: 23},
            {id: 4, post: "It is my first post", likesCount: 23},
        ],

    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Nikita"},
            {id: 2, name: "Alex"},
            {id: 3, name: "Andrey"},
            {id: 4, name: "Dasha"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your it-kamasutra"},
            {id: 3, message: "Yo"},
            {id: 4, message: "WIe geht's bro"}
        ],
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        post: postMessage,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}
