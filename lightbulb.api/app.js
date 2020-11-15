const morgan = require('morgan');
const express = require('express');
const SerialPort = require('serialport');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const COM_PORT = process.env.COM_PORT || '/dev/ttyACM0';

const app = express();
const serialPort = new SerialPort(COM_PORT);

app.use(morgan('tiny'));

app.get('/on', (_, res) => {
  serialPort.write('ON');
  res.status(201).end();
});

app.get('/off', (_, res) => {
  serialPort.write('OFF');
  res.status(201).end();
});

app.listen(PORT, HOST, () => {
  console.log('API listening on port 3000')
});
