const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema(
    {
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    location: {type: String, required: false},
    isAdmin: {type: Boolean,default: false},
    isAgent: {type: Boolean, default: false},
    skills: {type: Array, default: false},
    profile: {
        type: String,
        required: true,
        default: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fbold-circular-app-web-icons%2F1153%2Fcircle_user_bold-512.png&tbnid=6NTgsBeqQfxfMM&vet=12ahUKEwj28Myt-ceAAxUM5zgGHXbLBMwQMygAegUIARDWAQ..i&imgrefurl=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F1326311%2Fuser_account_avatar_profile_icon&docid=QSA1BIEKbyebCM&w=512&h=512&q=avatar%20img&ved=2ahUKEwj28Myt-ceAAxUM5zgGHXbLBMwQMygAegUIARDWAQ"
    },
},
{timestamps: true}
);

module.exports =mongoose.model ("User",UserSchema);