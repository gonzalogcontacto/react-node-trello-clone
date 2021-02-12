import { Request, Response } from 'express';
import { task } from "../models/task.model";

class TaskController {

    public async create(req: Request, res: Response) {

        try {

            const newList = new task(req.body);
            await newList.save();

            res.sendStatus(202);

        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }

    }

}

export default new TaskController;