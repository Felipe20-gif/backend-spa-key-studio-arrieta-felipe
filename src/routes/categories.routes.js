import { Router } from "express"
import { createCategory, deleteCategory, getCategories, getCategory, UpdateCategory } from "../controllers/categories.controllers.js";

 // Crea una instancia de las rutas de express
const router = Router();   

// Define las rutas para las categorias 
router.post( '/', createCategory );
router.get( '/', getCategories );
router.delete( '/:id', deleteCategory );
router.patch( '/:id', UpdateCategory);
router.get( '/:id', getCategory);

// Exportar las rutas definidas de este archivo
export default router;