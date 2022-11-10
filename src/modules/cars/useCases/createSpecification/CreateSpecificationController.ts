import { Request, Response } from 'express';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository'

class CreateSpecificationController {
    constructor (private createSpecificationUseCase: CreateSpecificationUseCase) {}


    handle(request:Request, response:Response): Response {
        const { name, description } = request.body;
    
        try { 
            this.createSpecificationUseCase.execute({ name,description });
            return response.status(201).send();
        } catch (error) {
            console.log(error)
            return response.status(409).send(error);
        }
    }
};
export {CreateSpecificationController};