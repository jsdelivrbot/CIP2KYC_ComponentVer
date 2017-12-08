const jsonData = {
  "v3": {
    "1": {
      "PERSONAL": {
        "SEND|RECEIVE|2000|DAILY": {
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
      },
      "max_nodes": {
        "WIRE-US": 2,
        "SUBACCOUNT-US": 1
      },
      "other_preferences": {
        "cancel_on_queue": true
      }
    },
    "2": {
      "BUSINESS": {
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
      },
      "max_nodes": {
        "WIRE-US": 2,
        "SUBACCOUNT-US": 1
      },
      "other_preferences": {
        "cancel_on_queue": true
      }
    }
  }
}

module.exports = JSON.stringify(jsonData);