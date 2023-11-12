/* eslint-disable prettier/prettier */
import { Connection } from 'mongoose';
import { OptionSchema } from 'src/schemas/option.schema';

export const optionProviders = [
  {
    provide: 'Option_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Option', OptionSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
