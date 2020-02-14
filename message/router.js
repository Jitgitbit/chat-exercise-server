const { Router } = require("express");
const Message = require('./model')

const router = new Router();

router.get(
  `/message`,
  async function (
    request,response,next
  ){
    try{
      const messages = await Message
        .findAll()

      response.send(messages)
    } catch(error){
      next(error)
    }
  }
)

router.post(
  `/message`,
  async function(request,response, next)
  {
    try{
    const{body} = request
    const{text} = body
    const entity = {text}

    const message = await Message.create(entity)

    console.log(`request.body test`, body)
    console.log(response.dataValues)
    response.send(message);
    }
    catch(error){
      next(error)
    }
    
  }
)

module.exports = router;
