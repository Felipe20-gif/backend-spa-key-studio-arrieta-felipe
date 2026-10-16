import {dbCreateCategory, dbDeleteCategory, dbGetCategories, dbGetCategory, dbUpdateCategory} from '../services/categories.services.js'

const createCategory = async (req, res) => {

    try {
        // Extrae los datos del cuerpo de la peticion
         const inputData = req.body;

        // Usar el servicio para registrar
        const data = await dbCreateCategory( inputData );

        res.json({msg: 'Registra categoria', data: data});
        
    } catch (error) {
        console.error(error);

        res.json({msg: 'No se pudo registrar la categoria'})
    }
    
}

const getCategories = async (req, res) => {
    try {
    const data = await dbGetCategories();

    res.json({
        msg: 'Lista de categorias',
        data: data
    });
        
    } catch (error) {
        console.error(error)
        
         res.json({msg: 'No se pudo obtener la categoria'})
    }
    
}


const deleteCategory = async (req, res) => {

    try {
    const id = req.params.id;

    const data = await dbDeleteCategory(id);

    res.json({ 
        msg: 'Elimina una categoria', 
        data: data
     });
        
    } catch (error) {
        console.error(error);

        res.json({msg: 'No se pudo eliminar la categoria'})
    }
}

const UpdateCategory = async (req, res) => {
    try {
    const id = req.params.id;
    const inputData = req.body;

    const data = await dbUpdateCategory( id, inputData )

    res.json({
        msg: 'Categora Actualizada',
        data: data
    });
        
    } catch (error) {
        console.error(error);

        res.json({msg: 'No se ha podido actualizar la categoria'})
    }
  
}

const getCategory = async (req, res) => {
    try {
        const id = req.params.id;

        const data = await dbGetCategory(id)

        res.json({
            msg: 'Obtiene una categoria',
            data: data
        })
    } catch (error) {
        console.error(error);

        res.json({msg: 'No se pudo obtener categoria por ID'})
    }
}

export {
    createCategory,
    getCategories,
    deleteCategory,
    UpdateCategory,
    getCategory

}