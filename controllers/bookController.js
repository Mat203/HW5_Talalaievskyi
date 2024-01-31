async function getNewBookPage(req, res) {
    try {
        res.render('newBook');
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    getNewBookPage
};

