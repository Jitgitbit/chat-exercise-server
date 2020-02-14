const { Router } = require("express");
const Message = require('./model')

const router = new Router();

router.post(
  `./message`,
  async function(request,response, next)
  {
    try{
    const{body} = request
    const{text} = body
    const entity = {text}

    const response = await Message.create(entity)

    console.log(`request.body test`, body)
    console.log(response.dataValues)
    }
    catch(error){
      next(error)
    }
    
  }
)

module.exports = router;
