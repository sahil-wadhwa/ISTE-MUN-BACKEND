const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: {
  type: String,
  match: [/\S+@\S+\.\S+/, "Invalid email format"],
},
    university: { type: String, required: true },
    phoneNumber: {
  type: String,
  match: [/^\d{10}$/, "Invalid phone number"],
},
    delegateType: { type: String, required: true },
    committeePreference1: { type: String },
    committeePreference2: { type: String },
    accommodationRequired: { type: Boolean, default: false },
    agreeToTerms: { type: Boolean, required: true },
    previousExperience: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Registration", registrationSchema);
