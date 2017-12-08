import React, { Component } from 'react';

import Scope from './Scope';

export default class UserType extends Component {
  // assuming
  // this.props.str = 'BUISINESS' or 'PERSONAL:

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
      // console.log('this.props.obj: ', this.props.obj);
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
