import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { DatabaseModule } from 'src/database/module';
import { quizProviders } from './providers/quiz.providers';
import { QuestionController } from './controllers/question.controller';
import { QuestionService } from './services/question.service';
import { questionProviders } from './providers/question.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [QuizController, QuestionController],
  providers: [
    QuizService,
    ...quizProviders,
    QuestionService,
    ...questionProviders,
  ],
})
export class QuizModule {}
