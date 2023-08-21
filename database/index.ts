import mongoose, { ConnectOptions } from 'mongoose';
import APP_CONFIG from '../src/config';

export const configMongoose = () => {  
    mongoose
      .connect(APP_CONFIG.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions)
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((err) => {
        console.log(err);
      });
};

module.exports = {
    configMongoose,
}