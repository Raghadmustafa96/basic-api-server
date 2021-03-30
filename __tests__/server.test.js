'use strict';
const { app } = require('../src/server.js');
const superTest = require('supertest');
const request = superTest(app);
let id;

describe('Server Side', () => {
  it('should the status be 404 if handle invalid routes /bad', async () => {
    const res = await request.get('/bad');
    expect(res.body.message).toEqual('Request Not Found');
    expect(res.status).toEqual(404);
  });

  it('should the status be 500 if handle server error', async () => {
    const res = await request.get('/error');
    expect(res.body.error).toEqual('ERROR FROM server side :) ...');
    expect(res.status).toEqual(500);
  });

  it('handle bad method', async () => {
    const response = await request.get('/r');
    expect(response.status).toEqual(404);
  });
});

describe('Clothes Api Server', () => {
    it('should be able to create a clothes on POST /clothes', async () => {
        const response = await request.post('/clothes').send({
          type: 'dress',
          gender: 'female',
        });
        expect(response.status).toEqual(201);
        expect(response.body.data.type).toEqual('dress');
        expect(response.body.data.gender).toEqual('female');
    
        id = response.body.id;
      });
      it('should be able to update a clothes on PUT /clothes', async () => {
        const response = await request.put(`/clothes/${id}`).send({
            type: 'sweater',
            gender: 'male',
        });
        expect(response.status).toEqual(200);
        expect(response.body.data.type).toEqual('sweater');
        expect(response.body.data.gender).toEqual('male');
      });
      it('should be able to get a clothes on Get /clothes/:id', async () => {
        const response = await request.get(`/clothes/${id}`);
        expect(response.status).toEqual(200);
        expect(response.body.data.type).toEqual('sweater');
        expect(response.body.data.gender).toEqual('male');
      });
      it('should be able to delete specific clothes on DELETE /clothes/:id', async () => {
		const response = await request.delete(`/clothes/${id}`);
		expect(response.status).toEqual(200);
	 });
     it('should get all Clothes on GET /clothes', async () => {
		const response = await request.get('/clothes');
		expect(response.status).toEqual(200);
	});
  });

  describe('Food Api Server', () => {
    it('should be able to create a food on POST /food', async () => {
        const response = await request.post('/food').send({
          type: 'bread',
          calories: '265 calories',
        });
        expect(response.status).toEqual(201);
        expect(response.body.data.type).toEqual('bread');
        expect(response.body.data.calories).toEqual('265 calories');
    
        id = response.body.id;
      });
      it('should be able to update a food on PUT /food', async () => {
        const response = await request.put(`/food/${id}`).send({
            type: 'rice',
            calories: '130 calories',
        });
        expect(response.status).toEqual(200);
        expect(response.body.data.type).toEqual('rice');
        expect(response.body.data.calories).toEqual('130 calories');
      });
      it('should be able to get a food on Get /food/:id', async () => {
        const response = await request.get(`/food/${id}`);
        expect(response.status).toEqual(200);
        expect(response.body.data.type).toEqual('rice');
        expect(response.body.data.calories).toEqual('130 calories');
      });
      it('should be able to delete specific food on DELETE /food/:id', async () => {
		const response = await request.delete(`/food/${id}`);
		expect(response.status).toEqual(200);
	 });
     it('should get all food on GET /food', async () => {
		const response = await request.get('/food');
		expect(response.status).toEqual(200);
	});
  });
