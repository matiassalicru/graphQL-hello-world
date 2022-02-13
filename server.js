const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
	schema {
		query: Query
	}

	type Query {
		greeting: String
	}
`

const resolvers = {
	Query: {
		greeting: () => 'Hello GraphQL world!',
	},
}

const server = new ApolloServer({ typeDefs, resolvers })

server
	.listen(({ port: 3000 }) )
	.then(({ url }) => console.log(`server running or port ${url}`))
