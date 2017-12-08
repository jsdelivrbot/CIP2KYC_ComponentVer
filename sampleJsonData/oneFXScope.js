module.exports = {
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
    ]
  },
  "flows": {
    "WIRE-US": {
      "SUBACCOUNT-US": {
        "monthly_limit": {
          "1": {
            "per_user": 5000
          }
        },
        "daily_limit": {
          "1": {
            "per_user": 2000
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