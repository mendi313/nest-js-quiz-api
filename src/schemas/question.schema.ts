import * as mongoose from 'mongoose';
import { OptionSchema } from './option.schema';

export const QuestionSchema = new mongoose.Schema({
  question: String,
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz', // Reference to the Quiz model
  },
  options: [OptionSchema], // Use the OptionSchema here
});

export const QuestionModel = mongoose.model('Question', QuestionSchema);
