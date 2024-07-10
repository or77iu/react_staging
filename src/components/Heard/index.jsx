import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";

export default class Heard extends Component {
  handleClick = async () => {
    // 发送请求前通知list更新状态
    PubSub.publish("users", {
      isFirst: false,
      isLoading: true,
    });

    // 连续结构赋值并重命名
    const {
      keyWordElement: { value: keyWord },
    } = this;
    const url = "http://localhost:3000/api/search/users2?q=";
    // axios
    //   .get(url + keyWord)
    //   .then((response) => {
    //     console.log(response, response.data);
    //     PubSub.publish("users", {
    //       isLoading: false,
    //       userData: response.data.items,
    //     });
    //   })
    //   .catch((e) => {
    //     // 请求失败后通知list更新状态
    //     PubSub.publish("users", {
    //       isLoading: false,
    //       err: e.message,
    //     });
    //   });

    /* fetch()
      .then(
        (response) => {
          console.log("联系服务器成功了");
          return response.json();
        }
        // (error) => {
        //   console.log("联系服务器失败");
        // }
      )
      .then(
        (response) => {
          console.log(response);
        }
        // (error) => {
        //   console.log("获取数据失败");
        // }
      )
      .catch((e) => {
        console.log(e);
      }); 
       链式回调
      */
    try {
      const response = await fetch(url + keyWord);
      const data = await response.json();
      PubSub.publish("users", {
        isLoading: false,
        userData: data.items,
      });
    } catch (e) {
      // 请求失败后通知list更新状态
      PubSub.publish("users", {
        isLoading: false,
        err: e.message,
      });
    }
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(c) => {
              this.keyWordElement = c;
            }}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.handleClick}>Search</button>
        </div>
      </section>
    );
  }
}
