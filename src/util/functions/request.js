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
        // timeout: 10000, // 10 секунд таймаута, убрано из-за ошибочных таймаутов
        params: params,
        data: data,
        headers: {
            'Content-Type': contentType,
            'Accept': 'application/json',
            'User-Agent': 'Mozilla/5.0'
        }
    };

    const error = (error) => {
        return {
            error: {
                russian: 'Похоже сервер не работает. Попробуйте позже.',
                english: 'It looks like the server is down. Try again later.'
            },
            errno: error.errno,
        }
    }

    return await axios(config).catch(error);
}