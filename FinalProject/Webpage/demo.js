

var message="TurnLightsON"
const mqtt = require('mqtt')
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");
var topic="/myTopic"
var topic="/myLightingSystem"
 client.on('connect', () => {
 client.subscribe(topic);
 console.log('mqtt connected');
});
client.on('message', (topic, message) => {

});   
var message1 = '';
var message2 = '';
var message3 = '';
function TurnLightsOn()
{   
    var text = document.getElementById("lightson").textContent;
    if (text == "Turn Lights On")
    {    
        message1 = 'TurnLightsOn'
        client.publish(topic,message1);
        console.log('published to Topic: ' + topic + " with Message: " + message);
        }
}
function TurnLightsOff()
{        

    var text = document.getElementById("lightsoff").textContent;
    if (text == "Turn Lights Off")
    {
        message2 = 'TurnLightsOn'
        client.publish(topic,message2);
    }
}
function AutomaticMode()
{        

    var text = document.getElementById("automatic").textContent;
    if (text == "Automatic Mode")
    {
        message3 = 'AutomaticMode'
        client.publish(topic,message3);
    }
}
      
    //Called after form input is processed


                //  function startConnect() 
        //  {
        //     // Generate a random client ID
        //     clientID = "clientID-" + parseInt(Math.random() * 100);
        //     host = "test.mosquitto.org";
        //     port = "8080";
        //     // Initialize new Paho client connection
        //     client = new Paho.MQTT.Client(host, Number(port), clientID);
        //     // Set callback handlers
        //     client.onConnectionLost = onConnectionLost;
        //     client.onMessageArrived = onMessageArrived;
        //     // Connect the client, if successful, call onConnect function
        //     client.connect({ 
        //         onSuccess: onConnect,
        //     });
        // }
        // // Called when the client connects
        // function onConnect() 
        // {

        // }
        // // Called when the client loses its connection
        // function onConnectionLost(responseObject) 
        // {
        //     document.getElementById("messages").innerHTML += '<span>ERROR: Connection lost</span><br/>';
        //     if (responseObject.errorCode !== 0) 
        //     {
        //         document.getElementById("messages").innerHTML += '<span>ERROR: ' + + responseObject.errorMessage + '</span><br/>';
        //     }
        // }
        // // Called when a message arrives
        // function onMessageArrived(message) 
        // {
        //     console.log("onMessageArrived: " + message.payloadString);
        //     document.getElementById("messages").innerHTML += '<span>Topic: ' + message.destinationName + '  | ' + message.payloadString + '</span><br/>';
        // }

        // // Called when the disconnection button is pressed
        // function startDisconnect() 
        // {
        //     client.disconnect();
        //     document.getElementById("messages").innerHTML += '<span>Disconnected</span><br/>';
        // }
