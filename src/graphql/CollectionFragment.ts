export default`
fragment CollectionFragment on Collection {
  id
  handle
  description
  descriptionHtml
  updatedAt
  title
  image {
    id
    src: originalSrc
    altText
  }
}
`