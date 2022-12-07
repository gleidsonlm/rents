import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
    async handle( request: Request, response: Response ): Promise<Response> {
        const { file } = request;

        if(!file) {
            throw new AppError('Could not read file', 400)
        }

        const importCategoryUseCase = container.resolve(ImportCategoryUseCase);
        await importCategoryUseCase.execute(file)

        return response.status(200).send();            
    }
}

export { ImportCategoryController }