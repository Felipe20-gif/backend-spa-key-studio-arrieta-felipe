import CategoryModel from "../models/categories.model.js"

const dbCreateCategory = async (newCategory) => {
    return await CategoryModel.create(newCategory);  // Registrar en la BD
}

const dbGetCategories = async () => {
    return await CategoryModel.find({status: true}); // consultar todos las categorias registradas
}

const dbDeleteCategory = async (id) => {
    return await CategoryModel.findByIdAndDelete( id );

    // return await CategoryModel.findOneAndDelete
}

const dbUpdateCategory = async ( id, categoryUpdated ) => {
    return await CategoryModel.findByIdAndUpdate( 
        id,                     // El ID del documento que deseamos actualizar
        categoryUpdated,        // El objeto con los datos del Documento que deseamos actualizar
        {new: true}             // COnfiguracion para que retorne el documento actualizado
    );

    //return await CategoryModel.findOneAndUpdate(
    //    { _id: id },        //Objeto de consulta para buscar el documento que deseamos actualizar
    //    categoryUpdated,    // El objeto con los datos del documento que deseamos actulizar
    //    { new: true    }    // Configuracion para que de versionamiento
    //)
}

const dbGetCategory = async (id) => {
    //return await CategoryModel.findById( id );   //obtiene una categoria por su ID
    return await CategoryModel.findOne({ _id: id });

}
export {
    dbCreateCategory,
    dbGetCategories,
    dbDeleteCategory,
    dbUpdateCategory,
    dbGetCategory
}