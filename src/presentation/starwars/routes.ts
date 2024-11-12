import { Router } from 'express';
import { createPlanetController } from './controllers/createPlanetStarwarsController';




export class PalnetRoutes {


  static get routes(): Router {

    const router = Router();
    router.post('/', createPlanetController );

    return router;
  }


}

