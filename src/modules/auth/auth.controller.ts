import { Controller, Post, UseGuards, Request, Body, Get } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { LoginDto } from 'src/dto/LoginDto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req, @Body() loginDto: LoginDto): { acsses_token: string } {
    return this.authService.generateToken(req.user);
  }
  
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('user')
  async user(@Request() req): Promise<any> {
    return req.user;
  }
}
