import { Request, Response } from 'express';

class ListController {

    public async index(req: Request, res: Response) {

        try{
            const lists: Array<Object> | null = [
                {
                    "name": "testList1"
                },
                {
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
        res.sendStatus(200);
    }
}

export default new ListController;