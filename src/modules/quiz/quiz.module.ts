import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { DatabaseModule } from 'src/database/module';
import { quizProviders } from './providers/quiz.providers';
import { QuestionController } from './controllers/question.controller';
import { QuestionService } from './services/question.service';
import { questionProviders } from './providers/question.providers';
import { optionProviders } from './providers/option.providers';
import { OptionController } from './controllers/option.controller';
import { OptionService } from './services/option.service';

@Module({
  imports: [DatabaseModule],
  controllers: [QuizController, QuestionController , OptionController],
  providers: [
    QuizService,
    QuestionService,
    OptionService,
    ...quizProviders,
    ...questionProviders,
    ...optionProviders,
  ],
})
export class QuizModule {}
