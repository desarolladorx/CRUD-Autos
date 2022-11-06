const {mongoose, Schema} = require("mongoose");

const CarSchema = new Schema({
    modelo: {
        type: String,
        required: [true, "Que modelo es el auto?"]
    },

    año: {
        type: Number,
        required: [true, "En que año salió el auto?"]
    },

    marca: {
        type: String,
       required: [true, "Que marca es el auto?"]
    },

    fechaDeFabricacion: {
        type : Date, 
        default: new Date()
    },

    precio: {
        type: Number,
        required: [true, "Cuánto cuesta el auto?"]
    }
});

const carModel = mongoose.model("Auto",CarSchema);

module.exports = carModel;

