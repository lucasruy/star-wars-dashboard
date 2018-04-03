const getURL = (urlGet) => {
  const Exception = (message) => {
    this.message = message;
    this.name = 'UserException';
  };

  const responseValues = fetch(urlGet, { method: 'GET' })
    .then(response => response.json())
    .then(response => response)
    .catch((error) => {
      throw new Exception(error);
    });

  return responseValues;
};

export default getURL;
