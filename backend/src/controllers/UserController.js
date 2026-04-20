const User = require("../models/User");
const mongoose = require('mongoose');
const { generateAccessToken, generateRefreshToken } = require('../config/auth');
const authService = require('../services/AuthService');

const register = async (req, res) => {
  try {
    
    const userData = {
      ...req.body,
      file: req.file 
    };

    
    const newUser = await authService.registerUser(userData);
    const userPayload = newUser.toObject(); 

    const accessToken = generateAccessToken(userPayload);
    const refreshToken = generateRefreshToken(userPayload);

    // ၃။ အောင်မြင်ရင် Response ပြန်မယ်
    return res.status(201).json({
      status: "success",
      message: "User registered successfully",
      accessToken: accessToken,
      refreshToken: refreshToken,
      data: newUser
    });

  } catch (error) {
    // ၄။ Error တက်ရင် Handle လုပ်မယ်
    console.error("Register Error:", error.message);
    
    // Business logic error (ဥပမာ- User already exists) ဆိုရင် 400 ပေးမယ်
    const statusCode = error.message === "User already exists" ? 400 : 500;
    
    return res.status(statusCode).json({
      status: "error",
      message: error.message || "Internal Server Error"
    });
  }
};

const login = async (req,res) => {
    try {
        const { email, password } = req.body; // ၁။ Destructure လုပ်ပြီး data ယူပါ

        // ၂။ Service ဆီကို email နဲ့ password သီးခြားစီ ပို့ပါ
        const result = await authService.loginUser(email, password);

        // ၃။ အောင်မြင်ရင် result ထဲက data တွေကို ပြန်ပို့ပါ
        return res.status(200).json({
            status: "success",
            accessToken: result.accessToken,
            refreshToken: result.refreshToken,
            user: result.user
        });

    } catch (error) {
        console.error("Login Error:", error.message);

        // ၄။ Error အမျိုးအစားအလိုက် Status Code သတ်မှတ်ပါ
        if (error.message === "User not found") {
            return res.status(404).json({ message: error.message });
        }
        if (error.message === "Invalid password") {
            return res.status(401).json({ message: error.message });
        }

        return res.status(500).json({ message: "Server error" });
    }
};


const token = (req,res) => {
    const refreshToken = req.body.token;
    if (refreshToken == null) return res.sendStatus(401);
    
    // DB ထဲမှာ ဒီ Refresh Token ရှိမရှိ အရင်စစ်ပါ
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        
        // အချက်အလက်မှန်ကန်ရင် Access Token အသစ်တစ်ခု ပြန်ထုတ်ပေးမယ်
        const accessToken = generateAccessToken({ id: user.id, name: user.name });
        res.json({ accessToken: accessToken });
    });
}


module.exports = {register, login, token};
    