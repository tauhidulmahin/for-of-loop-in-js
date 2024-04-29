const colors = {
    "colors": [  //array
      {   //array[0]
        "color": "black",
        "category": "hue",
        "type": "primary",
        "code": {
          "rgba": [255,255,255,1],  //array[0-3]
          "hex": "#000"
        }
      },
      {   //array[1]
        "color": "white",
        "category": "value",
        "code": {
          "rgba": [0,0,0,1],  //array[0-3]
          "hex": "#FFF"
        }
      },
      {    //array[2]
        "color": "red",
        "category": "hue",
        "type": "primary",
        "code": {
          "rgba": [255,0,0,1],  //array[0-3]
          "hex": "#FF0"
        }
      },
      {    //array[3]
        "color": "blue",
        "category": "hue",
        "type": "primary",
        "code": {
          "rgba": [0,0,255,1],  //array[0-3]
          "hex": "#00F"
        }
      },
      {    //array[4]
        "color": "yellow",
        "category": "hue",
        "type": "primary",
        "code": {
          "rgba": [255,255,0,1],  //array[0-3]
          "hex": "#FF9"
        }
      },
      {    //array[5]
        "color": "green",
        "category": "hue",
        "type": "secondary",
        "code": {
          "rgba": [0,255,0,1],  //array[0-3]
          "hex": "#0F0"
        }
      },
    ]
}

// console.log(color.colors[2].code.hex);
// console.log(color.colors[3].code.rgba[3]);
// console.log(color.colors[5].type);


for (const color of colors.colors) {
  console.log(color);
}

for (const color of colors.colors[2].code.rgba) {
  console.log(color);
}