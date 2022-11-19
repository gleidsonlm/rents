import { Request, Response } from 'express'
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase'

class ListSpecificationsController{

    constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) { }

    async handle(request:Request, response:Response): Promise<Response> {
        try {
            const all = await this.listSpecificationsUseCase.execute()

            return response.status(200).json(all)
        } catch(error) {

            return response.status(500).json({error:error.message});
        }

    }
};

export { ListSpecificationsController };