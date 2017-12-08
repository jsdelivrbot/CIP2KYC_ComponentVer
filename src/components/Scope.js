import React, { Component } from 'react';

import _ from 'lodash';

import Flows from './Flows';
import Docs from './Docs';
import ModeNode from './ModeNode';


const DOCS = 'docs';
const FLOWS = 'flows';
const PERM_TITL = 'permission_title';
const PERM_TEXT = 'permission_description';
const MORE_NODE = 'more_node';

export default class Scope extends Component {
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
    let scopeObj;
    let scopeProps = [];
    if (this.props.obj) {
      // console.log('this.props.obj: ', this.props.obj);
      scopeObj = this.props.obj;
      scopeProps = Object.keys(scopeObj);
    }
    return (
      <div>
        <h2>{this.props.str}</h2>
        {scopeProps.map((scopeProp) => {
          if (scopeProp === DOCS) return <Docs str={DOCS} key={DOCS} obj={scopeObj[DOCS]} />;
          if (scopeProp === FLOWS) return <Flows str={FLOWS} key={FLOWS} obj={scopeObj[FLOWS]} />;
          if (scopeProp === PERM_TITL) return this.renderPermText(scopeObj[PERM_TITL]);
          if (scopeProp === PERM_TEXT) return this.renderPermText(scopeObj[PERM_TEXT]);
          if (scopeProp === MORE_NODE) return <ModeNode str={MORE_NODE} key={MORE_NODE} obj={scopeObj[MORE_NODE]} />;
        })}
      </div>
    );
  }
}
