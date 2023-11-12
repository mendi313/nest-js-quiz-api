/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface Option extends Document {
  readonly text: string;
  readonly isCorrect: boolean;
}
