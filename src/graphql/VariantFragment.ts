export default`
fragment VariantFragment on ProductVariant {
  id
  title
  price
  priceV2 {
    amount
    currencyCode
  }
  presentmentPrices(first: 20) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    edges {
      node {
        price {
          amount
          currencyCode
        }
        compareAtPrice {
          amount
          currencyCode
        }
      }
    }
  }
  weight
  available: availableForSale
  sku
  compareAtPrice
  compareAtPriceV2 {
    amount
    currencyCode
  }
  image {
    id
    src: originalSrc
    altText
  }
  selectedOptions {
    name
    value
  }
  unitPrice {
    amount
    currencyCode
  }
  unitPriceMeasurement {
    measuredType
    quantityUnit
    quantityValue
    referenceUnit
    referenceValue
  }
}
`