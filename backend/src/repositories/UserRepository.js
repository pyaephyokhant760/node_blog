const User = require('../models/User');

class UserRepository {
  async findByEmail(email) {
    return await User.findOne({ email });
  }

  async create(userData) {
    return await User.create(userData);
  }

  
}

module.exports = new UserRepository();