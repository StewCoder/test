const Staff = require('../models/staff');

/**
 * Creates a new staff member in the database.
 * @param {Object} req - The request object containing the staff details in the body.
 * @param {Object} res - The response object to send the result back to the client.
 * @returns {Object} The created staff member in JSON format.
 */
exports.createStaff = async (req, res) => {
  try {
    const staff = new Staff(req.body);
    await staff.save();
    res.status(201).json(staff);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * Retrieves all staff members from the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object to send the list of staff members.
 * @returns {Array} An array of all staff members in JSON format.
 */
exports.getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.status(200).json(staff);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * Retrieves a staff member by its ID from the database.
 * @param {Object} req - The request object containing the staff ID as a URL parameter.
 * @param {Object} res - The response object to send the staff member data.
 * @returns {Object} The staff member data in JSON format, or an error message if not found.
 */
exports.getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    if (!staff) {
      return res.status(404).json({ error: 'Staff member not found' });
    }
    res.status(200).json(staff);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * Updates a staff member by its ID in the database.
 * @param {Object} req - The request object containing the staff ID as a URL parameter and the updated data in the body.
 * @param {Object} res - The response object to send the updated staff member data.
 * @returns {Object} The updated staff member in JSON format, or an error message if not found.
 */
exports.updateStaff = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!staff) {
      return res.status(404).json({ error: 'Staff member not found' });
    }
    res.status(200).json(staff);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * Deletes a staff member by its ID from the database.
 * @param {Object} req - The request object containing the staff ID as a URL parameter.
 * @param {Object} res - The response object to send a success or error message.
 * @returns {Object} A success message if the staff member is deleted, or an error message if not found.
 */
exports.deleteStaff = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndDelete(req.params.id);
    if (!staff) {
      return res.status(404).json({ error: 'Staff member not found' });
    }
    res.status(200).json({ message: 'Staff member deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
