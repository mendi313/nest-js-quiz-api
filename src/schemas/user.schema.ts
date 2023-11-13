import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { UserRoles } from 'src/modules/user/enums/user.enum';

export const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
  role: {
    type: String,
    enum: Object.values(UserRoles),
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
});

// Middleware to update `updatedAt` field before saving the document
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  this.updatedAt = new Date();
  next();
});

UserSchema.methods.setPassword = async function (password: string) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(password, salt);
};

export const UserModel = mongoose.model('User', UserSchema);
