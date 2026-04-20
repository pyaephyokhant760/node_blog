const userRepository = require('../repositories/UserRepository');
const bcrypt = require('bcrypt'); // password hash လုပ်ရန်
const { generateAccessToken, generateRefreshToken } = require('../config/auth');

class AuthService {
  async registerUser(data) {
    // 1. User ရှိမရှိ စစ်ဆေးခြင်း (Business Logic)
    const userExist = await userRepository.findByEmail(data.email);
    if (userExist) {
      throw new Error("User already exists");
    }

    // 2. Profile Path သတ်မှတ်ခြင်း
    const profilePath = data.file ? data.file.path : 'upload/default-profile.png';

    // 3. Register လုပ်ခြင်း
    return await userRepository.create({
      name: data.name,
      email: data.email,
      age: data.age,
      profile: profilePath,
      password: data.password // တကယ်တမ်း hash လုပ်ပြီးမှ သိမ်းသင့်ပါတယ်
    });
  }

  async loginUser(email,password) {
    const user = await userRepository.findByEmail(email);

    if(!user) {
      throw new Error("User not found");
    }

    const isPasswordValid = await user.comparePassword(password);
    if(!isPasswordValid) {
      throw new Error("Invalid password");
    }

    const userPayload = user.toObject();

  // ၄။ Token များ ထုတ်ပေးခြင်း
  const accessToken = generateAccessToken(userPayload);
  const refreshToken = generateRefreshToken(userPayload);

  // ၅။ (Option) Refresh Token ကို DB မှာ သိမ်းလိုလျှင် Update လုပ်ပါ
  // await userRepository.updateToken(user._id, refreshToken);

  // ၆။ Token များကို Return ပြန်ပေးခြင်း (Create မလုပ်ရပါ)
  return {
    user: userPayload,
    accessToken,
    refreshToken
  };
  }
}

module.exports = new AuthService();