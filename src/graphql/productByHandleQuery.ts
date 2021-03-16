export default`
query ($handle: String!) {
  productByHandle(handle: $handle) {
    ...ProductFragment
  }
}
`