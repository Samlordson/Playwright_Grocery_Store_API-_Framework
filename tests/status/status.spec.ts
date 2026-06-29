import { test, expect } from '../../fixtures/apiFixture';

test('API Status should be UP', async ({ statusAPI }) => {

    const response = await statusAPI.getStatus();

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.status).toBe('UP');

});