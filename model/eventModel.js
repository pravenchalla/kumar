const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventTitle: {                                                                                              
        type: String,
        required: true
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },
    Date:{
        type: Number,
        required: true
    },
    Time:{
        type: Number,
        required: true
    },
    Location:{
        type: String,
        required: true
    },
    Description:{
        type: [String],
        required: true
    },
    isDeleted:{
        type: Boolean,
        default: false
    }
    
})

const Event = mongoose.model('Event', eventSchema)


module.exports = Event



