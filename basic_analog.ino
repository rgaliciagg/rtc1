/*
  Basic Analog Input

  Demonstrates analog input by reading an analog sensor on analog pin 0 and
  sending the value to serialport(monitor).

  The circuit:
  - potentiometer
    center pin of the potentiometer to the analog input 0
    one side pin (either one) to ground
    the other side pin to +5V
    created 1 Jan 2023
    by Roberto Galicia  

*/  

int pot = A0;    // select the input pin for the potentiometer

int value = 0;  // variable to store the value coming from the sensor

void setup() {
  Serial.begin(9600);
}

void loop() {
  // read the value from the potentiometer:
  value = analogRead(pot);
  Serial.println(value);
// send the value to serialport
 delay(1000);
}