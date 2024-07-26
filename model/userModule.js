const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: {                                                                                              
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    role:{
        type: String,
        required: true,
        enum:['Organizer','User']
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    isDeleted:{
        type: Boolean,
        default: false
    }
    
})
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}
const User = mongoose.model('User', userSchema)


module.exports = User



