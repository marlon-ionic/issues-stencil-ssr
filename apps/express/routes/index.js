var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', async(req, res, next) => {
  const hydrate = require("../../../packages/core/hydrate");
  const myComponent = await hydrate.renderToString(`<my-component first="John" last="Doe"></my-component>`);
  const myButton = await hydrate.renderToString(`<my-button>Hello world</my-button>`);

  res.render('index', { 
    title: 'Express',
    htmlContent: myComponent.html,
    buttonContent: myButton.html
  });
});

module.exports = router;
