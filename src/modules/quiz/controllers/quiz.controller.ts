/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  UsePipes,
  Get,
  Post,
  ValidationPipe,
  Param,
} from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from 'src/dto/CreateQuizDto.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Quiz } from 'src/interfaces/quiz.interface';

@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
  getAll(): Promise<Quiz[]> {
    return this.quizService.findAllQuizzes();
  }

  @Get('/:id')
  getQuizById(@Param('id') id: number): Promise<Quiz> {
    return this.quizService.getQuizById(id);
  }

  @ApiCreatedResponse({ description: 'The quiz that got created' })
  @Post()
  @UsePipes(ValidationPipe)
  createQuiz(@Body() quizData: CreateQuizDto): Promise<Quiz> {
    return this.quizService.createNewQuiz(quizData);
  }
}
