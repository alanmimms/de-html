#!/usr/bin/env node
'use strict';

const fs = require('fs');
const cheerio = require('cheerio');


process.argv.slice(2).forEach(fn => {
  const outFN = fn.replace(/\.html$/, '');
  console.log(fn);
  const html = fs.readFileSync(fn);
  const $ = cheerio.load(html);
  const pre = $('PRE').text();
  fs.writeFileSync(outFN, pre);
});
