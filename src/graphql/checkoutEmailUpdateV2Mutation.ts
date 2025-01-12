export default`
mutation checkoutEmailUpdateV2($checkoutId: ID!, $email: String!) {
  checkoutEmailUpdateV2(checkoutId: $checkoutId, email: $email) {
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