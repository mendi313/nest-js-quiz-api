import { Connection } from 'mongoose';
import { quizSchema } from '../../../schemas/quiz.schema'; // Correct import

export const quizProviders = [
  {
    provide: 'Quiz_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Quiz', quizSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
