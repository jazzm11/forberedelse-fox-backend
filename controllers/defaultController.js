const defaultController = (req, res) => {
    res.send("Welcome to the Fox API! Use /api/fox to get a random fox image.");
};

module.exports = {
    defaultController
};