module.exports = {
  "SEND|RECEIVE|10000|DAILY": {
    "docs": {
      "1": [
        {
          "virtual_docs": [
            "SSN"
          ],
          "physical_docs": [],
          "social_docs": []
        },
        {
          "virtual_docs": [],
          "physical_docs": [
            "GOVT_ID"
          ],
          "social_docs": []
        }
      ],
        "2": [
          {
            "virtual_docs": [
              "TIN"
            ],
            "physical_docs": [],
            "social_docs": []
          },
          {
            "virtual_docs": [],
            "physical_docs": [
              "EIN_DOC"
            ],
            "social_docs": []
          }
        ]
    },
    "flows": {
      "WIRE-US": {
        "SUBACCOUNT-US": {
          "monthly_limit": {
            "1": {
              "per_user": 10000
            }
          },
          "daily_limit": {
            "1": {
              "per_user": 10000
            }
          },
          "flow_type": "ME2ME",
            "platform_daily_limit": 150000
        }
      },
      "SUBACCOUNT-US": {
        "SUBACCOUNT-US": {
          "flow_type": "P2P",
            "platform_daily_limit": 150000
        }
      }
    }
  }
}
