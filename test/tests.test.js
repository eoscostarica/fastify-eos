'use strict'

const http = require('http')
const test = require('tap').test
const Fastify = require('fastify')
const plugin = require('../')

test('get Info from the EOS API', (t) => {
  // t.plan(1)
  let port
  const fastify = Fastify()

  fastify
    .register(plugin, {
      httpEndpoint: 'https://jungle.eosio.cr'
    })
    .after((err) => {
      if (err) t.error(err)
    })

  fastify.get('/info', async (req, reply) => fastify.eos.getInfo({})
  )

  fastify.listen(0, (err) => {
    fastify.server.unref()
    if (err) t.threw(err)

    port = fastify.server.address().port
    http
      .get(`http://127.0.0.1:${port}/info`, (res) => {
        let data = ''
        res.on('data', (chunk) => { data += chunk })
        res.on('end', () => {
          // console.log(data.toString('utf8'));
          const info = JSON.parse(data.toString('utf8'))
          t.assert(info.chain_id)
          t.end()
        })
      })
      .on('error', t.threw)
  })

  t.tearDown(() => fastify.close())
})
