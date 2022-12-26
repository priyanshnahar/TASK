const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    List_Items:{
        type: String,
        required: true,
    },
    completed:{
        type: Boolean,
        default: false,
    }
})

const ToDoModel = mongoose.model("ToDoModel", ToDoSchema);

module.exports = ToDoModel;