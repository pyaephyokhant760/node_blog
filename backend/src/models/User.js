const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    profile: { type: String, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true
});

// Password ကို Save မလုပ်ခင် Hash လုပ်ပေးမည့် Middleware
userSchema.pre('save', async function() {
    if (!this.isModified('password')) {
        return; 
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// နာမည်ကို comparePassword ဟု ပြောင်းပေးလိုက်ပါ (Service နှင့် ကိုက်ညီအောင်)
userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;