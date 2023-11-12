/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Post,
  Get,
  UsePipes,
  ValidationPipe,
  Param,
} from '@nestjs/common';
import { QuestionService } from '../services/question.service';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { CreateQuestionDto } from 'src/dto/CreateQuestionDto.dto';
import { Question } from 'src/interfaces/question.interface';
import { QuizService } from '../services/quiz.service';

@Controller('question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
    private readonly quizService: QuizService,
  ) {}

  @Get('/:id')
  getQuizById(@Param('id') id: number): Promise<Question> {
    return this.questionService.getQuestionById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  @ApiCreatedResponse({
    description: 'Question added to a quiz',
  })
  async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
    const quiz = await this.quizService.getQuizById(question.quizId);
    return this.questionService.createQuestion(question, quiz);
  }
}
