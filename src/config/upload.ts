import crypto from 'crypto';
import multer from 'multer';
import { resolve } from 'path';


export default {
    upload (folder: string) {
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname,'..','..',folder),
                filename: (request, file, callback) => {
                    const fileHash = crypto.createHash('sha1');
                    fileHash.update(file.originalname);
                    const fileHex = fileHash.digest('hex');

                    const fileExtension = file.mimetype.split('/')[1];

                    const fileName = `${fileHex}.${fileExtension}`;

                    callback(null, fileName);
                }
            })
        }   
    }
}