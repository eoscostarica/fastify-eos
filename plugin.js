'use strict'

const fp = require('fastify-plugin')
const EOS = require('eosjs')

function plugin (fastify, options, next) {
  fastify.decorate('eos', new EOS(options))
  next()
}

module.exports = fp(plugin, {
  fastify: '^1.0.0',
  name: 'fastify-eos'
})
