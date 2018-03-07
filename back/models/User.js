import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

let UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    lowercase: true
  },
  hash_password: { type: String, required: true },
  messages: {
    type: String,
  },
  created: { type: Date, default: Date.now },
  last_updated: { type: Date, default:Date.now }
});

UserSchema.methods.comparePasswords = function(password) {
  return bcrypt.compareSync(password, this.hash_password);
}

export default mongoose.model('User', UserSchema);