import { hash } from 'bcryptjs';
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

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
        driver_license
    }: ICreateUserDTO): Promise<void> {
        const emailRegistered = await this.usersRepository.findByEmail(email);
        if (emailRegistered) {
            throw new Error('Email in use already')
        };

        const hashedPassword = await hash(password, 10);

        await this.usersRepository.create({
            name,
            password : hashedPassword,
            email,
            driver_license
        })
    }
}

export { CreateUserUseCase }