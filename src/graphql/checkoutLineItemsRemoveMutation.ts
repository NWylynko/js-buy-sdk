export default`
mutation ($checkoutId: ID!, $lineItemIds: [ID!]!) {
  checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {
    userErrors {
      ...UserErrorFragment
    }
    checkoutUserErrors {
      ...CheckoutUserErrorFragment
    }
    checkout {
      ...CheckoutFragment
    }
  }
}
`