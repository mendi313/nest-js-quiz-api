/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  UsePipes,
  Get,
  Post,
  ValidationPipe,
  UseGuards,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
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

  @Get('/:id')
  async getQuizById(@Param('id') id: number): Promise<Quiz> {
    return await this.quizService.getQuizById(id);
  }

  @ApiCreatedResponse({ description: 'The quiz that got created' })
  @Post()
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto): Promise<Quiz> {
    return await this.quizService.createNewQuiz(quizData);
  }
}
