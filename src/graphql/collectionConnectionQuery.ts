export default`
query ($first: Int!, $query: String, $sortKey: CollectionSortKeys, $reverse: Boolean) {
  collections(first: $first, query: $query, sortKey: $sortKey, reverse: $reverse) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        ...CollectionFragment
      }
    }
  }
}
`