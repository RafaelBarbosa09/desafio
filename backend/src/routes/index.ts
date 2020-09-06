import { Router } from 'express';
import polosRouter from './polos.routes';
import ordensRouter from  './ordensDeServico.routes';

const routes = Router();

routes.use('/polos', polosRouter);
routes.use('/ordens-de-servico', ordensRouter);

export default routes;