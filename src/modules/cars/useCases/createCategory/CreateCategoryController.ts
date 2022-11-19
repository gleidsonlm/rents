import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { Request, Response } from 'express';

class CreateCategoryController {

    constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;
    
        try { 
            await this.createCategoryUseCase.execute({ name,description });

            return response.status(201).send();
        } catch (error) {

            return response.status(409).json({error:error.message});
        }    
    }

}

export { CreateCategoryController }