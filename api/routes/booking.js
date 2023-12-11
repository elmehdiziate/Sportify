
import express from 'express';
import { getBookings, getBooking, createBooking, updateBooking, deleteBooking, getBookingsByUser } from '../controllers/booking.js';

const router = express.Router();

router.get('/', getBookings);
router.post('/', createBooking);
router.get('/:id', getBooking);
router.patch('/:id', updateBooking);
router.delete('/:id', deleteBooking);
router.get('/user/:id', getBookingsByUser);

export default router;