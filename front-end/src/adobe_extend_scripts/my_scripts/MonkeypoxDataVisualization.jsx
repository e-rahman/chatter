var doc = app.activeDocument;
var p = doc.pathItems;

// The width and height (in pixels) of my Adobe Illustrator document margins
var inWidth = 612;
var inHeight = 792;

var margin = 0;

// Create layers for each circle for Day 1
// Create first layer - each layer represents a certain sentiment
var Layer1 = doc.layers.add();
Layer1.name = "Circle 1";

// Define the fill colors
var fillColor = new RGBColor();
fillColor.red = 147;
fillColor.green = 66;
fillColor.blue = 245;

// Set the circle's position and dimensions
var ellipse = Layer1.pathItems.ellipse(-50, 50, 50, 50);
ellipse.fillColor = fillColor;
ellipse.fill = true;

// Create second layer - each layer represents a certain sentiment
var Layer2 = doc.layers.add();
Layer2.name = "Circle 2";

var fillColor = new RGBColor();
fillColor.red = 245;
fillColor.green = 66;
fillColor.blue = 99;

var ellipse = Layer2.pathItems.ellipse(-50, 150, 75, 75);
ellipse.fillColor = fillColor;
ellipse.fill = true;

// Create third layer - each layer represents a certain sentiment
var Layer3 = doc.layers.add();
Layer3.name = "Circle 3";

var fillColor = new RGBColor();
fillColor.red = 66;
fillColor.green = 221;
fillColor.blue = 245;

var ellipse = Layer3.pathItems.ellipse(-50, 250, 10, 10);
ellipse.fillColor = fillColor;
ellipse.fill = true;

// Create fourth layer - each layer represents a certain sentiment
var Layer4 = doc.layers.add();
Layer4.name = "Circle 4";

var fillColor = new RGBColor();
fillColor.red = 245;
fillColor.green = 66;
fillColor.blue = 212;

var ellipse = Layer4.pathItems.ellipse(-50, 350, 100, 100);
ellipse.fillColor = fillColor;
ellipse.fill = true;

// Create fifth layer - each layer represents a certain sentiment
var Layer5 = doc.layers.add();
Layer5.name = "Circle 5";

var fillColor = new RGBColor();
fillColor.red = 66;
fillColor.green = 135;
fillColor.blue = 245;

var ellipse = Layer5.pathItems.ellipse(-50, 450, 35, 35);
ellipse.fillColor = fillColor;
ellipse.fill = true;

// Create layers for each circle for Day 2
var Layer6 = doc.layers.add();
Layer6.name = "Circle 6";

var fillColor = new RGBColor();
fillColor.red = 147;
fillColor.green = 66;
fillColor.blue = 245;

var ellipse = Layer6.pathItems.ellipse(-150, 50, 90, 90);
ellipse.fillColor = fillColor;
ellipse.fill = true;

var Layer7 = doc.layers.add();
Layer7.name = "Circle 7";

var fillColor = new RGBColor();
fillColor.red = 245;
fillColor.green = 66;
fillColor.blue = 99;

var ellipse = Layer7.pathItems.ellipse(-150, 150, 60, 60);
ellipse.fillColor = fillColor;
ellipse.fill = true;

var Layer8 = doc.layers.add();
Layer8.name = "Circle 8";

var fillColor = new RGBColor();
fillColor.red = 66;
fillColor.green = 221;
fillColor.blue = 245;

var ellipse = Layer8.pathItems.ellipse(-150, 250, 40, 40);
ellipse.fillColor = fillColor;
ellipse.fill = true;

var Layer9 = doc.layers.add();
Layer9.name = "Circle 9";

var fillColor = new RGBColor();
fillColor.red = 245;
fillColor.green = 66;
fillColor.blue = 212;

var ellipse = Layer9.pathItems.ellipse(-150, 350, 20, 20);
ellipse.fillColor = fillColor;
ellipse.fill = true;

var Layer10 = doc.layers.add();
Layer10.name = "Circle 10";

var fillColor = new RGBColor();
fillColor.red = 66;
fillColor.green = 135;
fillColor.blue = 245;

var ellipse = Layer10.pathItems.ellipse(-150, 450, 90, 90);
ellipse.fillColor = fillColor;
ellipse.fill = true;

var Layer11 = doc.layers.add();
Layer11.name = "Circle 11";

var fillColor = new RGBColor();
fillColor.red = 147;
fillColor.green = 66;
fillColor.blue = 245;

var ellipse = Layer11.pathItems.ellipse(-250, 50, 90, 90);
ellipse.fillColor = fillColor;
ellipse.fill = true;

var Layer12 = doc.layers.add();
Layer12.name = "Circle 12";

var fillColor = new RGBColor();
fillColor.red = 245;
fillColor.green = 66;
fillColor.blue = 99;

var ellipse = Layer12.pathItems.ellipse(-250, 150, 60, 60);
ellipse.fillColor = fillColor;
ellipse.fill = true;

var Layer13 = doc.layers.add();
Layer13.name = "Circle 13";

var fillColor = new RGBColor();
fillColor.red = 66;
fillColor.green = 221;
fillColor.blue = 245;

var ellipse = Layer13.pathItems.ellipse(-250, 250, 40, 40);
ellipse.fillColor = fillColor;
ellipse.fill = true;

var Layer14 = doc.layers.add();
Layer14.name = "Circle 14";

var fillColor = new RGBColor();
fillColor.red = 245;
fillColor.green = 66;
fillColor.blue = 212;

var ellipse = Layer14.pathItems.ellipse(-250, 350, 20, 20);
ellipse.fillColor = fillColor;
ellipse.fill = true;

var Layer15 = doc.layers.add();
Layer15.name = "Circle 15";

var fillColor = new RGBColor();
fillColor.red = 66;
fillColor.green = 135;
fillColor.blue = 245;

var ellipse = Layer15.pathItems.ellipse(-250, 450, 90, 90);
ellipse.fillColor = fillColor;
ellipse.fill = true;

// Create layers for each circle for Day 4
var Layer16 = doc.layers.add();
Layer16.name = "Circle 16";

var fillColor = new RGBColor();
fillColor.red = 147;
fillColor.green = 66;
fillColor.blue = 245;

var ellipse = Layer16.pathItems.ellipse(-350, 50, 90, 90);
ellipse.fillColor = fillColor;
ellipse.fill = true;

var Layer17 = doc.layers.add();
Layer17.name = "Circle 17";

var fillColor = new RGBColor();
fillColor.red = 245;
fillColor.green = 66;
fillColor.blue = 99;

var ellipse = Layer17.pathItems.ellipse(-350, 150, 60, 60);
ellipse.fillColor = fillColor;
ellipse.fill = true;

var Layer18 = doc.layers.add();
Layer18.name = "Circle 18";

var fillColor = new RGBColor();
fillColor.red = 66;
fillColor.green = 221;
fillColor.blue = 245;

var ellipse = Layer18.pathItems.ellipse(-350, 250, 40, 40);
ellipse.fillColor = fillColor;
ellipse.fill = true;

var Layer19 = doc.layers.add();
Layer19.name = "Circle 19";

var fillColor = new RGBColor();
fillColor.red = 245;
fillColor.green = 66;
fillColor.blue = 212;

var ellipse = Layer19.pathItems.ellipse(-350, 350, 20, 20);
ellipse.fillColor = fillColor;
ellipse.fill = true;

var Layer20 = doc.layers.add();
Layer20.name = "Circle 20";

var fillColor = new RGBColor();
fillColor.red = 66;
fillColor.green = 135;
fillColor.blue = 245;

var ellipse = Layer20.pathItems.ellipse(-350, 450, 90, 90);
ellipse.fillColor = fillColor;
ellipse.fill = true;

// Create layers for each circle for Day 5
var Layer21 = doc.layers.add();
Layer21.name = "Circle 21";

var fillColor = new RGBColor();
fillColor.red = 147;
fillColor.green = 66;
fillColor.blue = 245;

var ellipse = Layer21.pathItems.ellipse(-450, 50, 90, 90);
ellipse.fillColor = fillColor;
ellipse.fill = true;

var Layer22 = doc.layers.add();
Layer22.name = "Circle 22";

var fillColor = new RGBColor();
fillColor.red = 245;
fillColor.green = 66;
fillColor.blue = 99;

var ellipse = Layer22.pathItems.ellipse(-450, 150, 60, 60);
ellipse.fillColor = fillColor;
ellipse.fill = true;

var Layer23 = doc.layers.add();
Layer23.name = "Circle 23";

var fillColor = new RGBColor();
fillColor.red = 66;
fillColor.green = 221;
fillColor.blue = 245;

var ellipse = Layer23.pathItems.ellipse(-450, 250, 40, 40);
ellipse.fillColor = fillColor;
ellipse.fill = true;

var Layer24 = doc.layers.add();
Layer24.name = "Circle 24";

var fillColor = new RGBColor();
fillColor.red = 245;
fillColor.green = 66;
fillColor.blue = 212;

var ellipse = Layer24.pathItems.ellipse(-450, 350, 20, 20);
ellipse.fillColor = fillColor;
ellipse.fill = true;

var Layer25 = doc.layers.add();
Layer25.name = "Circle 25";

var fillColor = new RGBColor();
fillColor.red = 66;
fillColor.green = 135;
fillColor.blue = 245;

var ellipse = Layer25.pathItems.ellipse(-450, 450, 90, 90);
ellipse.fillColor = fillColor;
ellipse.fill = true;

// Add circle legend
// Joy 
var Layer26 = doc.layers.add();
Layer26.name = "Circle 26";

var fillColor = new RGBColor();
fillColor.red = 66;
fillColor.green = 221;
fillColor.blue = 245;

var ellipse = Layer26.pathItems.rectangle(-700, 400, 20, 20);
ellipse.fillColor = fillColor;
ellipse.fill = true;

// Sadness 
var Layer27 = doc.layers.add();
Layer27.name = "Circle 27";

var fillColor = new RGBColor();
fillColor.red = 66;
fillColor.green = 135;
fillColor.blue = 245;

var ellipse = Layer27.pathItems.rectangle(-700, 435, 20, 20);
ellipse.fillColor = fillColor;
ellipse.fill = true;

// Disgust 
var Layer28 = doc.layers.add();
Layer28.name = "Circle 28";

var fillColor = new RGBColor();
fillColor.red = 147;
fillColor.green = 66;
fillColor.blue = 245;

var ellipse = Layer28.pathItems.rectangle(-700, 470, 20, 20);
ellipse.fillColor = fillColor;
ellipse.fill = true;

// Fear 
var Layer29 = doc.layers.add();
Layer29.name = "Circle 29";

var fillColor = new RGBColor();
fillColor.red = 245;
fillColor.green = 66;
fillColor.blue = 212;

var ellipse = Layer29.pathItems.rectangle(-700, 505, 20, 20);
ellipse.fillColor = fillColor;
ellipse.fill = true;

// Anger 
var Layer30 = doc.layers.add();
Layer30.name = "Circle 30";

var fillColor = new RGBColor();
fillColor.red = 245;
fillColor.green = 66;
fillColor.blue = 99;

var ellipse = Layer30.pathItems.rectangle(-700, 540, 20, 20);
ellipse.fillColor = fillColor;
ellipse.fill = true;

// Add text layer for Day 1
var Layer26 = doc.layers.add();
Layer26.name = "Day 1";
var newTextFrame = Layer26.textFrames.add();
newTextFrame.contents = "Day 1";

// Add text layer for Day 2
var Layer27 = doc.layers.add();
Layer27.name = "Day 2";
var newTextFrame = Layer27.textFrames.add();
newTextFrame.contents = "Day 2";

// Add text layer for Day 3
var Layer28 = doc.layers.add();
Layer28.name = "Day 3";
var newTextFrame = Layer28.textFrames.add();
newTextFrame.contents = "Day 3";

// Add text layer for Day 4
var Layer29 = doc.layers.add();
Layer29.name = "Day 4";
var newTextFrame = Layer29.textFrames.add();
newTextFrame.contents = "Day 4";

// Add text layer for Day 5
var Layer30 = doc.layers.add();
Layer30.name = "Day 5";
var newTextFrame = Layer30.textFrames.add();
newTextFrame.contents = "Day 5";

// Add text layer for header
var Layer31 = doc.layers.add();
Layer31.name = "Monkeypox Sentiment Analysis";
var newTextFrame = Layer31.textFrames.add();
newTextFrame.contents = "Monkeypox Sentiment Analysis";

// Add text layer for Joy in legend
var Layer32 = doc.layers.add();
Layer32.name = "Joy";
var newTextFrame = Layer32.textFrames.add();
newTextFrame.contents = "Joy";

// Add text layer for Sadness in legend
var Layer33 = doc.layers.add();
Layer33.name = "Sadness";
var newTextFrame = Layer33.textFrames.add();
newTextFrame.contents = "Sadness";

// Add text layer for Fear in legend
var Layer34 = doc.layers.add();
Layer34.name = "Fear";
var newTextFrame = Layer34.textFrames.add();
newTextFrame.contents = "Fear";

// Add text layer for Anger key
var Layer35 = doc.layers.add();
Layer35.name = "Anger";
var newTextFrame = Layer35.textFrames.add();
newTextFrame.contents = "Anger";

// Add text layer for Disgust in legend
var Layer36 = doc.layers.add();
Layer36.name = "Disgust";
var newTextFrame = Layer36.textFrames.add();
newTextFrame.contents = "Disgust";


