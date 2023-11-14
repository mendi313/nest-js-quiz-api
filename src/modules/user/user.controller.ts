import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SETTINGS } from 'src/app.utils';
import { UserRegisterRequestDto } from 'src/dto/user-register.req.dto';
import { User } from 'src/interfaces/user.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  registerUser(
    @Body(SETTINGS.VALIDATION_PIPE) userRegister: UserRegisterRequestDto,
  ): Promise<User> {
    return this.userService.registerUser(userRegister);
  }
}
