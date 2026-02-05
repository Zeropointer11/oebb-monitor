const express = require('express');
const request = require('supertest');
const axios = require('axios');
const oebbRouter = require('./oebb');

jest.mock('axios');

const app = express();
app.use(express.json());
app.use('/', oebbRouter);

describe('OEBB API Security Tests', () => {
  it('should not log sensitive headers on error and return generic error to client', async () => {
    const sensitiveHeader = 'SecretToken123';
    const errorResponse = {
      response: {
        status: 500,
        data: 'Internal Server Error' // This should NOT be sent to client
      },
      config: {
        headers: {
          AccessToken: sensitiveHeader
        },
        url: 'https://tickets.oebb.at/api/domain/v4/init'
      },
      message: 'Request failed'
    };

    // Mock axios.get to fail
    axios.get.mockRejectedValue(errorResponse);

    // Spy on console.error
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const response = await request(app)
      .get('/auth')
      .expect(500);

    // Verify response body
    expect(response.body).toEqual({
      error: 'An error occurred while communicating with the OBB service.'
    });

    // Verify logging
    expect(consoleSpy).toHaveBeenCalled();
    const loggedError = consoleSpy.mock.calls[0][1];

    // Assert sensitive data is NOT present
    expect(loggedError).toBeDefined();
    expect(loggedError.config).toBeUndefined(); // Config object (with headers) should not be there
    expect(loggedError.headers).toBeUndefined();

    // Assert safe data IS present
    expect(loggedError.message).toBe('Request failed');
    expect(loggedError.url).toBe('https://tickets.oebb.at/api/domain/v4/init');

    consoleSpy.mockRestore();
  });
});
