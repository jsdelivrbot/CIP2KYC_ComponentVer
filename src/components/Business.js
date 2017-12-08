import React, { Component } from 'react';

import Scope from './Scope';

export default class Buiseness extends Component {
  // assuming
  // this.props.key = 'BUISINESS' or 'PERSONAL:

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
    let businessObj;
    let scopeNames = [];
    if (this.props.obj) {
      // console.log('this.props.obj: ', this.props.obj);
      businessObj = this.props.obj;
      scopeNames = Object.keys(businessObj);
    }
    return (
      <div>
        {scopeNames.map((scopeName) => {
          return (
            <Scope key={scopeName} str={scopeName} obj={businessObj[scopeName]} />
          );
        })}
      </div>
    );
  }
}
