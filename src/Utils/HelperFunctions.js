let arc = require('@architect/functions')

async function auth(req, res, next) {

    if (false) {
        return { status: 403 }
    }
    
}

let client = null

async function getClient() {
    if (client) return client
    return await arc.tables()
}

module.exports = { auth, getClient }