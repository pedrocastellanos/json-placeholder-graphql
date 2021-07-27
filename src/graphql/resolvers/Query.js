const {getPosts, getUsers, getPhotos, getAlbums, getComments, getTodos} = require('../controllers/getAll.controller')
const {getPost ,getPostComments ,getUser ,getUserPosts ,getUserTodos ,getUserAlbums ,getPhoto ,getAlbum ,getComment ,getTodo} = require('../controllers/getOne.controller')

console.log(getPost)

const Query = {
	/*----------Get All----------*/
    posts: ()=>getPosts(),
    users: ()=>getUsers(),
    photos: ()=>getPhotos(),
    albums: ()=>getAlbums(),
    comments: ()=> getComments(),
    todos: ()=>getTodos(),
    
    /*----------Get One----------*/
    post: (_,postId)=> getPost(postId),
    post_comments: (_, postId)=> getPostComments(postId),
    user: (_, userId)=> getUser(userId),
    user_posts: (_, userId)=> getUserPosts(userId),
    user_todos: (_, userId)=> getUserTodos(userId),
    user_albums: (_, userId)=> getUserAlbums(userId),
    photo: (_, id)=> getPhoto(id),
    album: (_, albumId)=> getAlbum(albumId),
    todo: (_, id)=> getTodo(id)
}

module.exports = Query