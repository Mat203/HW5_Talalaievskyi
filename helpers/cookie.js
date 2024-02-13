function setCookie(req, res) {
    const name = Object.keys(req.query)[0];
    const value = req.query[name];
    if (!name || !value) {
        res.status(400).send('Bad Request: Missing name or value in query parameters');
        return;
    }
    const httpOnly = true;
    res.cookie(name, value, { httpOnly: httpOnly });
    res.send('Cookie has been set');
}

function getCookie(req, res) {
    const name = Object.keys(req.query)[0];
    return req.cookies[name];
}

module.exports = {
    setCookie,
    getCookie
};
