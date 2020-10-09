'use strict';

const hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Norm went Serverless v1.0! Function executed successfully.'
      },
      null,
      2
    ),
  }
}

const details = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Serverless event input details:',
        input: event,
      },
      null,
      2
    ),
  }
}

module.exports = {
  hello,
  details
};