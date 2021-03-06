// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Img                 = require("./Img.bs.js");
var List                = require("bs-platform/lib/js/list.js");
var $$Array             = require("bs-platform/lib/js/array.js");
var React               = require("react");
var ReasonReact         = require("reason-react/src/ReasonReact.js");
var MeetupFoodJs        = require("./meetupFood.js");
var MeetupInformationJs = require("./MeetupInformation.js");

function foodToJs(param) {
  return {
          food: param[/* food */0],
          beverages: param[/* beverages */1]
        };
}

function foodFromJs(param) {
  return /* record */[
          /* food */param.food,
          /* beverages */param.beverages
        ];
}

function infoToJs(param) {
  return {
          date: param[/* date */0],
          time: param[/* time */1],
          location: param[/* location */2]
        };
}

function infoFromJs(param) {
  return /* record */[
          /* date */param.date,
          /* time */param.time,
          /* location */param.location
        ];
}

var component = ReasonReact.statelessComponent("Speakers");

function speakerToJs(param) {
  return {
          name: param[/* name */0],
          talk: param[/* talk */1],
          image: param[/* image */2]
        };
}

function speakerFromJs(param) {
  return /* record */[
          /* name */param.name,
          /* talk */param.talk,
          /* image */param.image
        ];
}

function make(speakers, _) {
  var renderSpeaker = function (param) {
    return React.createElement("div", undefined, React.createElement("div", undefined, "Name: " + (String(param[/* name */0]) + "")), React.createElement("div", undefined, "Talk: " + (String(param[/* talk */1]) + "")), React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, Img.make(param[/* image */2], /* array */[]))));
  };
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      var match = infoFromJs(MeetupInformationJs.default());
      var match$1 = foodFromJs(MeetupFoodJs());
      return React.createElement("div", undefined, React.createElement("div", undefined, React.createElement("div", undefined, "Date: " + (String(match[/* date */0]) + "")), React.createElement("div", undefined, "Time: " + (String(match[/* time */1]) + "")), React.createElement("div", undefined, "Location: " + (String(match[/* location */2]) + "")), React.createElement("div", undefined, "Food: " + (String(match$1[/* food */0]) + "")), React.createElement("div", undefined, "Beverages: " + (String(match$1[/* beverages */1]) + "")), React.createElement("br", undefined), React.createElement("br", undefined), React.createElement("br", undefined), React.createElement("br", undefined)), $$Array.of_list(List.map(renderSpeaker, speakers)));
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        var speakers = List.map(speakerFromJs, $$Array.to_list(jsProps.speakers));
        return make(speakers, /* array */[]);
      }));

exports.foodToJs      = foodToJs;
exports.foodFromJs    = foodFromJs;
exports.infoToJs      = infoToJs;
exports.infoFromJs    = infoFromJs;
exports.component     = component;
exports.speakerToJs   = speakerToJs;
exports.speakerFromJs = speakerFromJs;
exports.make          = make;
exports.$$default     = $$default;
exports.default       = $$default;
exports.__esModule    = true;
/* component Not a pure module */
