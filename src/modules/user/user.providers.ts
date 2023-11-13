/* eslint-disable prettier/prettier */
import { Connection } from 'mongoose';
import { UserSchema } from 'src/schemas/user.schema';

export const userProviders = [
  {
    provide: 'User_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
