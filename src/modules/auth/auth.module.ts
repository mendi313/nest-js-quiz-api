import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UserService } from '../user/user.service';
import { DatabaseModule } from 'src/database/module';
import { userProviders } from '../user/user.providers';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { jwtConfig } from 'src/config/jwt.config';

@Module({
  imports: [
    PassportModule,
    DatabaseModule,
    JwtModule.registerAsync(jwtConfig)
  ],
  providers: [AuthService, LocalStrategy, UserService, ...userProviders, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
