import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

interface IRequest {
    name: string;
    description: string;
};

class CreateCategoryUseCase {
    constructor(private categoriesRepository: CategoriesRepository) { }

    async execute({name,description}: IRequest):Promise<void> {

        const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error('Category name is being used already.');
        };
        
        this.categoriesRepository.create({ name, description });
    };
};

export { CreateCategoryUseCase };