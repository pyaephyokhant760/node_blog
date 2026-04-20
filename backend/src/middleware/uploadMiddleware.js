const multer = require('multer');
const path = require('path');

// ပုံသိမ်းမည့်နေရာနှင့် အမည်ကို သတ်မှတ်ခြင်း
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/'); // ပုံများကို upload/ folder ထဲသိမ်းမည်
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // ပုံအမည်မထပ်အောင် Date ထည့်ပေးခြင်း
    }
});

const upload = multer({ storage });
module.exports = upload;