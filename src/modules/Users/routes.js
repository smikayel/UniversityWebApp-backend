import { Router } from "express"
import {validateSchema, verifyJWT, verifyRoles} from "../../helpers/validations.js"
import {handleGetAllUsers, handleCreateUser, handleDeleteUser, handleUpdateUser} from "./service.js"
import validations from './validation.js'

const { createUserSchema, deleteUserSchema, changePasswordSchema } = validations

const router = Router()

router.get('/', verifyRoles(["Admin"]), handleGetAllUsers);
router.post('/', validateSchema(createUserSchema), verifyRoles(["Admin"]), handleCreateUser);
router.put('/', verifyJWT, verifyRoles(["Admin", "Student", "Teacher"]), validateSchema(changePasswordSchema), handleUpdateUser);
router.delete('/', validateSchema(deleteUserSchema), verifyRoles(["Admin"]), handleDeleteUser)

export { router as usersRoutes }