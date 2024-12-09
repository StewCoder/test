const mongoose = require('mongoose');

/**
 * Mongoose schema and model for the Staff entity.
 * 
 * @module models/staff
 */

/**
 * Schema representing a staff member in the digital library.
 * @typedef {Object} StaffSchema
 * @property {string} name - The name of the staff member.
 * @property {string} position - The position of the staff member (e.g., librarian, assistant).
 * @property {string} email - The email address of the staff member (must be unique).
 * @property {Date} hireDate - The date when the staff member was hired.
 */
const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },  // The name of the staff member
  position: { type: String, required: true },  // The position of the staff member (e.g., librarian)
  email: { type: String, required: true, unique: true },  // The email address (unique)
  hireDate: { type: Date, required: true },  // The date the staff member was hired
});

/**
 * Staff model based on the staffSchema.
 * @type {mongoose.Model<StaffSchema>}
 * @description The Staff model allows interaction with the `staff` collection in the database.
 */
const Staff = mongoose.model('Staff', staffSchema);  // Create the Staff model

module.exports = Staff;
