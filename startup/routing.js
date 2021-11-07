module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('welcome to home page of users service');
    });
}