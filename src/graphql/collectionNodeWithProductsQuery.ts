export default`
query($id: ID!, $productsFirst: Int!) {
  node(id: $id) {
    ...CollectionFragment
    ... on Collection {
      products(first: $productsFirst) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          cursor
          node {
            ...ProductFragment
          }
        }
      }
    }
  }
}
`