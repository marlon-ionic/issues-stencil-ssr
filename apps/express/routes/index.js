var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', async(req, res, next) => {
  const hydrate = require("../../../packages/core/hydrate");
  const { html } = await hydrate.renderToString(`<my-component first="John2" last="Doe"></my-component>`);
  const button = await hydrate.renderToString(`<my-button>Hello world</my-button>`);

  res.render('index', { 
    title: 'Express',
    htmlContent: html,
    buttonContent: button.html
  });
});

module.exports = router;
