import { Router } from 'express';
import ListController from '../controllers/list.controller';

class ListRoutes {
    
    public router: Router = Router();

    constructor(){
        this.router.get('/list', ListController.index);
        this.router.get('/list/:id', ListController.detail);
    }
}

export const listRoutes = new ListRoutes().router;
