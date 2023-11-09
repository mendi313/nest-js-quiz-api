import * as mongoose from 'mongoose';

export const quizSchema = new mongoose.Schema({
  title: String,
  description: String,
  isActive: Boolean,
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
    },
  ],
});

export const QuizModel = mongoose.model('Quiz', quizSchema);
