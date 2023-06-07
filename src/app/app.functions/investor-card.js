exports.main = async (context = {}, sendResponse) => {
    sendResponse({
      sections:  [
        {
          "type":"text",
          "format":"markdown",
          "text": "A table that displays company data."
      },
      {
          type: 'crm::table',
          objectTypeId: '0-2',
          properties: ['name', 'ceo', 'industry', 'location__city__state_', 'last_touchpoint', 'total_number_of_touchpoints'],
          pageSize: 10
      }
      ],
    });
};