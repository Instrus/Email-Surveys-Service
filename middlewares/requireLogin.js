// custom middleware to verify user is logged in

module.exports = (req, res, next) => {
    if (!req.user){
        return res.status(401).send({ error: 'You must log in!'});
    }

    next();
};