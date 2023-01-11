#include <Arduino.h>

// Set the LED pin
const int ledPin = 13;

// Create an event timer to blink the LED
void blink() {
  // Toggle the LED state
  digitalWrite(ledPin, !digitalRead(ledPin));
}

void setup() {
  // Set the LED pin as an output
  pinMode(ledPin, OUTPUT);

  // Set up an event timer to blink the LED every second
  Timer1.initialize(1000);
  Timer1.attachInterrupt(blink);
}

void loop() {
  // The LED will blink indefinitely
}
