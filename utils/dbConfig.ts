import { config } from "dotenv";
import { connect } from "mongoose";

config();

const URL: string = process.env.DATABASE_URL!;

export const dbConfig = async () => {
  try {
    return await connect(URL)
      .then(() => {
        console.log("DB connected");
      })
      .catch(() => {
        console.log("Error encountered in DB");
      });
  } catch (error) {
    console.log(error);
  }
};
