import React, { Component } from 'react';

import Scope from './Scope';

import UserType from './UserType';

const BUSINESS = 'BUSINESS';
const PERSONAL = 'PERSONAL';
const STATES = 'states';
const COUNTRIES = 'countries';
const ACH_PREF = 'ach_preferences';
const INTEREST_PREF = 'interest_preferences';
const MAX_NODES = 'max_nodes';
const OTHER_PREF = 'other_preferences';

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
        <h3>CIP TAG: {this.props.str}</h3>

        {cipTagProps.map((cipProp) => {
          switch (cipProp) {
            case BUSINESS: return <UserType str={BUSINESS} key={BUSINESS} obj={cipTagObj[BUSINESS]} />;
            case PERSONAL: return <UserType str={PERSONAL} key={PERSONAL} obj={cipTagObj[PERSONAL]} />;
            default: break;
          }
        })}

      </div>
    );
  }
}
