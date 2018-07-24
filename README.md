<p align="center">
	<a href="https://travis-ci.org/eoscostarica/fastify-eos">
		<img src="https://travis-ci.org/eoscostarica/fastify-eos.svg?branch=master" alt="TravisCI">
	</a>
	<a href="http://standardjs.com">
		<img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg" alt="StandardJS">
	</a>
	<a href="https://git.io/col">
		<img src="https://img.shields.io/badge/%E2%9C%93-collaborative_etiquette-brightgreen.svg" alt="Collaborative Etiquette">
	</a>
	<a href="https://discord.gg/bBpQHym">
		<img src="https://img.shields.io/discord/447118387118735380.svg?logo=discord" alt="chat on Discord">
	</a>
	<a href="https://twitter.com/intent/follow?screen_name=eoscostarica">
		<img src="https://img.shields.io/twitter/follow/eoscostarica.svg?style=social&logo=twitter" alt="follow on Twitter">
	</a>
	<a href="#">
		<img src="https://img.shields.io/dub/l/vibe-d.svg" alt="MIT">
	</a>
</p>

<p align="center">
	<a href="https://eoscostarica.io">
		<img src="https://cdn.rawgit.com/eoscostarica/assets/574d20a6/logos/eoscolors-transparent.png" width="300">
	</a>
</p>


# fastify-eos

A plugin that decorates [Fastify](https://fastify.io/) with an [EOS.js](https://github.com/EOSIO/eosjs) instance.

## Example

```js
const fastify = require('fastify')()

// receives eosjs config options 
// https://github.com/EOSIO/eosjs#configuration
fastify.register(require('fastify-eos'),{
    httpEndpoint: 'jungle.eosio.cr'
  }, (err) => { if (err) throw err }
)

fastify.get('/info', (req, reply) => {
  const { eos } = fastify 
  return await eos.getInfo({})
})

// GET: 'http://yourapi/info
// {"server_version":"75635168","chain_id":"038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca","head_block_num":7130132,"last_irreversible_block_num":7129812,"last_irreversible_block_id":"006ccad422bc16b20a632fa0da9dfcf2e071c56005cbf4c3c7371a8f972ce38d","head_block_id":"006ccc14d29f28d25495429def0b10a088408eddd7216d53ea4d92191e3e3602","head_block_time":"2018-07-24T01:26:54.500","head_block_producer":"eosninecatmx","virtual_block_cpu_limit":200000000,"virtual_block_net_limit":1048576000,"block_cpu_limit":199900,"block_net_limit":1048576}
```

Registering a route handler

```js

const handler = async (request, reply, eos) => JSON.stringify(await eos.getInfo({}))

fastify.route({
	method: 'GET',
	url: '/info',
	handler: (request, reply) => handler(request, reply, fastify.eos)
})
```

## Bug Reporting

Please report bugs big and small by [opening an issue](https://github.com/eoscostarica/fastify-eos/issues). No possible bug report is too small.


# Contributing

We follow EOS Costa Rica's Open Source Contributing Guidelines.

[learn.eoscostarica.io/open-source/](https://learn.eoscostarica.io/open-source/)


## Maintainers

- [@gaboesquivel](https://github.com/gaboesquivel).

## About EOS Costa Rica

EOS Blockchain is aiming to become a decentralized operating system which can support large-scale decentralized applications.

EOS Costa Rica supports the global and local community by maintaining and contributing to open source initiatives, meetups and workshops.

We challenge ourselves to provide the EOS platform with a strong geographical and political diversity by running the most robust EOS Block Producer possible from Costa Rica; We pledge to leverage our talent, experience, and sustainable internet resources to meet such an important challenge.

[eoscostarica.com](https://eoscostarica.com)

## License

MIT © [EOS Costa Rica](https://eoscostarica.com)  
See LICENSE for more info


