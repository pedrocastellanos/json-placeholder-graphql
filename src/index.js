const express = require('express');
const path = require('path')
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./graphql/schema/schema')
const resolvers = require('./graphql/resolvers/index')


const port = process.env.PORT || 4000

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  app.use('/public', express.static(path.join(__dirname, 'public')))
  app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
  })
  server.applyMiddleware({ app });

  
  await new Promise(resolve => app.listen({ port }, resolve));
  console.log(`☺_ Server ready at http://localhost:${port}${server.graphqlPath} _☺`);
  return { server, app };
}

startApolloServer()
