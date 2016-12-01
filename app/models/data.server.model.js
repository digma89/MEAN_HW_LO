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