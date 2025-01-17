const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema(
    {
        name : 
        {
            type: String,
            required: [true, 'Must provide a name'],
            maxlength: [100, 'the name must be least than 20 characters'],
            trim: true
        },
        completed : 
        {
            type: Boolean,
            default: false
        }
    }
)

module.exports = mongoose.model('Task', TaskSchema)