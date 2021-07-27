const fetch = require('node-fetch');

const getPosts = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await res.json() 
}

const getUsers = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return await res.json()
}

const getPhotos = async (userId) =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    return await res.json()
}

const getAlbums = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    return await res.json()
}

const getComments = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    return await res.json()
}

const getTodos = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    return await res.json()
}

module.exports = {
    getPosts,
    getUsers,
    getPhotos,
    getAlbums,
    getComments,
    getTodos
}
