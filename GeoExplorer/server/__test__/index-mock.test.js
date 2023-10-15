const mockAxios = require('axios');
const getCountryRequest = require('../axios-requests/getCountryRequest');

jest.mock('axios');

describe('Country search without API', () => {
  it('should return the correct country from the mock', async () => {
    const country = [{ name: { common: 'Spain' } }];
    mockAxios.get.mockResolvedValueOnce({ data: country });

    const response = await getCountryRequest('Spain');
    expect(response[0].name.common).toBe('Spain');
  });

  it('should throw an error for an invalid country search', async () => {
    const error = new Error('Console error thrown');
    mockAxios.get.mockRejectedValueOnce(error);

    try {
      const response = await getCountryRequest('NotARealCountry');
    } catch (error) {
      expect(error.message).toBe('Console error thrown');
    }
  });
});
