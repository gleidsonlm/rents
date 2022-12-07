import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../errors/AppError';

interface IPayload {
    sub: string;
}

export async function isAuthenticated(request: Request, response: Response, next: NextFunction) {

    try {
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            throw new AppError('Missing authorization header', 401);
        };
        
        const [, token] = authHeader.split(' ');
        const { sub: user_id } = verify(token, process.env.JWT_SECRET) as IPayload;
        if (!user_id) {
            throw new AppError('Invalid token', 401);
        };        
        
        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(user_id);
        if (!user) {
            throw new AppError('User not found', 401);
        };
        
        next();
    } catch (error) {
        throw new AppError('Invalid authorization header', 401);
    }
}