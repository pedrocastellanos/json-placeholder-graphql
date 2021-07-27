const fetch = require('node-fetch')
const createPost = async ({title, body, userId})=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
            userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    return await res.json()
}

const updatePost = async ({postId, title, body, userId})=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: postId,
            title,
            body,
            userId
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    return await res.json()
}

const deletePost = async ({postId})=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE',
    });
}

const Mutation = {
    createPost: (_, {input})=>createPost(input),
    updatePost: (_, {input})=>updatePost(input),
    deletePost: (_, {input})=>deletePost(input),
}

module.exports = Mutation