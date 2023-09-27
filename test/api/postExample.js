const request = require('supertest')
const baseUrl = require('../../env')

describe('Post Post example', () =>{
    it('Success create user', async () =>{
        const response = request(baseUrl())
        .post('/user')
        .send({
            "id": 0,
            "username": "nicodedrian",
            "firstName": "Nico",
            "lastName": "Simatupang",
            "email": "nico123@email.com",
            "password": "nico123",
            "phone": "081234567890",
            "userStatus": 0
          })
        console.log((await response).status)
        console.log((await response).body)
    })
})