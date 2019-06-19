const { ApolloServer, gql } = require('apollo-server');

const books = [

    {
        title: 'Muna Madan',
        author: {
            name:'Laxmi Prasad Devkota',
            email:'laxmi@gmail.com',
            address:{
                street:'2300 E 18th St',
                city:'Casper',
                state:'WY',
                country:'USA'
            }
        }
    },
    {
        title: 'Jurassic Park',
        author: {
            name:'Michael Crichton',
            email:'michael@gmail.com',
            address:{
                street:'2300 E 15th St',
                city:'Casper',
                state:'WY',
                country:'USA'
            }
        }
    }
];

const typeDefs = gql`
type Book{
    title:String
    author:Author
}
type Author{
    name:String
    email:String
    address:Address
}
type Address{
    street:String
    city:String
    state:String
    country:String
}
type Query{
    books:[Book]

}
`;

const resolvers = {
    Query: {
        books: () => books
    }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

apolloServer.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
});