const mongoose = require('mongoose');

const BeneficiarySchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  state: {
    type: String,
  },
  mentorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mentor',
  },
  photo: {
    type: String, // URL or file path
  },
  status: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Beneficiary', BeneficiarySchema);
