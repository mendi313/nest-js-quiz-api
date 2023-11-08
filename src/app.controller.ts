import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './dto/CreateCatDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Body() body: CreateCatDto): string {
    return this.appService.getHello(body.name);
  }
}
