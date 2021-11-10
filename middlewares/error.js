module.exports = (error, req, res, next) => {
    console.error(error.message, error);
    res.status(500).json({error: error.message, message: 'something went wrong'});
}