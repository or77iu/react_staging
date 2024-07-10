import React, { Component } from "react";
import "./index.css";
export default class List extends Component {
  render() {
    const { userData, isLoading, isFirst, err } = this.props;
    return (
      <div className="row">
        {isFirst ? (
          <h3>输入关键字，随后点击搜索</h3>
        ) : isLoading ? (
          <h3>Loading....</h3>
        ) : err ? (
          err
        ) : (
          userData.map((item) => {
            return (
              <div className="card" key={item.id}>
                <a href={item.html_url} target="_blank" rel="noreferrer">
                  <img
                    alt="avater"
                    src={item.avatar_url}
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{item.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
