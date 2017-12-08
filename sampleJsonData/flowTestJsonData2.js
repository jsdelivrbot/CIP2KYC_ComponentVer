module.exports = {
	'ACH-US': {
		'SYNAPSE-US': {
			daily_limit: {
				'1': {
					per_user: 250000
				}
			},
			flow_type: 'PP2P',
			monthly_limit: {
				'1': {
					per_user: 1000000
				}
			},
			platform_daily_limit: 5000000,
			yearly_limit: {}
		}
	},
	'SYNAPSE-US': {
		'ACH-US': {
			daily_limit: {
				'1': {
					per_user: 250000
				}
			},
			flow_type: 'PP2P',
			monthly_limit: {
				'1': {
					per_user: 1000000
				}
			},
			platform_daily_limit: 5000000,
			yearly_limit: {}
		},
		'SYNAPSE-US': {
			daily_limit: {},
			flow_type: 'PP2P',
			monthly_limit: {},
			platform_daily_limit: 50000000,
			yearly_limit: {}
		},
		'WIRE-US': {
			daily_limit: {},
			flow_type: 'PP2P',
			monthly_limit: {},
			platform_daily_limit: 50000000,
			yearly_limit: {}
		}
	},
	'WIRE-US': {
		'SYNAPSE-US': {
			daily_limit: {},
			flow_type: 'PP2P',
			monthly_limit: {},
			platform_daily_limit: 50000000,
			yearly_limit: {}
		}
	}
};
