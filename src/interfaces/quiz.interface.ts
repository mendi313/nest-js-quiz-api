/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
import { Question } from './question.interface';

export interface Quiz extends Document {
  id: string; // or mongoose.Schema.Types.ObjectId if using ObjectId
  title: string;
  description: string;
  isActive: boolean;
  questions: Question[]
}
