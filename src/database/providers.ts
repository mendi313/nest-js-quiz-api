/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://770mmw:P9mZ45XfAyrN5Uo2@cluster0.x9q9jwh.mongodb.net/'),
  },
];