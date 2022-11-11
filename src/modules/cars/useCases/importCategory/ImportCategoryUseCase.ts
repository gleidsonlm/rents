import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'
import { parse as csvParse } from "csv-parse";
import fs from 'fs';

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor( private categoriesRepository: ICategoriesRepository ) {}

    loadCategories(file:Express.Multer.File):Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const categories:IImportCategory[] = [];

            const stream = fs.createReadStream(file.path);
            
            const parseFile = csvParse();
    
            stream.pipe(parseFile);
    
            parseFile.on('data', async (row:any) => {
                const [name, description] = row;
                categories.push({ name, description });
            })
            .on('end', () => {
                fs.promises.unlink(file.path)
                resolve(categories);
            })
            .on('error', (err) => {
                reject(err);
            })
        });
    };
    
    async execute(file:Express.Multer.File):Promise<IImportCategory[]> {
        const categories = await this.loadCategories(file);
        const createdCategories:IImportCategory[] = [];

        categories.map((category) => {
            const { name, description } = category;
            const existCategory = this.categoriesRepository.findByName(name);

            if (!existCategory) {
                this.categoriesRepository.create({ name, description });
                createdCategories.push({ name, description });
            }
        })
        // todo: return the createds categories 
        // console.log( createdCategories )
        return createdCategories;
    }
}
export { ImportCategoryUseCase }