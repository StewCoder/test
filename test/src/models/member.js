const mongoose = require('mongoose');

/**
 * Mongoose schema and model for the Member entity.
 * 
 * @module models/member
 */

/**
 * Schema representing a member in the digital library.
 * @typedef {Object} MemberSchema
 * @property {string} name - The name of the member.
 * @property {string} membershipType - The type of membership the member holds (e.g., premium, standard).
 * @property {string} email - The email address of the member (must be unique).
 * @property {Date} joinDate - The date when the member joined.
 */

/**
 * Member schema definition using Mongoose.
 * @type {mongoose.Schema}
 * @property {string} name - The name of the member (required).
 * @property {string} membershipType - The type of membership the member holds (required).
 * @property {string} email - The email address of the member (required and unique).
 * @property {Date} joinDate - The date the member joined (required).
 */
const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },  // The name of the member
  membershipType: { type: String, required: true },  // The type of membership (e.g., premium)
  email: { type: String, required: true, unique: true },  // The email address (unique)
  joinDate: { type: Date, required: true },  // The date the member joined
});

/**
 * Member model based on the memberSchema.
 * @type {mongoose.Model<MemberSchema>}
 * @description The Member model allows interaction with the `members` collection in the database.
 */
const Member = mongoose.model('Member', memberSchema);  // Create the Member model

module.exports = Member;
