router.get('/setHeader', (req, res) => {
    res.set({
        'Content-Type': 'text/plain',
        'Custom-Header': 'Hello, Custom Header!'
    });
    res.send('setHeader');
 });
 
 router.get('/getHeader', (req, res) => {
    const customHeaderValue = req.get('Custom-Header') || 'Header not set';
    res.send(‘Custom Header Value: ’ +  customHeaderValue);
 });
 