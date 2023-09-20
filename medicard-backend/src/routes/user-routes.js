import { Router } from "express";
import { methods as userController } from "../controllers/user-controller.js";
import validateToken from "./validate-token.js";

const router = Router();

router.get("/activos", validateToken, userController.getActiveUsers);
router.get("/", validateToken, userController.getAllUsers);
router.post("/", validateToken,userController.addUser);
router.delete("/:ci", validateToken, userController.deleteUser);
//router.put("/:ci", userController.updateUser);
router.get("/:ci", userController.getUserByCI);
router.get("/:id", userController.getUserByID);
router.get("/:codigo", userController.getUserByCode);
//router.put("/:id", validateToken, userController.updateUserID);

router.put("/:id", validateToken, userController.updateActivationDate);

export default router;