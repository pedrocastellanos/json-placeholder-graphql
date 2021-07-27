const fetch = require('node-fetch');

const getPosts = async () =>{
    const res = await fetch('http://127.0.0.1/respuestas-graphql/posts.json')
    return await res.json() 
}

const getUsers = async () =>{
    const res = await fetch('http://127.0.0.1/respuestas-graphql/users.json')
    return await res.json()
}

const getPhotos = async (userId) =>{
    const res = await fetch('http://127.0.0.1/respuestas-graphql/photos.json')
    return await res.json()
}

const getAlbums = async () =>{
    const res = await fetch('http://127.0.0.1/respuestas-graphql/albums.json')
    return await res.json()
}

const getComments = async () =>{
    const res = await fetch('http://127.0.0.1/respuestas-graphql/comments.json')
    return await res.json()
}

const getTodos = async () =>{
    const res = await fetch('http://127.0.0.1/respuestas-graphql/todos.json')
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