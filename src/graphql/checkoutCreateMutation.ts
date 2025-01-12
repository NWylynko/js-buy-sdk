export default`
mutation ($input: CheckoutCreateInput!) {
  checkoutCreate(input: $input) {
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