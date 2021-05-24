import { ApolloServer, gql } from 'apollo-server';
import Axios from 'axios';
import { config } from 'dotenv';
config();

const typeDefs = gql`
    type Image {
        name: String
        url: String
    }
    type Uploaded {
        code: Int
        message: String
        uri: String
        url: String
    }
    type Query {
        images: [Image]
        image(id: String!): Image
    }
    type Mutation {
        uploadImage(file: String!): Uploaded
    }
`;

const resolvers = {
    Query: {
        images: async () => {
            const { data } = await Axios.get(`${process.env.REST_HOST}/images`);
            return data;
        },
        image: async (root, args) => {
            const { id } = args;
            const { data } = await Axios.get(
                `${process.env.REST_HOST}/images/${id}`
            );
            return data;
        }
    },
    Mutation: {
        uploadImage: async (root, args) => {
            const { file } = args;
            const { data } = await Axios.post(
                `${process.env.REST_HOST}/upload`,
                file,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            return data;
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen({ port: 4001 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
