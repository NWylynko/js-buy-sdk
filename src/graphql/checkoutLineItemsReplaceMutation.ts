export default`
mutation ($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {
  checkoutLineItemsReplace(checkoutId: $checkoutId, lineItems: $lineItems) {
    userErrors {
      ...CheckoutUserErrorFragment
    }
    checkout {
      ...CheckoutFragment
    }
  }
}
`