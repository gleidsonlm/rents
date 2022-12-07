import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {

    async handle(request:Request, response: Response): Promise<Response> {
        try {
            const { password, email } = request.body;

            const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);
    
            const token = await authenticateUserUseCase.execute({email, password});
    
            return response.status(200).json(token);
        } catch (error) {
            return response.status(400).json({message: error.message});
        }
    }
}

export { AuthenticateUserController }