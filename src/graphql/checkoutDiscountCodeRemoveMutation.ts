export default`
mutation checkoutDiscountCodeRemove($checkoutId: ID!) {
  checkoutDiscountCodeRemove(checkoutId: $checkoutId) {
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