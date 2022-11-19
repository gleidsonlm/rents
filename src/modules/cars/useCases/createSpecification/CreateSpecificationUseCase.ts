import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';

interface IRequest {
    name: string;
    description: string;
};

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: SpecificationsRepository) { }

    async execute({name,description}: IRequest):Promise<void> {

        const specificationAlreadyExists = await this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error('Specification name is being used already.');
        };
        
        this.specificationsRepository.create({ name, description });
    };
};

export { CreateSpecificationUseCase };