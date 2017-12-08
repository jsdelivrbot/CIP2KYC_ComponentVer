module.exports = {
  //////// Scopes look like this https://docs.synapsepay.com/docs/user-resources//section-document-permission-scope
  //////// Scopes are just a label now.So make it whatever makes the most sense to platforms.
  'SEND|RECEIVE': {
    docs: {
      ////// here you supply all the KYC docs that user needs to upload to get SEND | RECEIVE permission scope
      '1': [
        {
          virtual_docs: ['SSN'],
          physical_docs: ['GOVT_ID'],
          social_docs: []
        },
        {
          virtual_docs: [],
          physical_docs: ['GOVT_ID', 'SSN_CARD'],
          social_docs: []
        }
      ]
    },
    ////// here you supply all the allowed flows for this permission scope
    ////// Inside the flows you can add monthly_limit, daily_limit or yearly_limit as well.
    ////// here states and countries are optional.you only need to add this if you need to allow / block states or countries per flow.
    flows: {
      'ACH-US': {
        'DEPOSIT-US': {
          monthly_limit: {
            '1': {
              per_user: 10000
            }
          },
          daily_limit: {
            '1': {
              per_user: 7000
            }
          },
          yearly_limit: {
            '1': {
              per_user: 100000
            }
          },
          flow_type: 'MARKETPLACE',
            platform_daily_limit: 100000000,
              states: {
            blocked: [],
              allowed: []
          },
          countries: {
            allowed: [],
              blocked: []
          }
        }
      }
    },
    ////// more_nodes is an optional field.if for some reason you need to design controls in a way that different Scopes need different nodes, then you can use more_nodes to supply the additional nodes.
    ////// eg.With some Tier 1 scope you do not allow customers to create DEPOSIT - US accounts, but with Tier 2(when they add GOVT_ID or something) you might need to allow them to open a DEPOSIT - US account as well.This lets you do that.You can also use this feature to make sure that users can only add nodes after KYC is complete.If you need that for some reason.
    more_nodes: {
      'DEPOSIT-US': 5,
        SUBNET: 3
    }
  }
}
