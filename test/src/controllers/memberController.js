const Member = require('../models/member');

/**
 * Creates a new member in the database.
 * @param {Object} req - The request object containing the member details in the body.
 * @param {Object} res - The response object to send the result back to the client.
 * @returns {Object} The created member in JSON format.
 */
exports.createMember = async (req, res) => {
  try {
    const member = new Member(req.body);
    await member.save();
    res.status(201).json(member);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * Retrieves all members from the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object to send the list of members.
 * @returns {Array} An array of all members in JSON format.
 */
exports.getAllMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.status(200).json(members);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * Retrieves a member by its ID from the database.
 * @param {Object} req - The request object containing the member ID as a parameter.
 * @param {Object} res - The response object to send the member data.
 * @returns {Object} The member data in JSON format, or an error message if not found.
 */
exports.getMemberById = async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }
    res.status(200).json(member);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * Updates a member by its ID in the database.
 * @param {Object} req - The request object containing the member ID as a URL parameter and the updated data in the body.
 * @param {Object} res - The response object to send the updated member data.
 * @returns {Object} The updated member in JSON format, or an error message if not found.
 */
exports.updateMember = async (req, res) => {
  try {
    const member = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }
    res.status(200).json(member);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * Deletes a member by its ID from the database.
 * @param {Object} req - The request object containing the member ID as a URL parameter.
 * @param {Object} res - The response object to send a success or error message.
 * @returns {Object} A success message if the member is deleted, or an error message if not found.
 */
exports.deleteMember = async (req, res) => {
  try {
    const member = await Member.findByIdAndDelete(req.params.id);
    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }
    res.status(200).json({ message: 'Member deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
