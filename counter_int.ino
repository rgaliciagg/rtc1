#include <TimerOne.h>
int count;

// Create a counter event timer 
void counter() {
  // count +1
 Serial.println(count++);
}

void setup() {
   Serial.begin(9600);
  // Set up an counter event timer  every second
  Timer1.initialize(1000000);
  Timer1.attachInterrupt(counter);
}

void loop() {
  // The counter will increment indefinitely
}
DEEP SLEEP
