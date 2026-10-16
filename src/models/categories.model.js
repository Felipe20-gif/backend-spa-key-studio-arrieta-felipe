import {Schema, model} from 'mongoose';

//Definir la estructura de mi documento
const CategorySchema = new Schema( 
    // Definir la estructura de datos
    {
        name: {
            type: String,
            unique: true,
            minlength: 5
        },
        description: 
        String,
        status: {
            type: Boolean,
            default: true
        }
    },
    // configuracion de la estrucutra de datos
    {
        timestamps: true,  
        versionKey: false
    });

//Definir el model a partir de la estructura del documento
const CategoryModel = model(
    'category',        // Nombre de la collection donde se guardaran los documentos de tipo categoria
    CategorySchema     // Schema (estructura de datos) que se guardara en coleccion
);

// Exportamos el modelo para que pueda ser usado por los servicios
export default CategoryModel;