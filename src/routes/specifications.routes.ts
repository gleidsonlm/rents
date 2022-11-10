import { Router } from 'express';
import { SpecificationsRepository }  from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const createSpecificationService = new CreateSpecificationService(specificationsRepository);

    try { 
        createSpecificationService.execute({ name,description });
        return response.status(201).send();
    } catch (error) {
        return response.status(500).send({error});
    }
});

specificationsRoutes.get("/", (request, response) => {
    const specifications = specificationsRepository.list();
    
    return response.status(200).send(specifications);
})

export {specificationsRoutes};