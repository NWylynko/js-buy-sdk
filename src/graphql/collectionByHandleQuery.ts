export default`
query ($handle: String!) {
  collectionByHandle(handle: $handle) {
    ...CollectionFragment
    ...CollectionsProductsFragment
  }
}
`