import SignitEmbedded from '@signitsa/signitsa-embedded';

export const launchSignitEmbedded = () => {
  const client = new SignitEmbedded({
    clientId: '2ca232a2fdc74ef6adb3c93c2140b109'
  });
  console.log('client: ', client)

  const signingLink = 'https://sandbox.signit.sa/en/embeddedSign?token=Z0FBQUFBQm5xMERqZm9HcjFqSVA4WnoyT0tMQTdrNzFsMkMwN0N5OXhzTnRodmJKX2hNQmo2a1VXcU9lYlptRzAzamNxdDI0bHItVWRXRl8yM2RXMkVDTVdTeUxqeDVrY3E2NTBxMkZ3RTdvakh1Qm10ZEk5N200aHN4U0w5T2FmbWpBcjVUUE5OU1pua1lISlotNXAxck03RHJhRTJxYUY2ZXhfSHZEcnJCTGNKemhUdEcwdVRtYnNFNENpcFo1N1pUOGM3Z1Nka21MSF9rdzgzbEo2cGY1WmZUZEJla0FtSVFJQ0FxS05IcktRTVdYZlhMelp5cnZHY2ZfUUR6cTdXSWlZdkdncVotbjFkRER0U1dhbTFidTdLczlRSXFiYTVTYWpEeWdjUEN2OEVRYVpvSEx1R05fWUFkNlRpSmNQUmxZenJBeE1vYW1VY0E0aHVKbUZWWWJTX0tHcmQ1LVdoRUh1RTN6ZWNmY0hraXJJSFRYdXZBPQ%3D%3D&auth=False&signature_request_id=1d98a30c-1f61-455e-a274-cb94102d30b6'
  
  client.open(signingLink, {
    allowCancel: true
  });
}
