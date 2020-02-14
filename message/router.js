const { Router } = require("express");

const router = new Router();

router.post(
  `./message`,
  function(request,response){
    const{body} = request

    console.log(`request.body test`, body)
  }
)

module.exports = router;
