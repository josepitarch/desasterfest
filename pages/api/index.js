import { CreditCardData, ServicesConfig, ServicesContainer } from "globalpayments-api";

export default function handler(req, res) {
  const config = new ServicesConfig();
  config.secretApiKey = "skapi_cert_MTyMAQBiHVEAewvIzXVFcmUd2UcyBge_eCpaASUp0A";
  config.developerId = "000000";
  config.versionNumber = "0000";
  config.serviceUrl = "https://cert.api2.heartlandportico.com";
  ServicesContainer.configure(config);
  const card = new CreditCardData()
  card.number = "4111111111111111";
  card.expMonth = "12";
  card.expYear = "2025";
  card.cvn = "123";

  card
    .charge(129.99)
    .withCurrency("EUR")
    .execute()
    .then((response) => {
      const result = response.responseCode;
      const message = response.responseMessage;
    })
    .catch((e) => {
      // handle  errors
    });
  res.status(200).json({
    "id": 2022,
    "name": "Tsunami",
  })
}
