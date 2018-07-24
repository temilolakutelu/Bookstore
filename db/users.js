var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.SchemaTypes.ObjectId;

var UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    purchased: [ObjectId]
}, { timestamps: { createdAt: 'created_at' } });

var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;