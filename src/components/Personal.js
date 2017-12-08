import React, { Component } from 'react';

import Scope from './Scope';

export default class Personal extends Component {
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
    console.log('here?');
    let personalObj;
    let scopeNames = [];
    if (this.props.obj) {
      // console.log('this.props.obj: ', this.props.obj);
      personalObj = this.props.obj;
      scopeNames = Object.keys(personalObj);
    }
    return (
      <div>
        <h1>{this.props.str}</h1>
        {scopeNames.map((scopeName) => {
          return (
            <Scope key={scopeName} str={scopeName} obj={personalObj[scopeName]} />
          );
        })}
      </div>
    );
  }
}
