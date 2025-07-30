import { Course } from '../types'

export const courses: Course[] = [
  {
    id: 'arduino-basics',
    title: 'Arduino Fundamentals',
    description: 'Master the core concepts of Arduino programming, from basic syntax to digital I/O operations',
    difficulty: 'beginner',
    estimatedTime: '3 hours',
    xpReward: 500,
    category: 'Programming',
    thumbnail: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      {
        id: 'arduino-intro',
        title: 'Introduction to Arduino',
        content: `
# Welcome to Arduino Programming! 🚀

Arduino is an open-source electronics platform that makes it easy to create interactive projects. Whether you're building robots, home automation systems, or IoT devices, Arduino provides the perfect foundation.

## What is Arduino?
Arduino consists of both **hardware** (microcontroller boards) and **software** (IDE for programming). The most popular board is the Arduino Uno, featuring:

- **Microcontroller**: ATmega328P
- **Digital I/O Pins**: 14 (6 with PWM)
- **Analog Input Pins**: 6
- **Flash Memory**: 32KB
- **Operating Voltage**: 5V

## Why Choose Arduino?
- **Beginner-Friendly**: Simple programming language based on C/C++
- **Open Source**: Free software and open hardware designs
- **Large Community**: Extensive tutorials, libraries, and support
- **Versatile**: Suitable for prototypes to production projects
- **Cost-Effective**: Affordable boards and components

## Arduino vs Other Platforms
| Feature | Arduino | Raspberry Pi | ESP32 |
|---------|---------|--------------|-------|
| **Complexity** | Simple | Complex | Moderate |
| **Real-time** | Excellent | Limited | Good |
| **Power Usage** | Low | High | Very Low |
| **Price** | $25 | $35+ | $5-15 |
| **WiFi Built-in** | No | Yes | Yes |

## Getting Started Checklist
✅ Arduino Uno board  
✅ USB cable  
✅ Breadboard  
✅ Jumper wires  
✅ LEDs and resistors  
✅ Arduino IDE installed  

Ready to start your journey into the exciting world of embedded programming!
        `,
        type: 'theory',
        xpReward: 75
      },
      {
        id: 'setup-loop',
        title: 'Program Structure: setup() and loop()',
        content: `
# Arduino Program Structure 🏗️

Every Arduino program (called a "sketch") follows a specific structure with two essential functions that form the backbone of your code.

## The Two Core Functions

### setup() Function
- **Runs ONCE** when the Arduino starts or resets
- Used for **initialization tasks**
- Configure pin modes, start serial communication, initialize variables
- Think of it as the "preparation phase"

### loop() Function  
- **Runs CONTINUOUSLY** after setup() completes
- Contains your **main program logic**
- Executes repeatedly until power is removed
- This is where the "action" happens

## Basic Template Structure
\`\`\`cpp
// Global variables and includes go here
#include <SomeLibrary.h>
int myVariable = 0;

void setup() {
  // Initialization code here
  // This runs ONCE
  Serial.begin(9600);
  pinMode(13, OUTPUT);
}

void loop() {
  // Main program code here  
  // This runs FOREVER
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}
\`\`\`

## Execution Flow
1. **Power On/Reset** → Arduino starts
2. **Global Variables** → Initialized first
3. **setup()** → Runs once for configuration
4. **loop()** → Runs repeatedly forever
5. **Reset Button** → Returns to step 1

## Common setup() Tasks
- **Pin Configuration**: \`pinMode(pin, mode)\`
- **Serial Communication**: \`Serial.begin(baudRate)\`
- **Library Initialization**: \`library.begin()\`
- **Variable Setup**: Set initial values
- **Sensor Calibration**: Read baseline values

## Common loop() Tasks
- **Read Sensors**: Get current values
- **Process Data**: Make decisions based on inputs
- **Control Outputs**: Turn things on/off
- **Communication**: Send/receive data
- **Timing Control**: Manage delays and intervals

## Pro Tips 💡
- Keep setup() **fast** - avoid long delays
- Use **non-blocking code** in loop() when possible
- **Comment your code** for future reference
- Group related functionality together
- Consider using **state machines** for complex logic

The beauty of Arduino is this simple yet powerful structure that handles everything from blinking LEDs to controlling complex robotics systems!
        `,
        type: 'theory',
        xpReward: 100
      },
      {
        id: 'digital-io',
        title: 'Digital Input/Output Mastery',
        content: `
# Digital I/O: The Foundation of Arduino Control 🔌

Digital pins are the primary way Arduino interacts with the physical world. They can only be in two states: HIGH (5V) or LOW (0V), making them perfect for on/off control and digital sensing.

## Pin Configuration with pinMode()
Before using any pin, you must configure its mode:

\`\`\`cpp
pinMode(pin, mode);
\`\`\`

### Pin Modes Explained
- **OUTPUT**: Pin can drive current (source or sink)
- **INPUT**: Pin reads external voltage (high impedance)
- **INPUT_PULLUP**: Pin reads with internal pullup resistor enabled

## Digital Output Control

### digitalWrite() Function
\`\`\`cpp
digitalWrite(pin, value);
\`\`\`
- **pin**: Pin number (2-13 for digital pins)
- **value**: HIGH (5V) or LOW (0V)

### Practical Output Examples
\`\`\`cpp
// Control an LED
pinMode(13, OUTPUT);
digitalWrite(13, HIGH);  // LED ON
digitalWrite(13, LOW);   // LED OFF

// Control a relay
pinMode(7, OUTPUT);
digitalWrite(7, HIGH);   // Relay activated
\`\`\`

## Digital Input Reading

### digitalRead() Function
\`\`\`cpp
int state = digitalRead(pin);
\`\`\`
- Returns: HIGH or LOW
- Use with buttons, switches, sensors

### Button Reading Example
\`\`\`cpp
void setup() {
  pinMode(2, INPUT_PULLUP);  // Button pin
  pinMode(13, OUTPUT);       // LED pin
  Serial.begin(9600);
}

void loop() {
  int buttonState = digitalRead(2);
  
  if (buttonState == LOW) {  // Button pressed (pullup inverts logic)
    digitalWrite(13, HIGH);   // Turn on LED
    Serial.println("Button pressed!");
  } else {
    digitalWrite(13, LOW);    // Turn off LED
  }
  
  delay(50);  // Debounce delay
}
\`\`\`

## Understanding Pull-up Resistors
When reading digital inputs, you need to ensure the pin has a defined state:

### External Pull-up Circuit
\`\`\`
5V ----[10kΩ]---- Pin ---- Button ---- GND
\`\`\`

### Internal Pull-up (Easier!)
\`\`\`cpp
pinMode(2, INPUT_PULLUP);  // Enables internal 20kΩ pullup
\`\`\`

## Advanced Digital I/O Concepts

### Pin Current Limitations
- **Maximum per pin**: 40mA
- **Total for all pins**: 200mA
- **Use transistors/relays** for high-current loads

### Digital Pin Capabilities
| Pin Range | Special Features |
|-----------|------------------|
| 0-1 | Serial communication (avoid if using Serial) |
| 2-3 | External interrupt capable |
| 3,5,6,9,10,11 | PWM output capable (~) |
| 13 | Built-in LED connected |

### Bit Manipulation (Advanced)
For faster pin control:
\`\`\`cpp
// Fast digital write using port manipulation
PORTB |= (1 << 5);   // Set pin 13 HIGH
PORTB &= ~(1 << 5);  // Set pin 13 LOW
\`\`\`

## Common Digital I/O Projects
1. **LED Blinker**: Basic output control
2. **Button Counter**: Input reading with debouncing
3. **Traffic Light**: Multiple output coordination
4. **Burglar Alarm**: Input monitoring with output response
5. **Digital Dice**: Random number display

## Troubleshooting Tips 🔧
- **Floating inputs**: Always use pullup/pulldown resistors
- **Current limits**: Don't exceed pin current ratings
- **Voltage levels**: Ensure 5V logic compatibility
- **Debouncing**: Add delays for mechanical switches
- **Serial conflicts**: Avoid pins 0-1 when using Serial

Master digital I/O and you'll have the foundation for controlling almost any electronic device!
        `,
        type: 'theory',
        xpReward: 125
      },
      {
        id: 'blink-practice',
        title: 'Hands-On: Advanced LED Blink Patterns',
        content: 'Create a sophisticated LED blink pattern that demonstrates your understanding of timing and digital output control. Your code should make the built-in LED blink in a specific pattern: 3 fast blinks, pause, 2 slow blinks, long pause, repeat.',
        type: 'code',
        xpReward: 150,
        codeTemplate: `void setup() {
  // Configure the built-in LED pin
  pinMode(13, OUTPUT);
}

void loop() {
  // Create pattern: 3 fast blinks, pause, 2 slow blinks, long pause
  
  // Fast blinks (3x)
  for(int i = 0; i < 3; i++) {
    digitalWrite(13, HIGH);
    delay(200);  // Fast on
    digitalWrite(13, LOW);
    delay(200);  // Fast off
  }
  
  delay(500);  // Short pause
  
  // Slow blinks (2x)
  for(int i = 0; i < 2; i++) {
    digitalWrite(13, HIGH);
    delay(800);  // Slow on
    digitalWrite(13, LOW);
    delay(800);  // Slow off
  }
  
  delay(2000);  // Long pause before repeat
}`,
        expectedOutput: 'LED blinks in pattern: 3 fast, pause, 2 slow, long pause, repeat'
      },
      {
        id: 'variables-datatypes',
        title: 'Variables and Data Types',
        content: `
# Arduino Variables and Data Types 📊

Variables are containers that store data values. Understanding data types is crucial for efficient memory usage and preventing bugs in your Arduino projects.

## Basic Data Types

### Integer Types
\`\`\`cpp
int temperature = 25;        // 16-bit signed (-32,768 to 32,767)
unsigned int distance = 150; // 16-bit unsigned (0 to 65,535)
long timestamp = 1234567890; // 32-bit signed
unsigned long uptime = 0;    // 32-bit unsigned (0 to 4,294,967,295)
byte sensorValue = 255;      // 8-bit unsigned (0 to 255)
\`\`\`

### Floating Point Types
\`\`\`cpp
float voltage = 3.14;        // 32-bit floating point
double precision = 3.14159; // Same as float on Arduino
\`\`\`

### Boolean and Character Types
\`\`\`cpp
bool isRunning = true;       // true or false
char letter = 'A';           // Single character
\`\`\`

## Memory Usage Comparison
| Type | Size | Range | Use Case |
|------|------|-------|----------|
| **bool** | 1 byte | true/false | Flags, states |
| **byte** | 1 byte | 0-255 | Small positive numbers |
| **int** | 2 bytes | -32,768 to 32,767 | General purpose |
| **long** | 4 bytes | ±2.1 billion | Large numbers, time |
| **float** | 4 bytes | ±3.4×10³⁸ | Decimal numbers |

## Variable Scope and Storage

### Global Variables
\`\`\`cpp
int globalCounter = 0;  // Accessible everywhere

void setup() {
  // Can use globalCounter here
}

void loop() {
  globalCounter++;  // Modify global variable
}
\`\`\`

### Local Variables
\`\`\`cpp
void loop() {
  int localValue = 100;  // Only exists in this function
  // localValue destroyed when function ends
}
\`\`\`

### Static Variables
\`\`\`cpp
void countCalls() {
  static int callCount = 0;  // Retains value between calls
  callCount++;
  Serial.println(callCount);
}
\`\`\`

## Constants and #define

### const Keyword
\`\`\`cpp
const int LED_PIN = 13;        // Cannot be changed
const float PI = 3.14159;      // Mathematical constant
\`\`\`

### #define Preprocessor
\`\`\`cpp
#define MAX_SENSORS 5          // Text replacement
#define BAUD_RATE 9600         // Configuration values
\`\`\`

## Arrays and Strings

### Arrays
\`\`\`cpp
int sensorReadings[10];        // Array of 10 integers
int pins[] = {2, 3, 4, 5};     // Initialize with values
byte data[256] = {0};          // Initialize all to 0
\`\`\`

### Strings
\`\`\`cpp
char message[] = "Hello";      // Character array
String text = "Arduino";       // String object (uses more memory)
\`\`\`

## Advanced Variable Concepts

### Volatile Variables
\`\`\`cpp
volatile bool interruptFlag = false;  // Can change unexpectedly
\`\`\`
Use with interrupt service routines and hardware registers.

### PROGMEM (Flash Storage)
\`\`\`cpp
const char welcomeMsg[] PROGMEM = "Welcome to Arduino!";
\`\`\`
Stores data in flash memory instead of RAM.

## Best Practices 💡

### Choose Appropriate Data Types
\`\`\`cpp
// Good: Efficient memory usage
byte ledBrightness = 128;     // 0-255 range
unsigned int sensorValue;     // Always positive

// Avoid: Wasteful
long ledBrightness = 128;     // Overkill for 0-255 range
\`\`\`

### Initialize Variables
\`\`\`cpp
int counter = 0;              // Good: Explicit initialization
int undefined;                // Bad: Random initial value
\`\`\`

### Use Meaningful Names
\`\`\`cpp
int temperatureCelsius = 25;  // Clear and descriptive
int t = 25;                   // Unclear abbreviation
\`\`\`

### Memory Management Tips
- **Use smallest appropriate data type**
- **Prefer local variables when possible**
- **Use PROGMEM for constant strings**
- **Monitor RAM usage** (Arduino Uno has only 2KB!)

## Common Pitfalls ⚠️
1. **Integer Overflow**: Values exceeding type limits wrap around
2. **Floating Point Precision**: Limited accuracy in calculations
3. **Uninitialized Variables**: Contain random values
4. **Global Variable Overuse**: Can cause unexpected behavior

Understanding variables and data types is fundamental to writing efficient, reliable Arduino code!
        `,
        type: 'theory',
        xpReward: 100
      },
      {
        id: 'digital-quiz',
        title: 'Arduino Fundamentals Quiz',
        content: 'Test your understanding of Arduino basics, program structure, and digital I/O concepts.',
        type: 'quiz',
        xpReward: 125,
        quiz: [
          {
            id: 'q1',
            question: 'Which function runs only once when Arduino starts or resets?',
            options: ['loop()', 'setup()', 'begin()', 'init()'],
            correctAnswer: 1,
            explanation: 'setup() runs once at the beginning for initialization, while loop() runs continuously.'
          },
          {
            id: 'q2',
            question: 'What does digitalWrite(13, HIGH) do?',
            options: ['Reads pin 13', 'Sets pin 13 to 5V', 'Sets pin 13 to 0V', 'Configures pin mode'],
            correctAnswer: 1,
            explanation: 'digitalWrite(pin, HIGH) sets the specified pin to 5V (logic high).'
          },
          {
            id: 'q3',
            question: 'Which pin mode enables internal pullup resistor for button input?',
            options: ['INPUT', 'OUTPUT', 'INPUT_PULLUP', 'PULLUP_INPUT'],
            correctAnswer: 2,
            explanation: 'INPUT_PULLUP enables the internal pullup resistor, eliminating the need for external resistors.'
          },
          {
            id: 'q4',
            question: 'What is the maximum current per digital pin on Arduino Uno?',
            options: ['20mA', '40mA', '100mA', '500mA'],
            correctAnswer: 1,
            explanation: 'Each digital pin can safely source or sink up to 40mA of current.'
          },
          {
            id: 'q5',
            question: 'Which data type is most memory-efficient for storing values 0-255?',
            options: ['int', 'long', 'byte', 'float'],
            correctAnswer: 2,
            explanation: 'byte uses only 1 byte of memory and can store values from 0 to 255, perfect for this range.'
          }
        ]
      }
    ]
  },
  {
    id: 'sensors-actuators',
    title: 'Sensors & Actuators',
    description: 'Explore the world of sensors and actuators - learn to read environmental data and control motors, servos, and other devices',
    difficulty: 'intermediate',
    estimatedTime: '4 hours',
    xpReward: 750,
    category: 'Hardware',
    thumbnail: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      {
        id: 'analog-input',
        title: 'Analog Input and ADC',
        content: `
# Analog Input: Reading the Real World 📡

Unlike digital signals that are either ON or OFF, analog signals can have any value within a range. Arduino's Analog-to-Digital Converter (ADC) transforms continuous analog voltages into discrete digital values.

## Understanding the ADC

### Key Specifications
- **Resolution**: 10-bit (1024 discrete levels)
- **Input Range**: 0V to 5V (or 3.3V on 3.3V boards)
- **Reference Voltage**: Determines maximum input voltage
- **Conversion Time**: ~100 microseconds per reading

### The analogRead() Function
\`\`\`cpp
int value = analogRead(pin);
\`\`\`
- **pin**: A0, A1, A2, A3, A4, A5 (analog pins)
- **Returns**: 0 to 1023 (10-bit resolution)

## Voltage Conversion Mathematics

### Basic Conversion Formula
\`\`\`cpp
float voltage = (analogValue * referenceVoltage) / 1023.0;

// For 5V reference:
float voltage = (analogValue * 5.0) / 1023.0;

// For 3.3V reference:
float voltage = (analogValue * 3.3) / 1023.0;
\`\`\`

### Practical Example: Battery Monitor
\`\`\`cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  int rawValue = analogRead(A0);
  float voltage = (rawValue * 5.0) / 1023.0;
  float batteryPercent = (voltage - 3.0) / (4.2 - 3.0) * 100;
  
  Serial.print("Raw: ");
  Serial.print(rawValue);
  Serial.print(" | Voltage: ");
  Serial.print(voltage, 2);
  Serial.print("V | Battery: ");
  Serial.print(batteryPercent, 1);
  Serial.println("%");
  
  delay(1000);
}
\`\`\`

## Common Analog Sensors

### Potentiometer (Variable Resistor)
\`\`\`cpp
int potValue = analogRead(A0);
int brightness = map(potValue, 0, 1023, 0, 255);
analogWrite(9, brightness);  // Control LED brightness
\`\`\`

### Light Dependent Resistor (LDR)
\`\`\`cpp
int lightLevel = analogRead(A1);
if (lightLevel < 300) {
  digitalWrite(13, HIGH);  // Turn on LED in darkness
} else {
  digitalWrite(13, LOW);   // Turn off LED in light
}
\`\`\`

### Temperature Sensor (TMP36)
\`\`\`cpp
int sensorValue = analogRead(A2);
float voltage = (sensorValue * 5.0) / 1023.0;
float temperatureC = (voltage - 0.5) * 100;  // TMP36 formula
float temperatureF = (temperatureC * 9.0/5.0) + 32;

Serial.print("Temperature: ");
Serial.print(temperatureC);
Serial.print("°C (");
Serial.print(temperatureF);
Serial.println("°F)");
\`\`\`

## Advanced ADC Concepts

### Analog Reference Voltage
\`\`\`cpp
analogReference(type);
\`\`\`
- **DEFAULT**: 5V (or 3.3V)
- **INTERNAL**: 1.1V (more precise for small signals)
- **EXTERNAL**: External reference on AREF pin

### Improving ADC Accuracy
\`\`\`cpp
// Multiple readings for noise reduction
float getAverageReading(int pin, int samples) {
  long sum = 0;
  for(int i = 0; i < samples; i++) {
    sum += analogRead(pin);
    delay(10);  // Allow ADC to settle
  }
  return (float)sum / samples;
}
\`\`\`

### Voltage Divider Circuits
For measuring voltages > 5V:
\`\`\`
Input Voltage ----[R1]---- Analog Pin ----[R2]---- GND

Measured Voltage = Input × (R2 / (R1 + R2))
\`\`\`

## Sensor Interfacing Best Practices

### Signal Conditioning
1. **Filtering**: Remove noise with capacitors
2. **Amplification**: Boost weak signals
3. **Level Shifting**: Match voltage ranges
4. **Isolation**: Protect Arduino from high voltages

### Code Optimization
\`\`\`cpp
// Efficient sensor reading with timing
unsigned long lastReading = 0;
const unsigned long READING_INTERVAL = 100;  // 100ms

void loop() {
  if (millis() - lastReading >= READING_INTERVAL) {
    int sensorValue = analogRead(A0);
    processSensorData(sensorValue);
    lastReading = millis();
  }
  
  // Other non-blocking code here
}
\`\`\`

## Troubleshooting Analog Inputs 🔧

### Common Issues
- **Floating inputs**: Always connect something to analog pins
- **Noise**: Use averaging and proper grounding
- **Reference voltage**: Ensure stable power supply
- **Impedance matching**: High impedance sources may need buffering

### Debugging Tips
\`\`\`cpp
void debugAnalogPin(int pin) {
  Serial.print("A");
  Serial.print(pin);
  Serial.print(": Raw=");
  Serial.print(analogRead(pin));
  Serial.print(" Voltage=");
  Serial.println((analogRead(pin) * 5.0) / 1023.0, 3);
}
\`\`\`

Mastering analog input opens up a world of sensors and real-world interfacing possibilities!
        `,
        type: 'theory',
        xpReward: 125
      },
      {
        id: 'pwm-output',
        title: 'PWM Output and Motor Control',
        content: `
# PWM: Creating Analog-like Output from Digital Pins ⚡

Pulse Width Modulation (PWM) is a technique that simulates analog output by rapidly switching a digital pin between HIGH and LOW states. By varying the duty cycle, we can control the average voltage and power delivered to loads.

## Understanding PWM

### Key Concepts
- **Frequency**: How fast the signal switches (Arduino: ~490Hz or ~980Hz)
- **Duty Cycle**: Percentage of time signal is HIGH
- **Resolution**: Arduino uses 8-bit (0-255 levels)

### PWM Waveforms
\`\`\`
Duty Cycle 25%:  ▁▁▁█▁▁▁█▁▁▁█  (Average: 1.25V)
Duty Cycle 50%:  ▁▁██▁▁██▁▁██  (Average: 2.5V)
Duty Cycle 75%:  ▁███▁███▁███  (Average: 3.75V)
\`\`\`

## The analogWrite() Function

### Basic Syntax
\`\`\`cpp
analogWrite(pin, value);
\`\`\`
- **pin**: PWM-capable pins (3, 5, 6, 9, 10, 11) marked with ~
- **value**: 0-255 (0 = 0% duty cycle, 255 = 100% duty cycle)

### LED Brightness Control
\`\`\`cpp
void setup() {
  pinMode(9, OUTPUT);  // PWM pin
}

void loop() {
  // Fade in
  for(int brightness = 0; brightness <= 255; brightness++) {
    analogWrite(9, brightness);
    delay(10);
  }
  
  // Fade out
  for(int brightness = 255; brightness >= 0; brightness--) {
    analogWrite(9, brightness);
    delay(10);
  }
}
\`\`\`

## Motor Control with PWM

### DC Motor Speed Control
\`\`\`cpp
const int motorPin = 6;
const int potPin = A0;

void setup() {
  pinMode(motorPin, OUTPUT);
}

void loop() {
  int potValue = analogRead(potPin);
  int motorSpeed = map(potValue, 0, 1023, 0, 255);
  
  analogWrite(motorPin, motorSpeed);
  delay(10);
}
\`\`\`

### H-Bridge Motor Control (Bidirectional)
\`\`\`cpp
const int motor1Pin = 5;
const int motor2Pin = 6;
const int enablePin = 9;

void setup() {
  pinMode(motor1Pin, OUTPUT);
  pinMode(motor2Pin, OUTPUT);
  pinMode(enablePin, OUTPUT);
}

void motorControl(int speed) {
  if (speed > 0) {
    // Forward direction
    digitalWrite(motor1Pin, HIGH);
    digitalWrite(motor2Pin, LOW);
    analogWrite(enablePin, speed);
  } else if (speed < 0) {
    // Reverse direction
    digitalWrite(motor1Pin, LOW);
    digitalWrite(motor2Pin, HIGH);
    analogWrite(enablePin, -speed);
  } else {
    // Stop motor
    digitalWrite(motor1Pin, LOW);
    digitalWrite(motor2Pin, LOW);
    analogWrite(enablePin, 0);
  }
}
\`\`\`

## Servo Motor Control

### Using the Servo Library
\`\`\`cpp
#include <Servo.h>

Servo myServo;

void setup() {
  myServo.attach(9);  // Attach servo to pin 9
}

void loop() {
  // Sweep from 0 to 180 degrees
  for(int angle = 0; angle <= 180; angle++) {
    myServo.write(angle);
    delay(15);
  }
  
  // Sweep back from 180 to 0 degrees
  for(int angle = 180; angle >= 0; angle--) {
    myServo.write(angle);
    delay(15);
  }
}
\`\`\`

### Manual PWM Servo Control
\`\`\`cpp
const int servoPin = 9;

void setup() {
  pinMode(servoPin, OUTPUT);
}

void setServoAngle(int angle) {
  // Convert angle (0-180) to pulse width (1000-2000 microseconds)
  int pulseWidth = map(angle, 0, 180, 1000, 2000);
  
  digitalWrite(servoPin, HIGH);
  delayMicroseconds(pulseWidth);
  digitalWrite(servoPin, LOW);
  delay(20);  // 50Hz refresh rate
}

void loop() {
  setServoAngle(0);    // 0 degrees
  delay(1000);
  setServoAngle(90);   // 90 degrees
  delay(1000);
  setServoAngle(180);  // 180 degrees
  delay(1000);
}
\`\`\`

## Advanced PWM Techniques

### Custom PWM Frequency
\`\`\`cpp
void setPWMFrequency(int pin, int divisor) {
  byte mode;
  if(pin == 5 || pin == 6 || pin == 9 || pin == 10) {
    switch(divisor) {
      case 1: mode = 0x01; break;    // 31372.55 Hz
      case 8: mode = 0x02; break;    // 3921.16 Hz
      case 64: mode = 0x03; break;   // 490.20 Hz (default)
      case 256: mode = 0x04; break;  // 122.55 Hz
      case 1024: mode = 0x05; break; // 30.64 Hz
      default: return;
    }
    
    if(pin == 5 || pin == 6) {
      TCCR0B = TCCR0B & 0b11111000 | mode;
    } else {
      TCCR1B = TCCR1B & 0b11111000 | mode;
    }
  }
}
\`\`\`

### Soft PWM for Non-PWM Pins
\`\`\`cpp
void softPWM(int pin, int dutyCycle, int period) {
  int onTime = (period * dutyCycle) / 255;
  int offTime = period - onTime;
  
  if (onTime > 0) {
    digitalWrite(pin, HIGH);
    delayMicroseconds(onTime);
  }
  
  if (offTime > 0) {
    digitalWrite(pin, LOW);
    delayMicroseconds(offTime);
  }
}
\`\`\`

## PWM Applications and Projects

### RGB LED Color Mixing
\`\`\`cpp
const int redPin = 9;
const int greenPin = 10;
const int bluePin = 11;

void setColor(int red, int green, int blue) {
  analogWrite(redPin, red);
  analogWrite(greenPin, green);
  analogWrite(bluePin, blue);
}

void loop() {
  setColor(255, 0, 0);    // Red
  delay(1000);
  setColor(0, 255, 0);    // Green
  delay(1000);
  setColor(0, 0, 255);    // Blue
  delay(1000);
  setColor(255, 255, 0);  // Yellow
  delay(1000);
}
\`\`\`

### Fan Speed Controller
\`\`\`cpp
const int fanPin = 6;
const int tempPin = A0;

void loop() {
  int tempReading = analogRead(tempPin);
  float voltage = (tempReading * 5.0) / 1023.0;
  float temperature = (voltage - 0.5) * 100;  // TMP36 sensor
  
  int fanSpeed = 0;
  if (temperature > 25) {
    fanSpeed = map(temperature, 25, 50, 100, 255);
    fanSpeed = constrain(fanSpeed, 0, 255);
  }
  
  analogWrite(fanPin, fanSpeed);
  delay(1000);
}
\`\`\`

## PWM Limitations and Considerations ⚠️

### Hardware Limitations
- **Limited pins**: Only 6 PWM pins on Arduino Uno
- **Shared timers**: Some pins share timers (affects frequency)
- **Current limits**: Still limited by pin current capacity (40mA)

### When PWM Isn't Suitable
- **True analog output**: Use DAC chips for precise voltages
- **High-frequency signals**: PWM frequency may be too low
- **Audio applications**: May cause audible noise

### Best Practices
- **Use appropriate drivers**: MOSFETs, motor drivers for high current
- **Filter output**: Add capacitors for smoother analog-like signals
- **Consider load characteristics**: Inductive loads need flyback diodes
- **Monitor heat**: High PWM duty cycles can cause heating

PWM is a powerful technique that bridges the gap between digital control and analog-like output!
        `,
        type: 'theory',
        xpReward: 150
      },
      {
        id: 'sensor-project',
        title: 'Project: Environmental Monitor',
        content: 'Build a comprehensive environmental monitoring system that reads temperature, light level, and controls a fan based on temperature. Use analog inputs for sensors and PWM output for fan control.',
        type: 'code',
        xpReward: 200,
        codeTemplate: `// Environmental Monitor Project
const int tempPin = A0;      // Temperature sensor (TMP36)
const int lightPin = A1;     // Light sensor (LDR)
const int fanPin = 6;        // PWM fan control
const int ledPin = 13;       // Status LED

void setup() {
  Serial.begin(9600);
  pinMode(fanPin, OUTPUT);
  pinMode(ledPin, OUTPUT);
  
  Serial.println("Environmental Monitor Started");
  Serial.println("Temp(C) | Light | Fan Speed | Status");
  Serial.println("--------|-------|----------|-------");
}

void loop() {
  // Read temperature sensor (TMP36)
  int tempReading = analogRead(tempPin);
  float voltage = (tempReading * 5.0) / 1023.0;
  float temperature = (voltage - 0.5) * 100.0;
  
  // Read light sensor (LDR)
  int lightLevel = analogRead(lightPin);
  int lightPercent = map(lightLevel, 0, 1023, 0, 100);
  
  // Control fan based on temperature
  int fanSpeed = 0;
  String status = "Cool";
  
  if (temperature > 25) {
    fanSpeed = map(temperature, 25, 40, 100, 255);
    fanSpeed = constrain(fanSpeed, 0, 255);
    status = "Warm - Fan On";
  }
  
  if (temperature > 35) {
    status = "Hot - Max Fan";
    digitalWrite(ledPin, HIGH);  // Warning LED
  } else {
    digitalWrite(ledPin, LOW);
  }
  
  // Set fan speed
  analogWrite(fanPin, fanSpeed);
  
  // Display readings
  Serial.print(temperature, 1);
  Serial.print("°C   | ");
  Serial.print(lightPercent);
  Serial.print("%    | ");
  Serial.print(map(fanSpeed, 0, 255, 0, 100));
  Serial.print("%       | ");
  Serial.println(status);
  
  delay(2000);  // Update every 2 seconds
}`,
        expectedOutput: 'Environmental data displayed with automatic fan control based on temperature'
      }
    ]
  },
  {
    id: 'communication',
    title: 'Communication Protocols',
    description: 'Master Serial, I2C, and SPI communication protocols for connecting Arduino to computers, sensors, and other devices',
    difficulty: 'advanced',
    estimatedTime: '5 hours',
    xpReward: 1000,
    category: 'Communication',
    thumbnail: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      {
        id: 'serial-communication',
        title: 'Serial Communication Mastery',
        content: `
# Serial Communication: Arduino's Gateway to the World 🌐

Serial communication is one of the most fundamental and versatile communication methods in Arduino. It enables your Arduino to talk to computers, other Arduinos, sensors, and countless other devices.

## Understanding Serial Communication

### What is Serial Communication?
Serial communication transmits data **one bit at a time** over a single wire (plus ground). While slower than parallel communication, it's simpler, uses fewer wires, and is less susceptible to interference.

### UART (Universal Asynchronous Receiver-Transmitter)
Arduino uses UART for serial communication:
- **Asynchronous**: No shared clock signal
- **Full-duplex**: Can send and receive simultaneously
- **Configurable**: Various baud rates and data formats

## Arduino Serial Hardware

### Hardware Serial (Serial)
- **Pins**: 0 (RX) and 1 (TX) on Arduino Uno
- **Built-in**: Uses dedicated UART hardware
- **USB Connection**: Automatically connected to USB port

### SoftwareSerial Library
\`\`\`cpp
#include <SoftwareSerial.h>
SoftwareSerial mySerial(2, 3);  // RX, TX pins
\`\`\`
- **Any digital pins**: Create serial on any pins
- **Multiple instances**: Have several serial connections
- **Limitations**: Lower baud rates, not full-duplex

## Basic Serial Functions

### Initialization
\`\`\`cpp
void setup() {
  Serial.begin(baudRate);  // Start serial communication
}
\`\`\`

### Common Baud Rates
| Baud Rate | Use Case |
|-----------|----------|
| **9600** | Default, debugging, simple sensors |
| **19200** | Faster debugging |
| **38400** | GPS modules, some sensors |
| **57600** | High-speed sensors |
| **115200** | Maximum for most applications |

### Sending Data
\`\`\`cpp
Serial.print("Hello");           // Send text without newline
Serial.println("World");         // Send text with newline
Serial.print(123);               // Send number
Serial.print(3.14159, 2);        // Send float with 2 decimal places
Serial.write(65);                // Send raw byte (ASCII 'A')
\`\`\`

### Receiving Data
\`\`\`cpp
if (Serial.available()) {        // Check if data available
  char incomingByte = Serial.read();     // Read single byte
  String message = Serial.readString(); // Read entire string
  int number = Serial.parseInt();        // Parse integer
  float value = Serial.parseFloat();     // Parse floating point
}
\`\`\`

## Advanced Serial Techniques

### Non-blocking Serial Reading
\`\`\`cpp
String inputString = "";
boolean stringComplete = false;

void setup() {
  Serial.begin(9600);
  inputString.reserve(200);  // Reserve memory for string
}

void loop() {
  // Non-blocking serial processing
  if (stringComplete) {
    processCommand(inputString);
    inputString = "";
    stringComplete = false;
  }
  
  // Other code continues to run
  doOtherTasks();
}

void serialEvent() {
  while (Serial.available()) {
    char inChar = (char)Serial.read();
    inputString += inChar;
    
    if (inChar == '\\n') {
      stringComplete = true;
    }
  }
}
\`\`\`

### Command Parser
\`\`\`cpp
void processCommand(String command) {
  command.trim();  // Remove whitespace
  
  if (command.startsWith("LED")) {
    String state = command.substring(4);
    if (state == "ON") {
      digitalWrite(13, HIGH);
      Serial.println("LED turned ON");
    } else if (state == "OFF") {
      digitalWrite(13, LOW);
      Serial.println("LED turned OFF");
    }
  }
  else if (command.startsWith("READ")) {
    String pin = command.substring(5);
    int pinNum = pin.toInt();
    int value = digitalRead(pinNum);
    Serial.print("Pin ");
    Serial.print(pinNum);
    Serial.print(" = ");
    Serial.println(value);
  }
  else {
    Serial.println("Unknown command");
  }
}
\`\`\`

## Serial Communication Protocols

### Custom Protocol Design
\`\`\`cpp
// Protocol: <COMMAND>:<VALUE>\\n
// Examples: TEMP:25.6, LED:1, MOTOR:150

void sendSensorData(float temperature, int humidity) {
  Serial.print("TEMP:");
  Serial.println(temperature, 1);
  Serial.print("HUMID:");
  Serial.println(humidity);
}

void parseIncomingData() {
  if (Serial.available()) {
    String data = Serial.readStringUntil('\\n');
    int colonIndex = data.indexOf(':');
    
    if (colonIndex > 0) {
      String command = data.substring(0, colonIndex);
      String value = data.substring(colonIndex + 1);
      
      executeCommand(command, value);
    }
  }
}
\`\`\`

### JSON Communication
\`\`\`cpp
void sendJSONData(float temp, int light, bool motion) {
  Serial.print("{");
  Serial.print("\\"temperature\\":");
  Serial.print(temp, 1);
  Serial.print(",\\"light\\":");
  Serial.print(light);
  Serial.print(",\\"motion\\":");
  Serial.print(motion ? "true" : "false");
  Serial.println("}");
}
\`\`\`

## Arduino-to-Arduino Communication

### Master-Slave Setup
\`\`\`cpp
// Master Arduino
void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println("GET_TEMP");  // Request temperature
  
  if (Serial.available()) {
    float temperature = Serial.parseFloat();
    Serial.print("Received temperature: ");
    Serial.println(temperature);
  }
  
  delay(1000);
}

// Slave Arduino
void setup() {
  Serial.begin(9600);
}

void loop() {
  if (Serial.available()) {
    String command = Serial.readString();
    command.trim();
    
    if (command == "GET_TEMP") {
      float temp = readTemperature();  // Your sensor reading function
      Serial.println(temp);
    }
  }
}
\`\`\`

## Serial Debugging Techniques

### Debug Macros
\`\`\`cpp
#define DEBUG 1

#if DEBUG
  #define DEBUG_PRINT(x) Serial.print(x)
  #define DEBUG_PRINTLN(x) Serial.println(x)
#else
  #define DEBUG_PRINT(x)
  #define DEBUG_PRINTLN(x)
#endif

void loop() {
  int sensorValue = analogRead(A0);
  DEBUG_PRINT("Sensor reading: ");
  DEBUG_PRINTLN(sensorValue);
  
  // Debug output only appears when DEBUG is 1
}
\`\`\`

### Performance Monitoring
\`\`\`cpp
void benchmarkFunction() {
  unsigned long startTime = micros();
  
  // Your code to benchmark
  complexCalculation();
  
  unsigned long endTime = micros();
  Serial.print("Execution time: ");
  Serial.print(endTime - startTime);
  Serial.println(" microseconds");
}
\`\`\`

## Troubleshooting Serial Communication 🔧

### Common Issues
1. **Wrong baud rate**: Ensure both ends use same rate
2. **Missing newlines**: Use println() or add \\n
3. **Buffer overflow**: Process data quickly or increase buffer
4. **Electrical noise**: Use proper grounding and shielding

### Serial Monitor Tips
- **Line ending settings**: Match your code expectations
- **Baud rate selection**: Must match your Serial.begin()
- **Autoscroll**: Keep latest data visible
- **Timestamp**: Enable for timing analysis

### Hardware Debugging
\`\`\`cpp
void serialDiagnostics() {
  Serial.println("=== Serial Diagnostics ===");
  Serial.print("Available bytes: ");
  Serial.println(Serial.available());
  Serial.print("Baud rate: ");
  Serial.println(9600);  // Your configured rate
  Serial.println("========================");
}
\`\`\`

## Real-World Applications

### Data Logging
\`\`\`cpp
void logSensorData() {
  unsigned long timestamp = millis();
  float temperature = readTemperature();
  int humidity = readHumidity();
  
  Serial.print(timestamp);
  Serial.print(",");
  Serial.print(temperature, 2);
  Serial.print(",");
  Serial.println(humidity);
}
\`\`\`

### Remote Control Interface
\`\`\`cpp
void handleRemoteCommands() {
  if (Serial.available()) {
    String command = Serial.readStringUntil('\\n');
    
    if (command == "STATUS") {
      reportSystemStatus();
    } else if (command.startsWith("MOVE")) {
      int distance = command.substring(5).toInt();
      moveRobot(distance);
    } else if (command == "STOP") {
      emergencyStop();
    }
  }
}
\`\`\`

Serial communication is your Arduino's voice - master it to create sophisticated, connected projects!
        `,
        type: 'theory',
        xpReward: 150
      },
      {
        id: 'i2c-communication',
        title: 'I2C Protocol Deep Dive',
        content: `
# I2C: The Multi-Device Communication Highway 🛣️

Inter-Integrated Circuit (I2C) is a synchronous, multi-master, multi-slave communication protocol that allows multiple devices to communicate over just two wires. It's perfect for connecting sensors, displays, and other peripherals to your Arduino.

## I2C Fundamentals

### Key Characteristics
- **Two-wire interface**: SDA (data) and SCL (clock)
- **Multi-device**: Up to 127 devices on one bus
- **Addressable**: Each device has a unique 7-bit address
- **Synchronous**: Clock signal coordinates data transfer
- **Bidirectional**: Same wires for sending and receiving

### Arduino I2C Pins
| Board | SDA Pin | SCL Pin |
|-------|---------|---------|
| **Uno/Nano** | A4 | A5 |
| **Mega** | 20 | 21 |
| **Leonardo** | 2 | 3 |
| **ESP32** | 21 | 22 (configurable) |

## I2C Protocol Basics

### Communication Flow
1. **Start Condition**: Master pulls SDA low while SCL is high
2. **Address Frame**: 7-bit device address + R/W bit
3. **Acknowledge**: Slave pulls SDA low to confirm
4. **Data Frames**: 8-bit data packets with ACK/NACK
5. **Stop Condition**: Master releases SDA while SCL is high

### Wire Library Functions
\`\`\`cpp
#include <Wire.h>

// Master functions
Wire.begin();                    // Initialize as master
Wire.beginTransmission(address); // Start communication
Wire.write(data);                // Send data
Wire.endTransmission();          // End communication
Wire.requestFrom(address, bytes); // Request data
Wire.available();                // Check received data
Wire.read();                     // Read received data

// Slave functions
Wire.begin(address);             // Initialize as slave
Wire.onReceive(handler);         // Set receive handler
Wire.onRequest(handler);         // Set request handler
\`\`\`

## I2C Master Examples

### Basic Master Write
\`\`\`cpp
#include <Wire.h>

void setup() {
  Wire.begin();        // Initialize I2C as master
  Serial.begin(9600);
}

void loop() {
  Wire.beginTransmission(8);  // Address slave device 8
  Wire.write("Hello");        // Send message
  Wire.endTransmission();     // Complete transmission
  
  Serial.println("Message sent to slave");
  delay(1000);
}
\`\`\`

### Master Read Example
\`\`\`cpp
#include <Wire.h>

void setup() {
  Wire.begin();
  Serial.begin(9600);
}

void loop() {
  Wire.requestFrom(8, 6);    // Request 6 bytes from slave 8
  
  String received = "";
  while (Wire.available()) {
    char c = Wire.read();
    received += c;
  }
  
  Serial.print("Received: ");
  Serial.println(received);
  delay(1000);
}
\`\`\`

### Advanced Master Communication
\`\`\`cpp
#include <Wire.h>

void setup() {
  Wire.begin();
  Serial.begin(9600);
}

void sendCommand(int address, byte command, int value) {
  Wire.beginTransmission(address);
  Wire.write(command);           // Command byte
  Wire.write(value >> 8);        // High byte
  Wire.write(value & 0xFF);      // Low byte
  byte error = Wire.endTransmission();
  
  if (error == 0) {
    Serial.println("Command sent successfully");
  } else {
    Serial.print("Error: ");
    Serial.println(error);
  }
}

int readSensor(int address, byte register_addr) {
  Wire.beginTransmission(address);
  Wire.write(register_addr);
  Wire.endTransmission(false);   // Repeated start
  
  Wire.requestFrom(address, 2);
  if (Wire.available() >= 2) {
    int highByte = Wire.read();
    int lowByte = Wire.read();
    return (highByte << 8) | lowByte;
  }
  return -1;  // Error
}
\`\`\`

## I2C Slave Examples

### Basic Slave Receiver
\`\`\`cpp
#include <Wire.h>

void setup() {
  Wire.begin(8);              // Initialize as slave with address 8
  Wire.onReceive(receiveEvent); // Register receive handler
  Serial.begin(9600);
}

void loop() {
  delay(100);  // Main loop can do other tasks
}

void receiveEvent(int bytes) {
  String message = "";
  while (Wire.available()) {
    char c = Wire.read();
    message += c;
  }
  
  Serial.print("Received: ");
  Serial.println(message);
}
\`\`\`

### Slave Transmitter
\`\`\`cpp
#include <Wire.h>

int sensorValue = 0;

void setup() {
  Wire.begin(8);              // Slave address 8
  Wire.onRequest(requestEvent); // Register request handler
  Serial.begin(9600);
}

void loop() {
  sensorValue = analogRead(A0);  // Update sensor reading
  delay(100);
}

void requestEvent() {
  // Send sensor data when master requests
  Wire.write(sensorValue >> 8);    // High byte
  Wire.write(sensorValue & 0xFF);  // Low byte
}
\`\`\`

## Common I2C Devices and Libraries

### LCD Display (PCF8574 I2C Backpack)
\`\`\`cpp
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);  // Address, columns, rows

void setup() {
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("Hello, I2C!");
}
\`\`\`

### Real-Time Clock (DS3231)
\`\`\`cpp
#include <Wire.h>
#include <RTClib.h>

RTC_DS3231 rtc;

void setup() {
  Serial.begin(9600);
  
  if (!rtc.begin()) {
    Serial.println("RTC not found!");
    while (1);
  }
  
  // Set time if needed
  // rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));
}

void loop() {
  DateTime now = rtc.now();
  
  Serial.print(now.year());
  Serial.print('/');
  Serial.print(now.month());
  Serial.print('/');
  Serial.print(now.day());
  Serial.print(' ');
  Serial.print(now.hour());
  Serial.print(':');
  Serial.print(now.minute());
  Serial.print(':');
  Serial.println(now.second());
  
  delay(1000);
}
\`\`\`

### EEPROM Memory (24LC256)
\`\`\`cpp
#include <Wire.h>

const int EEPROM_ADDR = 0x50;

void writeEEPROM(int address, byte data) {
  Wire.beginTransmission(EEPROM_ADDR);
  Wire.write(address >> 8);    // High address byte
  Wire.write(address & 0xFF);  // Low address byte
  Wire.write(data);
  Wire.endTransmission();
  delay(5);  // Write cycle time
}

byte readEEPROM(int address) {
  Wire.beginTransmission(EEPROM_ADDR);
  Wire.write(address >> 8);
  Wire.write(address & 0xFF);
  Wire.endTransmission();
  
  Wire.requestFrom(EEPROM_ADDR, 1);
  if (Wire.available()) {
    return Wire.read();
  }
  return 0;
}
\`\`\`

## I2C Scanner and Debugging

### Device Scanner
\`\`\`cpp
#include <Wire.h>

void setup() {
  Wire.begin();
  Serial.begin(9600);
  Serial.println("I2C Scanner");
  Serial.println("Scanning...");
  
  int deviceCount = 0;
  for (byte address = 1; address < 127; address++) {
    Wire.beginTransmission(address);
    byte error = Wire.endTransmission();
    
    if (error == 0) {
      Serial.print("Device found at address 0x");
      if (address < 16) Serial.print("0");
      Serial.println(address, HEX);
      deviceCount++;
    }
  }
  
  if (deviceCount == 0) {
    Serial.println("No I2C devices found");
  } else {
    Serial.print("Found ");
    Serial.print(deviceCount);
    Serial.println(" devices");
  }
}

void loop() {}
\`\`\`

### Error Handling
\`\`\`cpp
void checkI2CError(byte error) {
  switch (error) {
    case 0:
      Serial.println("Success");
      break;
    case 1:
      Serial.println("Data too long for buffer");
      break;
    case 2:
      Serial.println("NACK on address");
      break;
    case 3:
      Serial.println("NACK on data");
      break;
    case 4:
      Serial.println("Other error");
      break;
    default:
      Serial.println("Unknown error");
  }
}
\`\`\`

## Advanced I2C Concepts

### Pull-up Resistors
- **Required**: SDA and SCL lines need pull-up resistors
- **Typical values**: 4.7kΩ for 5V, 2.2kΩ for 3.3V
- **Built-in**: Some boards have internal pull-ups

### Clock Speed Configuration
\`\`\`cpp
void setup() {
  Wire.begin();
  Wire.setClock(400000);  // Set to 400kHz (Fast Mode)
  // Standard: 100kHz, Fast: 400kHz, Fast+: 1MHz
}
\`\`\`

### Multi-Master Considerations
\`\`\`cpp
// Handle bus arbitration
void safeMasterWrite(int address, byte data) {
  Wire.beginTransmission(address);
  Wire.write(data);
  byte error = Wire.endTransmission();
  
  if (error == 2) {
    // Address NACK - device not responding
    Serial.println("Device not found");
  } else if (error == 4) {
    // Other error - possibly bus collision
    delay(random(10, 50));  // Random backoff
    // Retry transmission
  }
}
\`\`\`

## Troubleshooting I2C Issues 🔧

### Common Problems
1. **Missing pull-up resistors**: SDA/SCL float
2. **Wrong address**: Device not responding
3. **Bus lockup**: One device holds line low
4. **Timing issues**: Clock too fast for device
5. **Power supply**: Insufficient or noisy power

### Debugging Techniques
\`\`\`cpp
void i2cDiagnostics() {
  Serial.println("=== I2C Diagnostics ===");
  
  // Check if pins are pulled high
  pinMode(A4, INPUT);  // SDA
  pinMode(A5, INPUT);  // SCL
  
  Serial.print("SDA level: ");
  Serial.println(digitalRead(A4) ? "HIGH" : "LOW");
  Serial.print("SCL level: ");
  Serial.println(digitalRead(A5) ? "HIGH" : "LOW");
  
  Wire.begin();  // Reinitialize
}
\`\`\`

I2C opens up a world of sensors and peripherals with minimal wiring complexity!
        `,
        type: 'theory',
        xpReward: 175
      }
    ]
  },
  {
    id: 'advanced-projects',
    title: 'Advanced Arduino Projects',
    description: 'Build complex, real-world projects combining multiple sensors, actuators, and communication protocols',
    difficulty: 'advanced',
    estimatedTime: '6 hours',
    xpReward: 1250,
    category: 'Projects',
    thumbnail: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      {
        id: 'iot-weather-station',
        title: 'IoT Weather Station',
        content: `
# Building an IoT Weather Station 🌤️

Create a comprehensive weather monitoring system that collects environmental data, displays it locally, and can transmit data to the cloud for remote monitoring.

## Project Overview

### Features
- **Multi-sensor data collection**: Temperature, humidity, pressure, light
- **Local display**: LCD screen with real-time readings
- **Data logging**: Store readings to SD card
- **Wireless connectivity**: WiFi for IoT integration
- **Web interface**: Access data remotely
- **Alert system**: Notifications for extreme conditions

### Components Required
- Arduino Uno or ESP32
- DHT22 (Temperature & Humidity)
- BMP280 (Pressure & Altitude)
- LDR (Light sensor)
- 16x2 LCD with I2C backpack
- SD card module
- Real-time clock (DS3231)
- Buzzer for alerts
- LEDs for status indication

## Hardware Connections

### Sensor Wiring
\`\`\`
DHT22:
- VCC → 5V
- GND → GND
- DATA → Pin 2

BMP280 (I2C):
- VCC → 3.3V
- GND → GND
- SDA → A4
- SCL → A5

LCD (I2C):
- VCC → 5V
- GND → GND
- SDA → A4
- SCL → A5

SD Card Module:
- VCC → 5V
- GND → GND
- MISO → Pin 12
- MOSI → Pin 11
- SCK → Pin 13
- CS → Pin 10
\`\`\`

## Complete Weather Station Code

\`\`\`cpp
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <DHT.h>
#include <Adafruit_BMP280.h>
#include <RTClib.h>
#include <SD.h>
#include <SPI.h>

// Pin definitions
#define DHT_PIN 2
#define DHT_TYPE DHT22
#define LDR_PIN A0
#define BUZZER_PIN 8
#define LED_STATUS 7
#define LED_ALERT 6
#define SD_CS_PIN 10

// Sensor objects
DHT dht(DHT_PIN, DHT_TYPE);
Adafruit_BMP280 bmp;
RTC_DS3231 rtc;
LiquidCrystal_I2C lcd(0x27, 16, 2);

// Data structure
struct WeatherData {
  float temperature;
  float humidity;
  float pressure;
  float altitude;
  int lightLevel;
  DateTime timestamp;
};

// Global variables
WeatherData currentReading;
unsigned long lastReading = 0;
unsigned long lastDisplay = 0;
unsigned long lastLog = 0;
const unsigned long READING_INTERVAL = 5000;   // 5 seconds
const unsigned long DISPLAY_INTERVAL = 2000;   // 2 seconds
const unsigned long LOG_INTERVAL = 60000;      // 1 minute

// Alert thresholds
const float TEMP_HIGH = 35.0;
const float TEMP_LOW = 0.0;
const float HUMIDITY_HIGH = 80.0;
const float PRESSURE_LOW = 1000.0;

void setup() {
  Serial.begin(9600);
  
  // Initialize pins
  pinMode(LED_STATUS, OUTPUT);
  pinMode(LED_ALERT, OUTPUT);
  pinMode(BUZZER_PIN, OUTPUT);
  
  // Initialize I2C devices
  Wire.begin();
  lcd.init();
  lcd.backlight();
  
  // Initialize sensors
  dht.begin();
  
  if (!bmp.begin()) {
    Serial.println("BMP280 sensor not found!");
    lcd.setCursor(0, 0);
    lcd.print("BMP280 Error!");
    while (1);
  }
  
  if (!rtc.begin()) {
    Serial.println("RTC not found!");
    lcd.setCursor(0, 0);
    lcd.print("RTC Error!");
    while (1);
  }
  
  // Initialize SD card
  if (!SD.begin(SD_CS_PIN)) {
    Serial.println("SD card initialization failed!");
    lcd.setCursor(0, 0);
    lcd.print("SD Card Error!");
    delay(2000);
  }
  
  // Create header in log file
  File logFile = SD.open("weather.csv", FILE_WRITE);
  if (logFile) {
    logFile.println("Timestamp,Temperature,Humidity,Pressure,Altitude,Light");
    logFile.close();
  }
  
  // Startup message
  lcd.setCursor(0, 0);
  lcd.print("Weather Station");
  lcd.setCursor(0, 1);
  lcd.print("Initializing...");
  delay(2000);
  
  digitalWrite(LED_STATUS, HIGH);
  Serial.println("Weather Station Ready!");
}

void loop() {
  unsigned long currentTime = millis();
  
  // Read sensors
  if (currentTime - lastReading >= READING_INTERVAL) {
    readSensors();
    checkAlerts();
    lastReading = currentTime;
  }
  
  // Update display
  if (currentTime - lastDisplay >= DISPLAY_INTERVAL) {
    updateDisplay();
    lastDisplay = currentTime;
  }
  
  // Log data
  if (currentTime - lastLog >= LOG_INTERVAL) {
    logData();
    lastLog = currentTime;
  }
  
  // Handle serial commands
  handleSerialCommands();
}

void readSensors() {
  // Read DHT22
  currentReading.temperature = dht.readTemperature();
  currentReading.humidity = dht.readHumidity();
  
  // Read BMP280
  currentReading.pressure = bmp.readPressure() / 100.0F; // Convert to hPa
  currentReading.altitude = bmp.readAltitude(1013.25);   // Sea level pressure
  
  // Read light sensor
  int rawLight = analogRead(LDR_PIN);
  currentReading.lightLevel = map(rawLight, 0, 1023, 0, 100);
  
  // Get timestamp
  currentReading.timestamp = rtc.now();
  
  // Print to serial
  printSensorData();
}

void printSensorData() {
  Serial.println("=== Weather Reading ===");
  Serial.print("Time: ");
  Serial.println(currentReading.timestamp.timestamp());
  Serial.print("Temperature: ");
  Serial.print(currentReading.temperature, 1);
  Serial.println("°C");
  Serial.print("Humidity: ");
  Serial.print(currentReading.humidity, 1);
  Serial.println("%");
  Serial.print("Pressure: ");
  Serial.print(currentReading.pressure, 1);
  Serial.println(" hPa");
  Serial.print("Altitude: ");
  Serial.print(currentReading.altitude, 1);
  Serial.println(" m");
  Serial.print("Light: ");
  Serial.print(currentReading.lightLevel);
  Serial.println("%");
  Serial.println();
}

void updateDisplay() {
  static int displayMode = 0;
  
  lcd.clear();
  
  switch (displayMode) {
    case 0: // Temperature and Humidity
      lcd.setCursor(0, 0);
      lcd.print("Temp: ");
      lcd.print(currentReading.temperature, 1);
      lcd.print("C");
      lcd.setCursor(0, 1);
      lcd.print("Humid: ");
      lcd.print(currentReading.humidity, 1);
      lcd.print("%");
      break;
      
    case 1: // Pressure and Altitude
      lcd.setCursor(0, 0);
      lcd.print("Press: ");
      lcd.print(currentReading.pressure, 0);
      lcd.print("hPa");
      lcd.setCursor(0, 1);
      lcd.print("Alt: ");
      lcd.print(currentReading.altitude, 0);
      lcd.print("m");
      break;
      
    case 2: // Light and Time
      lcd.setCursor(0, 0);
      lcd.print("Light: ");
      lcd.print(currentReading.lightLevel);
      lcd.print("%");
      lcd.setCursor(0, 1);
      lcd.print(currentReading.timestamp.hour());
      lcd.print(":");
      if (currentReading.timestamp.minute() < 10) lcd.print("0");
      lcd.print(currentReading.timestamp.minute());
      lcd.print(":");
      if (currentReading.timestamp.second() < 10) lcd.print("0");
      lcd.print(currentReading.timestamp.second());
      break;
  }
  
  displayMode = (displayMode + 1) % 3;
}

void checkAlerts() {
  bool alertActive = false;
  
  // Temperature alerts
  if (currentReading.temperature > TEMP_HIGH || currentReading.temperature < TEMP_LOW) {
    alertActive = true;
    Serial.println("ALERT: Temperature out of range!");
  }
  
  // Humidity alert
  if (currentReading.humidity > HUMIDITY_HIGH) {
    alertActive = true;
    Serial.println("ALERT: High humidity!");
  }
  
  // Pressure alert
  if (currentReading.pressure < PRESSURE_LOW) {
    alertActive = true;
    Serial.println("ALERT: Low pressure - storm approaching!");
  }
  
  // Control alert LED and buzzer
  if (alertActive) {
    digitalWrite(LED_ALERT, HIGH);
    tone(BUZZER_PIN, 1000, 200);
  } else {
    digitalWrite(LED_ALERT, LOW);
  }
}

void logData() {
  File logFile = SD.open("weather.csv", FILE_WRITE);
  if (logFile) {
    // Write timestamp
    logFile.print(currentReading.timestamp.timestamp());
    logFile.print(",");
    
    // Write sensor data
    logFile.print(currentReading.temperature, 2);
    logFile.print(",");
    logFile.print(currentReading.humidity, 2);
    logFile.print(",");
    logFile.print(currentReading.pressure, 2);
    logFile.print(",");
    logFile.print(currentReading.altitude, 2);
    logFile.print(",");
    logFile.println(currentReading.lightLevel);
    
    logFile.close();
    Serial.println("Data logged to SD card");
  } else {
    Serial.println("Error opening log file");
  }
}

void handleSerialCommands() {
  if (Serial.available()) {
    String command = Serial.readStringUntil('\\n');
    command.trim();
    
    if (command == "STATUS") {
      printSensorData();
    } else if (command == "RESET") {
      // Reset min/max values or clear logs
      Serial.println("System reset");
    } else if (command == "CALIBRATE") {
      // Calibration routine
      Serial.println("Starting calibration...");
    } else if (command.startsWith("SET_TIME")) {
      // Set RTC time
      Serial.println("Time setting not implemented");
    } else {
      Serial.println("Unknown command. Available: STATUS, RESET, CALIBRATE, SET_TIME");
    }
  }
}
\`\`\`

## Advanced Features

### Data Analysis
\`\`\`cpp
struct Statistics {
  float minTemp, maxTemp, avgTemp;
  float minHumidity, maxHumidity, avgHumidity;
  float minPressure, maxPressure, avgPressure;
  int sampleCount;
};

Statistics dailyStats;

void updateStatistics() {
  if (dailyStats.sampleCount == 0) {
    // First reading of the day
    dailyStats.minTemp = dailyStats.maxTemp = dailyStats.avgTemp = currentReading.temperature;
    dailyStats.minHumidity = dailyStats.maxHumidity = dailyStats.avgHumidity = currentReading.humidity;
    dailyStats.minPressure = dailyStats.maxPressure = dailyStats.avgPressure = currentReading.pressure;
    dailyStats.sampleCount = 1;
  } else {
    // Update min/max
    dailyStats.minTemp = min(dailyStats.minTemp, currentReading.temperature);
    dailyStats.maxTemp = max(dailyStats.maxTemp, currentReading.temperature);
    
    // Update running averages
    dailyStats.avgTemp = (dailyStats.avgTemp * dailyStats.sampleCount + currentReading.temperature) / (dailyStats.sampleCount + 1);
    dailyStats.avgHumidity = (dailyStats.avgHumidity * dailyStats.sampleCount + currentReading.humidity) / (dailyStats.sampleCount + 1);
    dailyStats.avgPressure = (dailyStats.avgPressure * dailyStats.sampleCount + currentReading.pressure) / (dailyStats.sampleCount + 1);
    
    dailyStats.sampleCount++;
  }
}
\`\`\`

### Weather Prediction
\`\`\`cpp
enum WeatherTrend {
  STABLE,
  IMPROVING,
  DETERIORATING
};

WeatherTrend predictWeather() {
  static float pressureHistory[5];
  static int historyIndex = 0;
  static bool historyFull = false;
  
  // Store current pressure
  pressureHistory[historyIndex] = currentReading.pressure;
  historyIndex = (historyIndex + 1) % 5;
  
  if (historyIndex == 0) historyFull = true;
  
  if (!historyFull) return STABLE;
  
  // Calculate pressure trend
  float trend = 0;
  for (int i = 0; i < 4; i++) {
    int current = (historyIndex + i) % 5;
    int next = (historyIndex + i + 1) % 5;
    trend += pressureHistory[next] - pressureHistory[current];
  }
  
  if (trend > 2.0) return IMPROVING;
  else if (trend < -2.0) return DETERIORATING;
  else return STABLE;
}
\`\`\`

This weather station project demonstrates integration of multiple sensors, data logging, real-time display, and alert systems - essential skills for IoT development!
        `,
        type: 'theory',
        xpReward: 200
      }
    ]
  }
]