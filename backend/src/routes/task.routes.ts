import { Router } from 'express';
import TaskController from '../controllers/task.controller';

class TaskRoutes {
    
    public router: Router = Router();

    constructor(){
        this.router.post('/', TaskController.create);
    }
}

export const taskRoutes = new TaskRoutes().router;
