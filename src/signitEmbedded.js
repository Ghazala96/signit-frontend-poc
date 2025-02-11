import SignitEmbedded from '@signitsa/signitsa-embedded';

export const launchSignitEmbedded = () => {
  const client = new SignitEmbedded({
    clientId: '2ca232a2fdc74ef6adb3c93c2140b109'
  });
  console.log('client: ', client)

  const signingLink = 'https://sandbox.signit.sa/en/embeddedSign?token=Z0FBQUFBQm5xMURaWWEzS2Q3YlNlVG1HZUR4VjgxSEd6cGxTeUZKZ0dsa045ZndjYkw0cm9HeEtkWGtteWlBcXF1NW8xQVNMNlRvUlllVS1MVGZBR3MxZUV2T0RHQVUzZFl5Z2hTdFRfaDhkbmVfUUg4RUZxV2Eta0dJSVllSEtGYkFfTzR4STZCREg4VVhHT01ZaHpRVy1NWWRtODQzUWJEb3dYalEyUFBHYlAzYU85NVg1c1E4NTVsQ2Zsdk5fUEY4el9EZk9wUmF2MEhKQ0ZIME8wTHBzb1JNSnd1TjM3Y2I3MDNBdUxmNnNJeDBBZms1RHhBbUI4MnBlQUlxV0hnT20tZ0N3RXVaTUhfbEJBQTMtNXFUZDVGYUhtTTdLRDlVR3BCSXNTN1BoOE8wUWd6dGlSZjhacmRJdEFjNUE0cFZ0cURZWU9VRGxiTXhacTFQUm85VVBpYTNCRjRvbmVYNGVQVTFjQm5tVWIwQXpDdER0Z2Q0PQ%3D%3D&auth=False&signature_request_id=1d98a30c-1f61-455e-a274-cb94102d30b6'
  
  client.open(signingLink, {
    allowCancel: true
  });
}
