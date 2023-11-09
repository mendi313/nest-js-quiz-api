import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { DatabaseModule } from 'src/database/module';
import { quizProviders } from './quiz.providers';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { questionProviders } from './question.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [QuizController, QuestionController],
  providers: [QuizService, ...quizProviders, QuestionService,  ...questionProviders],
})
export class QuizModule {}
