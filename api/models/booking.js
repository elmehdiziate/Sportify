import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    field: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Field",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    starttime: {
        type: String,
        required: true,
    },
    endtime: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending",
        required: true,
    },
});

export default mongoose.model("Booking", BookingSchema);
