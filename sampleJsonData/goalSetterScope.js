module.exports = {
  "docs": {
    "1": {
      "doc_options": [
        {
          "doc_option_key": "SSN_ONLY",
          "virtual_docs": [
            "SSN"
          ],
          "physical_docs": [],
          "social_docs": []
        }
      ],
        "docs_key": "PERSONAL_DOCS",
          "docs_title": "Personal Documents",
            "docs_description": "Documents needed to verify the parent"
    }
  },
  "flows": {
    "ACH-US": {
      "TRIUMPH-SUBACCOUNT-US": {
        "daily_limit": {
          "1": {
            "per_user": 500
          }
        },
        "platform_daily_limit": 5000
      }
    },
    "TRIUMPH-SUBACCOUNT-US": {
      "ACH-US": {
        "daily_limit": {
          "1": {
            "per_user": 500
          }
        },
        "flow_type": "ME2ME",
          "platform_daily_limit": 5000
      }
    }
  }
};
