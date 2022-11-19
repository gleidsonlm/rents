import { Request, Response } from 'express';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
    constructor (private createSpecificationUseCase: CreateSpecificationUseCase) {}


    async handle(request:Request, response:Response): Promise <Response> {
        const { name, description } = request.body;
    
        try { 
            await this.createSpecificationUseCase.execute({ name,description });

            return response.status(201).send();
        } catch (error) {

            return response.status(409).json({error:error.message});
        }
    }
};
export {CreateSpecificationController};