/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Question } from '../../interfaces/question.interface';
import { CreateQuestionDto } from 'src/dto/CreateQuestionDto.dto';
import { Quiz } from 'src/interfaces/quiz.interface';

@Injectable()
export class QuestionService {
  constructor(
    @Inject('Question_MODEL')
    private questionModel: Model<Question>,
  ) {}

  async createQuestion(
    question: CreateQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const createdQuiz = new this.questionModel({
      question: question.question,
    });
    const newQuestion = await createdQuiz.save();

    quiz.questions = [...(quiz.questions ?? []), newQuestion];
    await quiz.save();

    return newQuestion;
  }
}
