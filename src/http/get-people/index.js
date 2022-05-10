let arc = require('@architect/functions')
let { auth, getClient } = require('../../Utils/HelperFunctions')

exports.handler = arc.http.async(auth, handler)

async function handler(req, res) {
    let client = await getClient()
    let people = client.people

    // query for Web Developers using a secondary index
    let developers = await people.query({
        IndexName: 'peopleByJob',
        KeyConditionExpression: 'job = :job',
        ExpressionAttributeValues: { ':job': 'Web Developer' },
    })
    return {
        json: { ok: true, developers: developers}
    }
}

