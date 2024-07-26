const express = require('express');
const router = express.Router();
const {protect, authorize} = require('../middleware/authorize')

const eventController = require('../controller/eventController')

router.post('/create', eventController.createAnEvent);
router.get('/view',protect,authorize('Organizer') , eventController.viewAllEvents);
router.put('/update/:id',protect,authorize('Organizer') , eventController.updateEventById);
router.put('/delete/:id', protect,authorize('Organizer') ,eventController.eventDelete)

module.exports = router ;
