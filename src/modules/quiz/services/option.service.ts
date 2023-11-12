/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Question } from '../../../interfaces/question.interface';
import { Option } from 'src/interfaces/option.interface';
import { CreateOptionDto } from 'src/dto/CreateOptionDto.dto';

@Injectable()
export class OptionService {
  constructor(
    @Inject('Option_MODEL')
    private optionModel: Model<Option>,
  ) {}

  async createOption(option: CreateOptionDto, question: Question) : Promise<Option> {
    const createdOption = new this.optionModel({
      text: option.text,
      isCorrect: option.isCorrect
    });
    const newOption = await createdOption.save();

    question.options = [...(question.options ?? []), newOption];
    await question.save();

    return newOption;
  }
}
