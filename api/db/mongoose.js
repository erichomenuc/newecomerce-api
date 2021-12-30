const mongoose = require('mongoose');
const url = 'mongodb+srv://eric_home:bd54871@cluster0.b8waj.mongodb.net/newecomerce?retryWrites=true&w=majority'

mongoose.connect(url, {
    useNewUrlParser: true,
});
