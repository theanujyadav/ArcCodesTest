let arc = require('@architect/functions')
let { auth, getClient } = require('../../Utils/HelperFunctions')

exports.handler = arc.http.async(auth, handler)

async function handler(req, res) {
    let client = await getClient()
    let people = client.people


    // create Chuck and Jana
    let chuck = await people.put({
        email: 'chuck@example.com',
        job: 'Web Developer',
        age: 35,
        lassan:'adsa'
    })
    let jana = await people.put({
        email: 'jana@example.com',
        job: 'Web Developer',
        age: 64,
        lassan:'adsa'
    })

    return{
        json: { ok: true,chuck:chuck,jana:jana }
    }
}

