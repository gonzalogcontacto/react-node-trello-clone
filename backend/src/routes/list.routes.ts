import { Router } from 'express';
import ListController from '../controllers/list.controller';

class ListRoutes {
    
    public router: Router = Router();

    constructor(){
        this.router.get('/list', ListController.index);
        this.router.get('/list/:id/tasks', ListController.detail);
        this.router.post('/list', ListController.create);

    }
}

export const listRoutes = new ListRoutes().router;
