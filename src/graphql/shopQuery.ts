export default`
query {
  shop {
    currencyCode
    paymentSettings {
      enabledPresentmentCurrencies
    }
    description
    moneyFormat
    name
    primaryDomain {
      host
      sslEnabled
      url
    }
  }
}
`