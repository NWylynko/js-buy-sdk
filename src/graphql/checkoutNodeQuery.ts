export default`
query ($id: ID!) {
  node(id: $id) {
    ...CheckoutFragment
  }
}
`