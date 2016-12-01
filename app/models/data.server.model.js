var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DatasSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    data: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    }

});

mongoose.model('Data1', DatasSchema);