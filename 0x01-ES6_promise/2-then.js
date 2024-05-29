function handleResponseFromAPI(promise) {
  promise
    .then((response) => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch((error) => {
      console.error('The promise was rejected');
      return new Error();
    })
    .finally(() => {
      console.log('For every resolution, log Got a response from the API');
    });
}

module.exports = handleResponseFromAPI;
