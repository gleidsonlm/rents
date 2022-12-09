import { hash } from 'bcryptjs';
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { AppError } from '../../../../errors/AppError';

@injectable()
class CreateUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ) {};

    async execute({
        name,
        password,
        email,
        driver_license,
        avatar
    }: ICreateUserDTO): Promise<void> {
        const emailRegistered = await this.usersRepository.findByEmail(email);
        if (emailRegistered) {
            throw new AppError('Email in use already',409)
        };

        const hashedPassword = await hash(password, 10);

        await this.usersRepository.create({
            name,
            password : hashedPassword,
            email,
            driver_license,
            avatar
        })
    }
}

export { CreateUserUseCase }