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
	// parent component: App (version v3)

	// this.props.str: ex
	// '1'
	// '2'
	// ...

	// this.props.obj keys are listed above

	render() {
		let cipTagObj;
		let cipTagProps = [];
		if (this.props.obj) {
			cipTagObj = this.props.obj;
			cipTagProps = Object.keys(cipTagObj);
		}
		return (
			<div>
				<h3>CIP TAG: {this.props.str}</h3>

				{cipTagProps.map((cipProp, idx) => {
					switch (cipProp) {
						case BUSINESS:
							return <UserType key={idx} str={BUSINESS} obj={cipTagObj[BUSINESS]} />;
						case PERSONAL:
							return <UserType key={idx} str={PERSONAL} obj={cipTagObj[PERSONAL]} />;
						default:
							break;
					}
				})}
			</div>
		);
	}
}
