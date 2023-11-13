import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserRegisterRequestDto } from 'src/dto/user-register.req.dto';
import { User } from 'src/interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @Inject('User_MODEL')
    private userModel: Model<User>,
  ) {}

  registerUser(user: UserRegisterRequestDto): Promise<User> {
    const createdUser = new this.userModel({
      name: user.name,
      email: user.email,
      password: user.password,
    });
    return createdUser.save();
  }

  getUserByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email: email });
  }
}
