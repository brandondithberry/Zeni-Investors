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
          properties: ['name', 'domain', 'hs_object_id'],
          pageSize: 10
      }
      ],
    });
};