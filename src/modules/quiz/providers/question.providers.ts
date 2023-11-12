/* eslint-disable prettier/prettier */
import { Connection } from 'mongoose';
import { QuestionSchema } from '../../../schemas/question.schema';

export const questionProviders = [
  {
    provide: 'Question_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Question', QuestionSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
