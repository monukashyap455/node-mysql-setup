module.exports = (msg, statusCode, status) => {
    let data = {
        statusCode,
        msg,
        status
    }
    return data;
}