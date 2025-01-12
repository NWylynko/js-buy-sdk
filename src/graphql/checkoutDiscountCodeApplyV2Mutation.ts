export default`
mutation checkoutDiscountCodeApplyV2($discountCode: String!, $checkoutId: ID!) {
  checkoutDiscountCodeApplyV2(discountCode: $discountCode, checkoutId: $checkoutId) {
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