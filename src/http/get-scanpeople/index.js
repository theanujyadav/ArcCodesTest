let arc = require('@architect/functions')
let { auth, getClient } = require('../../Utils/HelperFunctions')

exports.handler = arc.http.async(auth, handler)

async function handler(req, res) {
    let client = await getClient()
    let people = client.people

    // scan the entire table for people over 64
    let developers = await people.scan({
        FilterExpression: 'job = :job',
        ExpressionAttributeValues: { ':job': 'Web Developer' },
    })

    return {
        json: { ok: true, developers: developers }
    }
}

