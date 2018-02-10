[@bs.module "./img.js"]
external reactClass : ReasonReact.reactClass = "imageComponent";

let make = (~image, children) =>
  ReasonReact.wrapJsForReason(~reactClass, ~props={"image": image}, children);
