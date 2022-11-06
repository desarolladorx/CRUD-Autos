const { response } = require('express');
const carModel = require('../models/cars.models');

const addCarService = async (req) => {
    const car = req.body;
    const newCar = new carModel(car);
    await newCar.save();
    return car;
}

const getCarService = async () => {
     return carModel.find();
}

const getCarByMarcaService = async (req) => {
    const { marca } = req.params;
     return carModel.find({marca});
}

const updateCarService = async (req) => {
    const { marca } = req.params;
    const car = req.body;
    const updateCar = await carModel.find({ marca });
    updateCar.modelo = car.modelo;
    updateCar.año = car.año;
    updateCar.marca = car.marca;
    updateCar.fechaDeFabricacion = car.fechaDeFabricacion;
    updateCar.precio = car.precio;
    await updateCar.save();
    return updateCar.marca;
}

const deleteCarService = async (req) => {
    const { modelo } = req.params;
    const response = await carModel.deleteOne({modelo: modelo});
    if (response.deletedCount == 0) throw new Error(`No se encontró el auto ${modelo}.`)
    return modelo;
}

module.exports = { addCarService, getCarService, getCarByMarcaService, updateCarService, deleteCarService }