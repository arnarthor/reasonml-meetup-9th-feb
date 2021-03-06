// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Js_mapperRt = require("bs-platform/lib/js/js_mapperRt.js");

var listOfSpeakers = /* :: */[
  "Arnar",
  /* :: */[
    "Gunni",
    /* :: */[
      "Panel",
      /* [] */0
    ]
  ]
];

console.log("List: ", listOfSpeakers);

var arrayOfSpeakers = /* array */[
  "Arnar",
  "Gunni",
  "Panel"
];

console.log("Array: ", arrayOfSpeakers);

var speakerRecord = /* record */[
  /* name */"Arnar",
  /* talk */"Introduction To Reason",
  /* image */"https://communityfund.imgix.net/b5614162-0b9b-473d-ab4f-96f8bdf59d50.png?fit=crop&w=500&h=500"
];

console.log("Record: ", speakerRecord);

var speakerJsObject = {
  name: "Arnar",
  talk: "Introduction To Reason",
  image: "https://communityfund.imgix.net/b5614162-0b9b-473d-ab4f-96f8bdf59d50.png?fit=crop&w=500&h=500"
};

console.log("JS Object: ", speakerJsObject);

var jsMapperConstantArray = /* int array */[
  0,
  10,
  100,
  101
];

function fruitVariantToJs(param) {
  return Js_mapperRt.toInt(param, jsMapperConstantArray);
}

function fruitVariantFromJs(param) {
  return Js_mapperRt.fromInt(4, jsMapperConstantArray, param);
}

console.log("Fruit variant", fruitVariantToJs(/* Apple */0));

var match = fruitVariantFromJs(20);

if (match) {
  if (match[0] !== 2) {
    console.log("received something wrong from the JS side");
  } else {
    console.log("this is Kiwi");
  }
} else {
  console.log("received something wrong from the JS side");
}

var match$1 = fruitVariantFromJs(100);

if (match$1) {
  if (match$1[0] !== 2) {
    console.log("received something wrong from the JS side");
  } else {
    console.log("this is Kiwi");
  }
} else {
  console.log("received something wrong from the JS side");
}

var jsMapperConstantArray$1 = /* array */[
  /* tuple */[
    836965712,
    "miniCoconut"
  ],
  /* tuple */[
    873223388,
    "Watermelon"
  ],
  /* tuple */[
    929625402,
    "Apple"
  ]
];

function fruitPolymorphicToJs(param) {
  return Js_mapperRt.binSearch(3, param, jsMapperConstantArray$1);
}

function fruitPolymorphicFromJs(param) {
  return Js_mapperRt.revSearch(3, jsMapperConstantArray$1, param);
}

console.log("Fruit polymorphic: ", fruitPolymorphicToJs(/* Apple */929625402));

var match$2 = fruitPolymorphicFromJs("mojito");

if (match$2) {
  if (match$2[0] !== 836965712) {
    console.log("received something wrong from the JS side");
  } else {
    console.log("this is Kiwi");
  }
} else {
  console.log("received something wrong from the JS side");
}

var match$3 = fruitPolymorphicFromJs("miniCoconut");

if (match$3) {
  if (match$3[0] !== 836965712) {
    console.log("received something wrong from the JS side");
  } else {
    console.log("this is Kiwi");
  }
} else {
  console.log("received something wrong from the JS side");
}

exports.listOfSpeakers         = listOfSpeakers;
exports.arrayOfSpeakers        = arrayOfSpeakers;
exports.speakerRecord          = speakerRecord;
exports.speakerJsObject        = speakerJsObject;
exports.fruitVariantToJs       = fruitVariantToJs;
exports.fruitVariantFromJs     = fruitVariantFromJs;
exports.fruitPolymorphicToJs   = fruitPolymorphicToJs;
exports.fruitPolymorphicFromJs = fruitPolymorphicFromJs;
/*  Not a pure module */
