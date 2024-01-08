const axios = require("axios");

const bankIDStatus = async (req, res) => {
  try {
    const { orderRef } = req.body;
    const apiResponse = await axios.post(
      "https://banksign-test.azurewebsites.net/api/collectstatus",
      {
        apiUser: process.env.apiUser,
        password: process.env.password,
        companyApiGuid: process.env.companyApiGuid,
        orderRef: orderRef,
      }
    );

    res.json(apiResponse.data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  bankIDStatus,
};
