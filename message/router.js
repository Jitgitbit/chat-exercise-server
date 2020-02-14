const express = require('express')
const Message = require('./model')
const Channel = require('../channel/model')

function factory (stream) {
  const { Router } = express

  const router = Router()

  router.post(
    '/message',
    async function (
      request, response, next
    ) {
      try {
        const { body } = request
        const { text, channelId } = body
        const entity = { text, channelId }
        const message = await Message
          .create(entity)

        const channels = await Channel
          .findAll({ include: [Message] })

        const action = {
          type: 'ALL_CHANNELS',
          payload: channels
        }

        const json = JSON
          .stringify(action)

        stream.send(json)

        response.send(message)
      } catch (error) {
        next(error)
      }
    }
  )

  return router
}

module.exports = factory