/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  UsePipes,
  Get,
  Post,
  ValidationPipe,
  UseGuards
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from 'src/dto/CreateQuizDto.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { Quiz } from 'src/interfaces/quiz.interface';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
  getAll() {
    return this.quizService.findAllQuizzes();
  }

  @ApiCreatedResponse({ description: 'The quiz that got created' })
  @Post()
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto): Promise<Quiz> { 
    return await this.quizService.createNewQuiz(quizData);
  }
}
