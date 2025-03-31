// config/plugins.ts
export default ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql', // The endpoint for the GraphQL API
      shadowCRUD: true, // Enable Shadow CRUD for automatic schema generation
      playground: true, // Enable the GraphQL Playground
      introspection: true, // Allow introspection queries
    },
  },
});