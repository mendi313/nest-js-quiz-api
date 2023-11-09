/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { CreateQuestionDto } from 'src/dto/CreateQuestionDto.dto';
import { Question } from 'src/interfaces/question.interface';
import { QuizService } from './quiz.service';

@Controller('question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
    private readonly quizService: QuizService,
  ) {}

  @Post('')
  @UsePipes(ValidationPipe)
  @ApiCreatedResponse({
    description: 'Question added to a quiz',
  })
  async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
    const quiz = await this.quizService.getQuizById(question.quizId);    
    return await this.questionService.createQuestion(question, quiz);
  }
}
