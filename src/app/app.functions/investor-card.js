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
          properties: ['name', 'ceo', 'industry', 'city', 'state', 'hs_analytics_latest_source', 'hs_analytics_latest_source_data_1', 'hs_analytics_latest_source_data_2', 'hs_analytics_latest_source_timestamp', 'total_number_of_touchpoints'],
          pageSize: 10
      }
      ],
    });
};