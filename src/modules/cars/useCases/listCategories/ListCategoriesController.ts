import { Request, Response } from 'express'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

class ListCategoriesController{

    constructor(private listCategoriesUseCase: ListCategoriesUseCase) { }

    async handle(request:Request, response:Response): Promise<Response> {
        try {
            const all = await this.listCategoriesUseCase.execute()

            return response.status(200).json(all)
        } catch(error) {

            return response.status(500).json({error:error.message});
        }

    }
};

export { ListCategoriesController };