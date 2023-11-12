/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Quiz } from '../../../interfaces/quiz.interface';
import { CreateQuizDto } from 'src/dto/CreateQuizDto.dto';

@Injectable()
export class QuizService {
  constructor(
    @Inject('Quiz_MODEL')
    private quizModel: Model<Quiz>,
  ) {}

  async createNewQuiz(body: CreateQuizDto): Promise<Quiz> {
    const createdQuiz = new this.quizModel({
      title: body.title,
      description: body.description,
    });
    return createdQuiz.save();
  }

  async getQuizById(id: number): Promise<Quiz> {
    return this.quizModel
      .findById(id)
      .populate('questions') // Populate the 'questions' field
      .exec();
  }

  async findAllQuizzes(): Promise<Quiz[]> {
    return this.quizModel.find().populate('questions').exec();
  }
}
