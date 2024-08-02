const request = require('supertest');
const app = require('../app');

describe('Fibonacci Calculation Endpoint', () => {
    it('should return status 400 if input is not a number', async () => {
        await request(app)
            .get('/fibonacci')
            .query({ n: 'abc' })
            .expect(400);
    });

    it('should return status 400 if input is less than 0', async () => {
        await request(app)
            .get('/fibonacci')
            .query({ n: -1 })
            .expect(400);
    });

    it('should return status 200 and correct Fibonacci number for valid input', async () => {
        const response = await request(app)
            .get('/fibonacci')
            .query({ n: 5 })
            .expect(200);

        expect(response.body.result).toBe(5);
    });
});