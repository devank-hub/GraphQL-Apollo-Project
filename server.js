import 'dotenv/config';
import { app } from './app.js';
import { schema } from './schema.js';
import { ApolloServer } from 'apollo-server-express';

const PORT = process.env.PORT || 8000;
async function startApolloServer() {
    const server = new ApolloServer({
        schema,
    });
    await server.start(); 
    server.applyMiddleware({ app, path: '/graphql' });

    app.listen(PORT,() =>{
        console.log(`Server is running on port ${PORT}`);
    });
}
startApolloServer();