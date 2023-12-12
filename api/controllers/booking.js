
import Booking from "../models/booking.js";
import mongoose from "mongoose";

export const getBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        res.json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const createBooking = async (req, res) => {
    const { field, user, date, starttime, endtime, status, teamName, players } = req.body;

    try {
        // Check for existing booking with overlapping time for the same field
        const overlappingBooking = await Booking.findOne({
            field: field,
            date: new Date(date), // Ensure date is compared correctly
            $or: [
                { starttime: { $lte: starttime }, endtime: { $gte: starttime } },
                { starttime: { $lte: endtime }, endtime: { $gte: endtime } },
                { starttime: { $gte: starttime }, endtime: { $lte: endtime } }
            ]
        });

        // If an overlapping booking exists, return an error
        if (overlappingBooking) {
            return res.status(400).json({ message: "Booking time conflicts with an existing booking." });
        }

        // Create the new booking if no overlap is found
        const booking = new Booking({ field, user, date, starttime, endtime, status, teamName, players });
        const newBooking = await booking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const updateBooking = async (req, res) => {
    try{
        const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, {$set: req.body}, { new: true });
        res.json(updatedBooking);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
    
};

export const deleteBooking = async (req, res) => {
    try {
        const result = await Booking.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: "Booking not found" });
        }
        res.json({ message: "Deleted Booking" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getBookingsByUser = async (req, res) => {
    try {
        console.log(req.params.id);
        const bookings = await Booking.find({ user: req.params.id });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


