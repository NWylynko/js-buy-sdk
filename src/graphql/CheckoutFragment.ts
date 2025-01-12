export default`
fragment MailingAddressFragment on MailingAddress {
  id
  address1
  address2
  city
  company
  country
  firstName
  formatted
  lastName
  latitude
  longitude
  phone
  province
  zip
  name
  countryCode: countryCodeV2
  provinceCode
}

fragment CheckoutFragment on Checkout {
  id
  ready
  requiresShipping
  note
  paymentDue
  paymentDueV2 {
    amount
    currencyCode
  }
  webUrl
  orderStatusUrl
  taxExempt
  taxesIncluded
  currencyCode
  totalTax
  totalTaxV2 {
    amount
    currencyCode
  }
  lineItemsSubtotalPrice {
    amount
    currencyCode
  }
  subtotalPrice
  subtotalPriceV2 {
    amount
    currencyCode
  }
  totalPrice
  totalPriceV2 {
    amount
    currencyCode
  }
  completedAt
  createdAt
  updatedAt
  email
  discountApplications(first: 10) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    edges {
      node {
        ...DiscountApplicationFragment
      }
    }
  }
  appliedGiftCards {
    ...AppliedGiftCardFragment
  }
  shippingAddress {
    ...MailingAddressFragment
  }
  shippingLine {
    handle
    price
    priceV2 {
      amount
      currencyCode
    }
    title
  }
  customAttributes {
    key
    value
  }
  order {
    id
    processedAt
    orderNumber
    subtotalPrice
    subtotalPriceV2 {
      amount
      currencyCode
    }
    totalShippingPrice
    totalShippingPriceV2 {
      amount
      currencyCode
    }
    totalTax
    totalTaxV2 {
      amount
      currencyCode
    }
    totalPrice
    totalPriceV2 {
      amount
      currencyCode
    }
    currencyCode
    totalRefunded
    totalRefundedV2 {
      amount
      currencyCode
    }
    customerUrl
    shippingAddress {
      ...MailingAddressFragment
    }
    lineItems (first: 250) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          title
          variant {
            ...VariantWithProductFragment
          }
          quantity
          customAttributes {
            key
            value
          }
        }
      }
    }
  }
  lineItems (first: 250) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        title
        variant {
          ...VariantWithProductFragment
        }
        quantity
        customAttributes {
          key
          value
        }
        discountAllocations {
          allocatedAmount {
            amount
            currencyCode
          }
          discountApplication {
            ...DiscountApplicationFragment
          }
        }
      }
    }
  }
}
`