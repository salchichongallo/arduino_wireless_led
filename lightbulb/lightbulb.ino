const int led = 2;

void setup() {
  Serial.begin(9600);
  pinMode(led, OUTPUT);
}

void loop() {
  if (Serial.available() > 0) {
    String input = Serial.readStringUntil('\n');

    if (input == "ON") {
      digitalWrite(led, HIGH);
    } else if (input == "OFF") {
      digitalWrite(led, LOW);
     }
  }
}
