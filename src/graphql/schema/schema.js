const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type Post {
      userId: ID
      id: ID
      title: String
      body: String
    }


    #User 
    type Address {
      street: String
      suite: String
      city: String
      zipcode: String
      geo: Geo
    }

    type Geo {
      lat: Float
      lng: Float
    }
    
    type Company {
      name: String
      catchPhrase: String
      bs: String
    }

    type User {
      id: ID
      name: String
      username: String
      email: String
      address: Address
      phone: String
      website: String
      company : Company
    }
    
    #Photo
    type Photo {
      albumId: ID
      id: ID
      title: String
      url: String
      thumbnailUrl: String
    }
    
    #Album
    type Album {
      userId: ID
      id: ID
      title: String
    }
    
    #Comment
    type Comment {
      postId: ID
      id: ID
      name: String
      email: String
      body: String
    }
    
    #Todo
    type Todo {
      userId: ID
      id: ID
      title: String
      completed: Boolean
    }
  
    # Querys
    type Query {
      # Get All
      posts: [Post]
      users: [User]  
      photos: [Photo]
      albums: [Album]
      comments: [Comment]
      todos: [Todo]

      # Get One
      post(postId: ID!): Post
      post_comments(postId: ID!): [Comment]
      user(userId: ID!): User
      user_posts(userId: ID!): [Post]
      user_todos(userId: ID!): [Todo]
      user_albums(userId: ID!): [Album]
      photo(id: ID): Photo
      album(albumId: ID): Album
      todo(id: ID): Todo
    }

    type Mutation {
      createPost(input: CreatePost): Post
      updatePost(input: UpdatePost): Post
      deletePost(input: DeletePost): Post
    }

    input CreatePost {
      userId: ID!
      title: String
      body: String
    }
    
    input UpdatePost {
      postId: ID!
      userId: ID
      title: String
      body: String
    }

    input DeletePost{
      postId: ID!
    }
`

module.exports = typeDefs