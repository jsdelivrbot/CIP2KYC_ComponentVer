import React, { Component } from 'react';

import Scope from './Scope';


const BUSINESS = 'BUSINESS';
const PERSONAL = 'PERSONAL';

export default class CipTag extends Component {
  // parenet component: App (version v3)

  // assuming
  // this.props.str = 1 or 2 (CIP Tag)
  // this.props.obj contains
    // BUISINESS
    // PERSONAL
    // States
    // ...

  render() {
    let cipTagObj;
    let cipTagProps = [];
    if (this.props.obj) {
      // console.log('this.props.obj: ', this.props.obj);
      cipTagObj = this.props.obj;
      cipTagProps = Object.keys(cipTagObj);
    }
    return (
      <div>
        <h3>{this.props.str}</h3>
        {scopeProps.map((scopeProp) => {
          if (scopeProp === DOCS) return <Docs str={DOCS} key={DOCS} obj={scopeObj[DOCS]} />;
          if (scopeProp === FLOWS) return <Flows str={FLOWS} key={FLOWS} obj={scopeObj[FLOWS]} />;
          if (scopeProp === DOCS) return <Docs str={DOCS} key={DOCS} obj={scopeObj[DOCS]} />;
          if (scopeProp === FLOWS) return <Flows str={FLOWS} key={FLOWS} obj={scopeObj[FLOWS]} />;
          if (scopeProp === DOCS) return <Docs str={DOCS} key={DOCS} obj={scopeObj[DOCS]} />;
          if (scopeProp === FLOWS) return <Flows str={FLOWS} key={FLOWS} obj={scopeObj[FLOWS]} />;
          if (scopeProp === DOCS) return <Docs str={DOCS} key={DOCS} obj={scopeObj[DOCS]} />;
          if (scopeProp === FLOWS) return <Flows str={FLOWS} key={FLOWS} obj={scopeObj[FLOWS]} />;
        })}
      </div>
    );
  }
}
