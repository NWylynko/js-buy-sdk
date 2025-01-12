export default`
fragment CollectionsProductsFragment on Collection {
  products(first: 20) {
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
`