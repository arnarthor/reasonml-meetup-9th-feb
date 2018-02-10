[@bs.deriving {jsConverter: newType}]
type food = {
  food: string,
  beverages: array(string)
};

[@bs.module] external meetupFood : unit => abs_food = "./meetupFood.js";

[@bs.deriving {jsConverter: newType}]
type info = {
  date: string,
  time: string,
  location: string
};

[@bs.module "./MeetupInformation.js"]
external meetupInfo : unit => abs_info = "default";

let component = ReasonReact.statelessComponent("Speakers");

[@bs.deriving jsConverter]
type speaker = {
  name: string,
  talk: string,
  image: string
};

type speakersList = list(speaker);

let make = (speakers, _children) => {
  let renderSpeaker = ({name, talk, image}) =>
    <div>
      <div> (ReasonReact.stringToElement({j|Name: $name|j})) </div>
      <div> (ReasonReact.stringToElement({j|Talk: $talk|j})) </div>
      <div> <Img image /> </div>
    </div>;
  {
    ...component,
    render: (_) => {
      let {date, time, location} = infoFromJs(meetupInfo());
      let {food, beverages} = foodFromJs(meetupFood());
      <div>
        <div>
          <div> (ReasonReact.stringToElement({j|Date: $date|j})) </div>
          <div> (ReasonReact.stringToElement({j|Time: $time|j})) </div>
          <div> (ReasonReact.stringToElement({j|Location: $location|j})) </div>
          <div> (ReasonReact.stringToElement({j|Food: $food|j})) </div>
          <div>
            (ReasonReact.stringToElement({j|Beverages: $beverages|j}))
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
        (
          ReasonReact.arrayToElement @@
          Array.of_list @@
          List.map(renderSpeaker, speakers)
        )
      </div>;
    }
  };
};

let default =
  ReasonReact.wrapReasonForJs(
    ~component,
    jsProps => {
      let speakers =
        jsProps##speakers |> Array.to_list |> List.map(speakerFromJs);
      make(speakers, [||]);
    }
  );
