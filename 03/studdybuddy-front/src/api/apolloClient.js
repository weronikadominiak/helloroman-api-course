import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const  DATO_TOKEN = "e4d2a225e52a023d1d722f2dd88c33"
const httpLink = createHttpLink({
    uri: "https://graphql.datocms.com"
})

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${DATO_TOKEN}`
        }
    }
})

export const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})