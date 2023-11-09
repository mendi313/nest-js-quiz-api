import * as mongoose from 'mongoose';

export const OptionSchema = new mongoose.Schema({
  text: String,
  isCorrect: Boolean,
});