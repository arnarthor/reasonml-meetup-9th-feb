let listOfSpeakers = ["Arnar", "Gunni", "Panel"];

Js.log2("List: ", listOfSpeakers);

let arrayOfSpeakers = [|"Arnar", "Gunni", "Panel"|];

Js.log2("Array: ", arrayOfSpeakers);

type speaker = {
  name: string,
  talk: string,
  image: string
};

let speakerRecord = {
  name: "Arnar",
  talk: "Introduction To Reason",
  image: "https://communityfund.imgix.net/b5614162-0b9b-473d-ab4f-96f8bdf59d50.png?fit=crop&w=500&h=500"
};

Js.log2("Record: ", speakerRecord);

let speakerJsObject = {
  "name": "Arnar",
  "talk": "Introduction To Reason",
  "image": "https://communityfund.imgix.net/b5614162-0b9b-473d-ab4f-96f8bdf59d50.png?fit=crop&w=500&h=500"
};

Js.log2("JS Object: ", speakerJsObject);

[@bs.deriving jsConverter]
type fruitVariant =
  | Apple
  | [@bs.as 10] Orange
  | [@bs.as 100] Kiwi
  | Watermelon;

Js.log2("Fruit variant", fruitVariantToJs(Apple));

switch (fruitVariantFromJs(20)) {
| Some(Kiwi) => Js.log("this is Kiwi")
| _ => Js.log("received something wrong from the JS side")
};

switch (fruitVariantFromJs(100)) {
| Some(Kiwi) => Js.log("this is Kiwi")
| _ => Js.log("received something wrong from the JS side")
};

[@bs.deriving jsConverter]
type fruitPolymorphic = [
  | `Apple
  | [@bs.as "miniCoconut"] `Kiwi
  | `Watermelon
];

Js.log2("Fruit polymorphic: ", fruitPolymorphicToJs(`Apple));

switch (fruitPolymorphicFromJs("mojito")) {
| Some(`Kiwi) => Js.log("this is Kiwi")
| _ => Js.log("received something wrong from the JS side")
};

switch (fruitPolymorphicFromJs("miniCoconut")) {
| Some(`Kiwi) => Js.log("this is Kiwi")
| _ => Js.log("received something wrong from the JS side")
};
