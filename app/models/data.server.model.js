/*--By Diego Rodriguez 11/30/16
    Title: HW_LoyaltyOne */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DatasSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    city: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    long: {
        type: String,
        default: '',
        trim: true

    },
    lat: {
        type: String,
        default: '',
        trim: true

    },
    temp: {
        type: String,
        default: '',
        trim: true

    },
    data: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    responses: [{ r: { type: String } }]
        /*[{ type: Schema.Types.ObjectId, ref: 'Response' }]*/
});

mongoose.model('Data2', DatasSchema);