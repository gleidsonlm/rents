import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { Request, Response } from 'express';

class CreateCategoryController {

    constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;
    
        try { 
            this.createCategoryUseCase.execute({ name,description });

            return response.status(201).send();
        } catch (error) {

            return response.status(409).send(error);
        }    
    }

}

export { CreateCategoryController }