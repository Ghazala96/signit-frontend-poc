import SignitEmbedded from '@signitsa/signitsa-embedded';

export const launchSignitEmbedded = () => {
  const client = new SignitEmbedded({
    clientId: '2ca232a2fdc74ef6adb3c93c2140b109'
  });
  console.log('client: ', client)

  const signingLink = 'https://sandbox.signit.sa/en/embeddedSign?token=Z0FBQUFBQm5xMDhWODBib0FPVEZQNW14TkxiMmpFQ2RTQTFNaFA5SDZWLVJ6RmxsTnUzWFBraEJRYzNnSzcxZnFpdWM5c29tOWpxVE5aTGRmUlEzUWt4NDhGMnp4T0R3andMd1R4ODNBWmdWM041czg2bDNDeHJfWGtoRmlRTlhQbUtEdTBwYjNQUUpqaGUwekh1Yk5IaU8yX0NxLUs5bkhPWnZhQkZLNENCbnFYZ3R4MjY0QUFhOTRlZGtLVUZoX2YzMWZjVVZEMXhMSm8zSnpmSUZPMEt1aWliQm9ZcVJ4MXRMdnNSOGFtbDlvcjk5Tk9KLW5CXzNZODBvUjI0TDVuZTJTaWRaX1F0VTVtc3dPX0M0RVhWcTJJTE81ZFJjeFZpUXRSSVR6NUlZZ04yZ2lPaDFEOVVNenM2S3VUaGw2VEN3WlVCazZ1dEZmSFFPQ0pVZ0llajJFc0ltYWR5XzBSeVVRY1htMjFpUmFSOEtFRzNiVmp3PQ%3D%3D&auth=False&signature_request_id=1d98a30c-1f61-455e-a274-cb94102d30b6'
  
  client.open(signingLink, {
    allowCancel: true
  });
}
