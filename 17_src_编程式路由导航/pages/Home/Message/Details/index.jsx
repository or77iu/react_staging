import React, { Component } from "react";
const data = [
  {
    id: "01",
    content: "111",
  },
  {
    id: "02",
    content: "222",
  },
  {
    id: "03",
    content: "333",
  },
  {
    id: "04",
    content: "444",
  },
];
export default class Detail extends Component {
  render() {
    console.log(this.props);
    const { id, title } = this.props.match.params;
    const findById =
      data.find((item) => {
        return item.id === id;
      }) || {};
    return (
      <div>
        <ul>
          <li>id:{id}</li>
          <li>title:{title}</li>
          <li>conten:{findById.content}</li>
        </ul>
      </div>
    );
  }
}
