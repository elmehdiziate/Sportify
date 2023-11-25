import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  googleId: {
    type: String, // Store the Google ID here
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  picture: {
    type: String,
    default: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
UserSchema.statics.findOrCreate = async function (profile) {
  const user = await this.findOne({ googleId: profile.id });

  if (user) {
    return user;
  }

  const newUser = new this({
    googleId: profile.id,
    username: profile.displayName,
    email: profile.emails[0].value,
    picture: profile.photos[0].value,
    // Add other fields as needed
  });

  await newUser.save();
  return newUser;
};

export default mongoose.model("User", UserSchema);
