import { Router } from 'express'
import multer from 'multer';

import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController'
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';
import { isAuthenticated } from '../middlewares/isAuthenticated';
import uploadConfig from '../config/upload'

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload(`${process.env.DATA}/avatar`));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.patch(
'/avatar',
isAuthenticated,
uploadAvatar.single('avatar'),
updateUserAvatarController.handle);

export { usersRoutes };