import { Request, Response } from 'express';
import { list } from "../models/list.model";

class ListController {

    public async index(req: Request, res: Response) {

        try{

            const lists: Array<Object>  = await list.find();

            if(lists) {
                res.json(lists);
            }else{
                res.sendStatus(404);
            }

        } catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    }

    public async detail(req: Request, res: Response) {
        //res.sendStatus(200);
        try{
            const lists: Array<Object> | null = [
                {
                    "id": 1,
                    "name": "testList1"
                },
                {
                    "id": 2,
                    "name": "testList2"
                }
            ];
/*
            if(req.params.id != "2"){
                res.json([]);
            }
*/
            if(lists) {
                res.json(lists);
            }else{
                res.sendStatus(404);
            }

        } catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
    public async create(req: Request, res: Response) {

        try {

            const newList = new list(req.body);
            await newList.save();

            res.sendStatus(202);

        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }

    }

}

export default new ListController;