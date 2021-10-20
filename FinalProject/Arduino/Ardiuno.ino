int ledPin = 13;                // LED 
int ledPin1 = 12;
int ledPin2 = 11;
int pirPin = 2;                 // PIR Out pin 
int pirPin1 = 3;                 // PIR Out pin 
int pirStat = 0;    
int pirStat1 = 0;    // PIR status
int light_sensor = A3; 

void setup() {
 pinMode(ledPin, OUTPUT);     
 pinMode(ledPin1, OUTPUT); 
  pinMode(ledPin2, OUTPUT); 
 pinMode(pirPin, INPUT); 
        
 Serial.begin(9600);
}

void loop(){
// pirStat = digitalRead(pirPin); 
// pirStat1 = digitalRead(pirPin1); 
// int raw_light = analogRead(light_sensor); // read the raw value from light_sensor pin (A3)
// int light = map(raw_light, 0, 1023, 0, 100); // map the value from 0, 1023 to 0, 100
// if (pirStat == HIGH) {            // if motion detected
//   digitalWrite(ledPin, HIGH);  // turn LED ON
//   Serial.println("Motion detectednin room 1");
// } 
// else {
//   digitalWrite(ledPin, LOW); // turn LED OFF if we have no motion
// }
//  if (pirStat1 == HIGH) {            // if motion detected
//   digitalWrite(ledPin2, HIGH);  // turn LED ON
//   Serial.println("Motion detected in room 2");
// } 
// else {
//   digitalWrite(ledPin2, LOW); // turn LED OFF if we have no motion
// }
// if (light < 2){
//   digitalWrite(ledPin1, HIGH);
// }
// else{
//     digitalWrite(ledPin1, LOW);
// }
//  Serial.print("Light level: "); 
//  Serial.println(light); // print the light value in Serial Monitor
//  delay(1000); // add a delay to only read and print every 1 second
//
//  digitalWrite(ledPin, HIGH);
//  digitalWrite(ledPin1, HIGH);
//  digitalWrite(ledPin2, HIGH);
}
