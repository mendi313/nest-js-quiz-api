import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OptionService } from '../services/option.service';
import { QuestionService } from '../services/question.service';
import { CreateOptionDto } from 'src/dto/CreateOptionDto.dto';
import { Option } from 'src/interfaces/option.interface';

/* eslint-disable prettier/prettier */
@Controller('question/option')
export class OptionController {
  constructor(
    private optionService: OptionService,
    private questionService: QuestionService,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  async saveOptionToQuestion(@Body() createOption: CreateOptionDto): Promise<Option> {
    const question = await this.questionService.getQuestionById(
      createOption.questionId,
    );
    return this.optionService.createOption(createOption, question);
  }
}
