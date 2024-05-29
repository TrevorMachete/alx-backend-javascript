export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulate an asynchronous operation, like fetching data from an API
    setTimeout(() => {
      // If the operation is successful, resolve the Promise
      resolve('Response from API');
      // If the operation fails, reject the Promise
      // reject("Error: Could not get response from API");
    }, 2000);
  });
}
