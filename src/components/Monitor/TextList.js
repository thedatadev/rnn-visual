import React from "react";
import Text from "./Text";

class TextList extends React.Component {
  constructor() {
    super();
  }

  render() {

    const texts = [
      {
        title: "Title 1",
        content: "This is just a placeholder text!"
      },
      {
        title: "Title 2",
        content: "This is just a placeholder text!"
      },
      {
        title: "Title 3",
        content: "This is just a placeholder text!"
      },
      {
        title: "Title 4",
        content: "This is just a placeholder text!"
      }
    ]

    return (
      <div className="text-list" style={{marginTop: "20px"}}>
        {texts.map((value, index) => {
          return <Text key={index} text={value} />
        })}
      </div>
    );
  }
}

export default TextList;
