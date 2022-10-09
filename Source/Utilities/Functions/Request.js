const axios = require('axios');

module.exports = async function request({
    url: url,
    method: method,
    params: params = {},
    data: data = "",
    contentType: contentType
}) {
    const config = {
        method: method,
        url: url,
        maxRedirects: 5,
        params: params,
        data: data,
        headers: {
            'Content-Type': contentType,
            'Accept': 'application/json',
            'User-Agent': 'Mozilla/5.0'
        }
    };

    return await axios(config);
}