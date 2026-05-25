# Task Series 3: Post System

> **Prerequisites:** Task Series 3 (Employees), Task Series 4 (login, Category) completed


---

## Task 3.1: Attendance DataBase

### Steps:
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    // ဘယ် User ရေးလဲဆိုတာ ချိတ်ဆက်ဖို့ (Foreign Key ဆန်ဆန်)
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    // ဘယ် Category အောက်မှာလဲဆိုတာ ချိတ်ဆက်ဖို့
    categoryId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Category", 
        default: null 
    },
    // Post ရဲ့ ခေါင်းစဉ် (Title)
    name: { 
        type: String, 
        required: true,
        trim: true 
    },
    // Post ရဲ့ URL Slug (SEO အတွက် ကောင်းအောင်)
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    // Post စာသားများ
    text: { 
        type: String, 
        required: true 
    },
    // Post ရဲ့ မျက်နှာဖုံးပုံ (Image URL သို့မဟုတ် Path)
    image: { 
        type: String, 
        default: null 
    },
    // Post အခြေအနေ (Draft ထားမလား၊ တန်းတင်မလား)
    status: {
        type: String,
        enum: ["draft", "published", "archived"],
        default: "draft"
    },
    // ကြည့်ရှုသူ အရေအတွက် တိုးချင်ရင်
    viewsCount: {
        type: Number,
        default: 0
    }
}, {
    // created_at နဲ့ updated_at ကို Auto ထည့်ပေးမယ့်အပိုင်း
    timestamps: true 
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;