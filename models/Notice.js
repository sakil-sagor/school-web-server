const mongoose = require("mongoose");
const validator = require('validator');
const NoticeSchema = mongoose.Schema({

    title: {
        type: String,
        ref: "Teacher",

    },
    imageUrl: {
        type: String,
        validate: {
            validator: (value) => validator.isURL(value, { protocols: ['http', 'https'], require_tld: true, require_protocol: true }),
            message: 'Invalid image URL',
        },
    },
}, {
    timestamps: true,
})

const Notice = mongoose.model('Notice', NoticeSchema);
module.exports = Notice;