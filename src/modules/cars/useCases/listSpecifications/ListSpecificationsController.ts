import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListSpecificationsUseCase } from './ListSpecificationsUseCase'

class ListSpecificationsController{
    async handle(request:Request, response:Response): Promise<Response> {
        try {
            const listSpecificationsUseCase = container.resolve(ListSpecificationsUseCase)
            const all = await listSpecificationsUseCase.execute()

            return response.status(200).json(all)
        } catch(error) {
            return response.status(500).json({error:error.message});
        }
    }
};

export { ListSpecificationsController };