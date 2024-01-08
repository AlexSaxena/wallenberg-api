const axios = require("axios");

const bankIDSign = async (req, res) => {
  try {
    const { userVisibleData } = req.body;

    const apiResponse = await axios.post(
      "https://banksign-test.azurewebsites.net/api/sign",
      {
        apiUser: process.env.apiUser,
        password: process.env.password,
        companyApiGuid: process.env.companyApiGuid,
        endUserIp: process.env.endUserIp,
        userVisibleData: userVisibleData,
        getQr: true,
      }
    );

    // const returnUrl = "http://localhost:5173/";
    const returnUrl = "https://www.google.com/";

    const autostartToken =
      apiResponse.data.apiCallResponse.Response.AutoStartToken;
    const QrImageUrl = apiResponse.data.apiCallResponse.Response.QrImage;

    const autostartUrlMobile = `https://app.bankid.com/?autostarttoken=${autostartToken}&redirect=${returnUrl}`;
    const autostartUrlPc = ` bankid:///?autostarttoken=${autostartToken}&redirect=${returnUrl}`;

    apiResponse.data.autostartUrlMobile = autostartUrlMobile;
    apiResponse.data.autostartUrlPc = autostartUrlPc;
    apiResponse.data.QrImageUrl = QrImageUrl;

    res.json(apiResponse.data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  bankIDSign,
};
