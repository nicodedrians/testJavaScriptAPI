const { expect } = require('chai')
const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Post Request Example',() => {
    const response = request(baseUrl())
        .post('/user')
        .send(DATA.CREATE_USER_DATA)
    it('response status equal to 200', async() => {
        //Check response status harus sama dengan 200
        expect((await response).status).to.equal(200)
    })
    it('response body to haveOwnProperty', async () => {
        //Export dalam body response terdapat value 'message
        expect((await response).body).to.haveOwnProperty('message')
    })
    // reporting in mochaawsome
    // npx mocha --spec test/api/chaiAssert.js --reporter mochawesome
})