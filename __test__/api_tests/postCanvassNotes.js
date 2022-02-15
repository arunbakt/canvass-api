require('dotenv').config();
const request = require('supertest');

const app = require('../../app.js');

describe('POST /canvass/canvass_notes with empty body', () => {
    it('responds with HTTP Error 422', (done) => {
        request(app)
            .post('/canvass/canvass_notes')
            .set('Accept', 'application/json')
            .expect(422)
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            })
    });
});

describe('POST /canvass/canvass_notes with empty username', () => {
    it('responds with HTTP Error 422', (done) => {
        request(app)
            .post('/canvass/canvass_notes')
            .set('Accept', 'application/json')
            .send({
                "person_name": "",
                "notes": "Musician who supports policies addressing climate change"
            })
            .expect(422)
            .end((err, res) => {
                if (err) 
                    done(err);
                else    
                    done();
            });
    });
});

describe('POST /canvass/canvass_notes with valid canvas note', () => {
    it('responds with HTTP status code 201', (done) => {
        request(app)
            .post('/canvass/canvass_notes')
            .set('Accept', 'application/json')
            .send({
                "person_name": "Vann Peterson",
                "notes": "Musician who supports policies addressing climate change"
            })
            .expect(201)
            .end((err, res) => {
                if (err) { done(err); }
                else { done() }
            });
    });
});

