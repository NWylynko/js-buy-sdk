export default`
query($ids: [ID!]!) {
  nodes(ids: $ids) {
    ...ProductFragment
  }
}
`