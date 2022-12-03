import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoriesUseCase } from './ListCategoriesUseCase'

class ListCategoriesController{
    async handle(request:Request, response:Response): Promise<Response> {
        try {
            const listCategoriesUseCase = container.resolve(ListCategoriesUseCase)
            const all = await listCategoriesUseCase.execute()

            return response.status(200).json(all)
        } catch(error) {
            return response.status(500).json({error:error.message});
        }
    }
};

export { ListCategoriesController };