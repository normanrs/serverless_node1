const { it } = require('@jest/globals');
const handler = require('../handler.js');

describe("handler functions()", () => {
  const status_code = 200
  it("should return hello message", async () => {
    const result = await handler.hello()
    expect(result.body).toInclude('Norm went Serverless v1.0!')
  });
  it("hello should return 200", async () => {
    const result = await handler.hello()
    expect(result.statusCode).toEqual(status_code)
  });
  it("should return details", async () => {
    const result = await handler.details()
    expect(result.body).toInclude('Serverless event input details')
  });
  it("details should return 200", async () => {
    const result = await handler.details()
    expect(result.statusCode).toEqual(status_code)
  });
});
