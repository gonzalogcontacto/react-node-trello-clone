import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: String,
    list:  { type: Schema.Types.ObjectId, ref: "List" } 
});

export const task = mongoose.model('Task', TaskSchema);