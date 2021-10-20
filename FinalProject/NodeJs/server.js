//server.js
const mqtt = require('mqtt')
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");
var topic="/myLightingSystem"
var mqttMessage = '';
client.on('connect', () => {
  client.subscribe(topic);
  console.log('mqtt connected');
});
client.on('message', (topic, message) => {
  console.log("Topic is: " + topic)
  console.log("Message is: " +  message)
  mqttMessage = message;
 });

const mongoose = require('mongoose');
// const mongoose = require('mongoose');
const Sensor = require('./Models/sensor');
var plotly = require('plotly')("syHamza", "0Shb0l2e8i9PglIguOgV")
var five = require("johnny-five"), board, photoresistor;
var IdCount = 0;
var intensityV = 0;

board = new five.Board();

board.on("ready", function() {
  // Create a new `motion` hardware instance.
  var motion = new five.Motion(2);
  var motion1 = new five.Motion(3);
  const led = new five.Led(11);
  const led1 = new five.Led(12);
  const led2 = new five.Led(13);
  var message = '';

  board.repl.inject({
    led, led1, led2,
    pot: photoresistor
  });
  photoresistor = new five.Sensor({
    pin: "A3",
    freq: 1000
  });
  // "calibrated" occurs once, at the beginning of a session,
  motion.on("calibrated", function() {
    console.log("calibrated");
  });
  motion1.on("calibrated", function() {
    console.log("calibrated");
  });

  // "motionstart" events are fired when the "calibrated"
  // proximal area is disrupted, generally by some form of movement
  motion.on("motionstart", function() {
    message = message + 'Motion Detected 1, ';
    // console.log("motionstart in room 1");
    led2.on();
  });
  motion1.on("motionstart", function() {
    message = message + 'Motion Detected 2, '
    // console.log("motionstart in room 2");
    led.on();
  });

  // "motionend" events are fired following a "motionstart" event
  // when no movement has occurred in X ms
  motion.on("motionend", function() {
    message = message + ' Motion Stopped in 1, ';
    // console.log("motion stopped");
    led2.off();
  });
  motion1.on("motionend", function() {
    message = message + ' Motion Stopped in 2, ';
    // console.log("motion stopped");
    led.off();
  });
  if(mqttMessage == "TurnLightsOn"){
    led.on();
    led1.on();
    led2.on();
  }
  if(mqttMessage == "TurnLightsOff"){
    led.off();
    led1.off();
    led2.off();
  }
  if(mqttMessage == "Automatic mode"){
  }
  photoresistor.on("data" ,function() {
    if(this.value < 100)
    {
        led1.on();
    }
    else{
        led1.off();
    }
    message = message + ' Light Intensity: ' + this.value;
    intensityV = this.value;
    console.log(message);
    message = '';
  });
  var data ={ 
    x: [], 
    y: [], 
    type: "scatter" 
  };
  mongoose.connect('mongodb+srv://syHamza:BaYi.xAM_%21%40siM4@sit314.oxfq0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

  setInterval(sensortest, 1000)
  function sensortest(){
      const sensordata = { 
        id: IdCount+1, 
        name: "Light Intensity",
        time: Date.now(), 
        intensity: intensityV
    }
    const newSensor = new Sensor({
      id: sensordata.id, 
      name: sensordata.name, 
      time: sensordata.time, 
      intensity: sensordata.intensity
    });
      newSensor.save().then(doc => { 
        console.log(doc);
        date = Date.now();
        data.x.push(date[-6]); 
        data.y.push(intensityV);
        var graphOptions = {filename: "server.js", fileopt: "overwrite"}; 
        plotly.plot(data, graphOptions, function (err, msg) {
          if (err) return console.log(err);
          console.log(msg); 
        }); 
      })
    }
});


