export default`
fragment VariantWithProductFragment on ProductVariant {
  ...VariantFragment
  product {
    id
    handle
  }
}
`