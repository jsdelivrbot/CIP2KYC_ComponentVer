import React, { Component } from 'react';

import _ from 'lodash';

export default class Flows extends Component {
	// assuming
	// this.props.key = 'flows'
	// this.props.obj = objKeysAreFromNodeName
	// objKeysAreFromNodeName ex)
	// keys aer from node ex) ACH-US
	// objs are to nodes objs ex) {ACH_US : ~~ }, SYNAPSE-US

	render() {
		let objKeysAreFromNodeName;
		let fromNodeNames = [];
		if (this.props.obj) {
			// console.log('this.props.obj: ', this.props.obj);
			objKeysAreFromNodeName = this.props.obj;
			fromNodeNames = Object.keys(objKeysAreFromNodeName);
		}
		return (
			<div>
				<h3>{this.props.str}</h3>
				<table className="table table-bordered">
					<thead>
						<tr>
							<th>From</th>
							<th>To</th>
							<th>Daily</th>
							<th>Weekly</th>
							<th>Monthly</th>
							<th>Yearly</th>
						</tr>
					</thead>
					<tbody>
						{fromNodeNames.map(fromNodeName => {
							let objKeysAreToNodeNames = objKeysAreFromNodeName[fromNodeName];
							let toNodeNames = Object.keys(objKeysAreToNodeNames);
							return toNodeNames.map((toNodeName, idx) => {
								let objKeysAreToNodeProps = objKeysAreToNodeNames[toNodeName];
								// console.log('objKeysAreToNodeProps: ', objKeysAreToNodeProps);
								let daily_limit = 'n/a';
								let weekly_limit = 'n/a';
								let monthly_limit = 'n/a';
								let yearly_limit = 'n/a';

								if (objKeysAreToNodeProps.daily_limit) {
									let limitObj = objKeysAreToNodeProps.daily_limit;
									let countKey = Object.keys(limitObj)[0];
									if (limitObj[countKey]) {
										daily_limit = limitObj[countKey].per_user;
									}
								}

								if (objKeysAreToNodeProps.weekly_limit) {
									let limitObj = objKeysAreToNodeProps.weekly_limit;
									let countKey = Object.keys(limitObj)[0];
									if (limitObj[countKey]) {
										weekly_limit = limitObj[countKey].per_user;
									}
								}

								if (objKeysAreToNodeProps.monthly_limit) {
									let limitObj = objKeysAreToNodeProps.monthly_limit;
									let countKey = Object.keys(limitObj)[0];
									if (limitObj[countKey]) {
										monthly_limit = limitObj[countKey].per_user;
									}
								}
								if (objKeysAreToNodeProps.yearly_limit) {
									let limitObj = objKeysAreToNodeProps.yearly_limit;
									let countKey = Object.keys(limitObj)[0];
									if (limitObj[countKey]) {
										yearly_limit = limitObj[countKey].per_user;
									}
								}

								return (
									<tr key={idx}>
										<td>{fromNodeName}</td>
										<td>{toNodeName}</td>
										<td>{daily_limit}</td>
										<td>{weekly_limit}</td>
										<td>{monthly_limit}</td>
										<td>{yearly_limit}</td>
									</tr>
								);
							});
						})}
					</tbody>
				</table>
			</div>
		);
	}
}
