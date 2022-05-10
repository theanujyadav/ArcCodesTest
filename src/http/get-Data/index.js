// middleware
let arc = require('@architect/functions')
let utils = require('../../Utils/HelperFunctions')
exports.handler = arc.http(utils, handler)



function handler(req, res) {
  res({
    json: { ok: true }
  })
}