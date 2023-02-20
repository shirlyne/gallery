var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://omondishallo:<password>@cluster0.ywpxquu.mongodb.net/?retryWrites=true&w=majority',
    development: 'mongodb+srv://omondishallo:<password>@cluster0.ywpxquu.mongodb.net/?retryWrites=true&w=majority',
    test: 'mongodb+srv://omondishallo:<password>@cluster0.ywpxquu.mongodb.net/?retryWrites=true&w=majority',
}
module.exports = config;
