import { Application, Request, Response } from "express";
import router from "./router/abokiRouter";

export const mainApp = (app: Application) => {
  try {
    app.use("", router);

    app.get("/", (req: Request, res: Response) => {
      try {
        return res.status(200).json({
          msg: "Welcome to my API",
        });
      } catch (error) {
        console.log(error);
        return res.status(404).json({
          msg: "Error encountered",
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
