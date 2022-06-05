var doc = app.activeDocument;
var p = doc.pathItems;

// The width and height (in pixels) of my Adobe Illustrator document margins
var inWidth = 1692;
var inHeight = 2556;

var margin = 18;

//The path for this scripts folder and XML files to be used
var currentFolder = Folder(File($.fileName).parent).fullName; 
var file = new File(currentFolder+"/monkeypox_type.xml");
var file2 = new File(currentFolder+"/monkeypox_values.xml");

var monkeypox_typeXML, monkeypox_valuesXML;

// Call function to read monkeypox data
readmonkeypox_typeXMLFile(file);
readmonkeypox_valuesXMLFile(file2);

// Loop through XML document to set parameters of circles in grid
// The original source of this function is: https://github.com/nickbalderston/data-visualization/blob/master/precipitation.jsx
var indexCounter = 0;
for(i = 0; i < 10; i++){
    for(j = 0; j < 10; j++){
        // Get the emotion value in the XML element associated with the current loop index
            var emotion_value = monkeypox_values.data[indexCounter].value;
        
        // Map the emotion value to a range of circle sizes in pixels -- update 11.85 values to lowest daily value
            var diameter = 78.5+(169.2-78.5)*((emotion_value-11.85)/(0.4577-11.85));
        
        // Define the circle coordinates by using the current loop index and the diameter of the current circle 
            var y = (inHeight / 6 + i * inWidth / 10);
            var x = margin + j * inWidth / 10;
            var add = (inWidth/10 - diameter) / 2;
        
        // Get the emotion value in the XML element associated with the current loop index (indexCounter)
            var emotion_value = monkeypox_type.data[indexCounter].value;
        
        // Map each emotion type to a range of Hue values (in degrees using HSL spectrum) 
            var hueMap = 242+(360-242)*((emotion_value-4.0)/(1.0-4.0));

        // Set values for hue, saturation, and lightness
            var type_hue = hueMap;
            var type_saturation = 100;
            var type_lightness = 40;
        
        // Call the color_hsl2rgb function to convert to RGB values
            var type_rgb = color_hsl2rgb(type_hue, type_saturation, type_lightness);
        
        // Draw a circle using the x-coordinate, y-coordinate, and diameter defined in the current loop
            var circle = p.ellipse((y+add) * -1, x+add,diameter,diameter);
            circle.fillColor = makeColor(type_rgb.r, type_rgb.g, type_rgb.b);
        
            indexCounter++;
    }
    
}

// Functions to convert hue, saturation, lightness values to RGB values
// The original source of this function is: https://github.com/fabianmoronzirfas/extendscript/wiki/HSL-Color-Wheel
function color_hsl2rgb(h, s, l) {
    var m1, m2, hue;
    var r, g, b;
    s /=100;
    l /= 100;
    if (s == 0){
        r = g = b = (l * 255);
    }else {
        if (l <= 0.5){
           m2 = l * (s + 1);
        }else{
            m2 = l + s - l * s;
        }
        m1 = l * 2 - m2;
        hue = h / 360;
        r = color_HueToRgb(m1, m2, hue + 1/3);
        g = color_HueToRgb(m1, m2, hue);
        b = color_HueToRgb(m1, m2, hue - 1/3);
    }
    return {r: r, g: g, b: b};
};

function color_HueToRgb(m1, m2, hue) {
        
    var v;
    if (hue < 0){
        hue += 1;
    }else if (hue > 1){
        hue -= 1;
    }
    
    if (6 * hue < 1){
        v = m1 + (m2 - m1) * hue * 6;
    }else if (2 * hue < 1){
        v = m2;
    }else if (3 * hue < 2){
        v = m1 + (m2 - m1) * (2/3 - hue) * 6;
    }else{
        v = m1;
    }
    
    return 255 * v;
};

function makeColor(r,g,b){
    var c = new RGBColor();
    c.red   = r;
    c.green = g;
    c.blue  = b;
    return c;
}

// Functions to read XML files
function readTempXMLFile(file) {  
 
        file.encoding = "UTF8";  
        file.lineFeed = "unix";  

        file.open("r");  
        var tempXMLStr = file.read();  
        file.close();  
        //$.writeln(tempXMLStr);
        return tempXML = new XML(tempXMLStr); 
}; 

function readPrecipXMLFile(file2) {  
 
        file2.encoding = "UTF8";  
        file2.lineFeed = "unix";  

        file2.open("r");  
        var precipXMLStr = file2.read();  
        file2.close();  
        //$.writeln(tempXMLStr);
        return precipXML = new XML(precipXMLStr); 
}; 