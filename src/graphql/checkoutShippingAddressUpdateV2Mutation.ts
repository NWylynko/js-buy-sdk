export default`
mutation checkoutShippingAddressUpdateV2($shippingAddress: MailingAddressInput!, $checkoutId: ID!) {
  checkoutShippingAddressUpdateV2(shippingAddress: $shippingAddress, checkoutId: $checkoutId) {
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