const Event = require('../model/eventModel')

exports.createAnEvent = async (req,res) => {
    try{
    const {eventTitle,client, Date, Time, Location, Description} = req.body

    const event = new Event ({
        eventTitle: eventTitle,
        client: client,
        Date: Date,
        Time: Time,
        Location: Location,
        Description: Description
    })
    await event.save();
    res.status(201).json({
        success: true,
        data: event
    })
        }catch(err){
            res.status(500).json({
                success: false,
                message: err.message
            })
        }
    

}

exports.viewAllEvents = async(req,res) => {
    try{
        const event = await Event.find({isDeleted: false})
        res.status(201).json({
            success: true,
            data: event
        })

    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
exports.updateEventById = async (req,res) => {
    const {id}= req.params
    const{eventTitle,client, Date, Time, Location, Description} = req.body
    try{
        const event = await Event.findByIdAndUpdate(id, {eventTitle:eventTitle, client: client, Date: Date, Time: Time,Location: Location, Description:Description})
        res.status(500).json({
            success: true,
            data: event
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
exports.eventDelete = async (req,res) => {
    const {id} = req.params
    try{
        const event = await Event.findById(id)
        Event.isDeleted = true;
        event.save();
        res.status(201).json({
            success: true,
            data: event
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}