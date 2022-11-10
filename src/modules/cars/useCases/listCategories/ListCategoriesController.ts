import { Request, Response } from 'express'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

class ListCategoriesController{

    constructor(private listCategoriesUseCase: ListCategoriesUseCase) { }

    handle(request:Request, response:Response): Response {
        try {
            const all = this.listCategoriesUseCase.execute()

            return response.status(200).json(all)
        } catch(error) {
            console.log(error)
            return response.status(500).send();
        }

    }
};

export { ListCategoriesController };