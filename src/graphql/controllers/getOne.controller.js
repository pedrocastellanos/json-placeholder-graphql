const fetch = require('node-fetch');

const getPost = async (postId) =>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res=>res.json()) 
}

const getPostComments = async (postId) =>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(res=>res.json()) 
}

const getUser = async (id) =>{
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>res.json())
}

const getUserPosts = async (userId) =>{
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(res=>res.json())
}
const getUserTodos = async (userId) =>{
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then(res=>res.json())
}

const getUserAlbums = async (userId) =>{
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
        .then(res=>res.json())
}

const getPhoto = async (id) =>{
    return fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(res=>res.json())
}

const getAlbum = async (albumId) =>{
    return fetch(`https://jsonplaceholder.typicode.com//albums/${albumId}`)
        .then(res=>res.json())
}

const getTodo = async (id) =>{
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res=>res.json())
}

module.exports = {
    getPost,
    getPostComments,
    getUser,
    getUserPosts,
    getUserTodos,
    getUserAlbums,
    getPhoto,
    getAlbum,
    getTodo
}
