import React, { Component } from 'react';

import Scope from './Scope';

export default class UserType extends Component {
  // parent component: CipTag

  // this.props.str:
    // 1. BUISINESS
    // 2. PERSONAL

  // this.props.obj keys: ex)
    // SEND|RECEIVE|2000|DAILY
    // SEND|RECEIVE|10000|DAILY
    // ...

  renderPermTitl(title) {
    return (
      <div key={text}>
        <p>{text}</p>
      </div>
    )
  }

  renderPermText(text) {
    return (
      <div key={text}>
        <p>{text}</p>
      </div>
    )
  }

  render() {
    let userTypeObj;
    let scopeNames = [];
    if (this.props.obj) {
      userTypeObj = this.props.obj;
      scopeNames = Object.keys(userTypeObj);
    }
    return (
      <div>
        <h1>{this.props.str}</h1>
        {scopeNames.map((scopeName) => {
          return (
            <Scope key={scopeName} str={scopeName} obj={userTypeObj[scopeName]} />
          );
        })}
      </div>
    );
  }
}
