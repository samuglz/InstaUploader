import { ApolloServer, gql } from 'apollo-server';
import Axios from 'axios';
import { config } from 'dotenv';
config();

const typeDefs = gql`
    type Image {
        name: String
        url: String
    }
    type Query {
        images: [Image]
    }
`;

const resolvers = {
    Query: {
        images: async () => {
            const { data } = await Axios.get(`${process.env.REST_HOST}/images`);
            return data;
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
