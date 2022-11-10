import { Request, Response } from 'express'
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase'

class ListSpecificationsController{

    constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) { }

    handle(request:Request, response:Response): Response {
        try {
            const all = this.listSpecificationsUseCase.execute()

            return response.status(200).json(all)
        } catch(error) {
            console.log(error)
            return response.status(500).send();
        }

    }
};

export { ListSpecificationsController };