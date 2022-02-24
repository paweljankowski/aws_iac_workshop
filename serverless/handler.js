module.exports.hello = async (event) => {

  console.log(`Input event: ${JSON.stringify(event)}`);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello World!",
      }
    ),
  };
};
