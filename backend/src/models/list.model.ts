import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ListSchema = new Schema({
    name: String
});

export const list = mongoose.model('List', ListSchema);