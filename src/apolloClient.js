import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-eu-west-2.hygraph.com/v2/cl5kyh9hj3fbf01ui2fk6169q/master",
  cache: new InMemoryCache(),
});

export default client;
