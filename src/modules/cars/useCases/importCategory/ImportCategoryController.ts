import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
    handle( request: Request, response: Response ): Response {
        try {
            const { file } = request;

            const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

            importCategoryUseCase.execute(file)

            return response.status(200).send();            
        } catch (error) {

            return response.status(400).json({error:error.message});
        }
        
    }
}

export { ImportCategoryController }