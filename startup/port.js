module.exports = (app) => {
    app.listen(process.env.PORT || 4000, () => {
        console.log(`listening on port: ${process.env.PORT || 4000}`);
    });
}