import { Request, Response } from 'express';

class ListController {

    public async index(req: Request, res: Response) {

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
        console.log(req.body)
        res.json(req.body);
    }

}

export default new ListController;