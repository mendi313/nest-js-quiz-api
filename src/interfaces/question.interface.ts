/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
import { Option } from './option.interface';

export interface Question extends Document {
  options: Option[]
  readonly quizId: number;
}
