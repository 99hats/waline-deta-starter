const express = require('express');
const Waline = require('@waline/vercel');
const app = express();
const callback = Waline({ 
  env: 'deta',
  lang: 'en'
});

app.all(/.*/, callback);
module.exports = app;
