const { addCarService, getCarService, getCarByMarcaService, updateCarService, deleteCarService } = require("../services/carServices");


const addCarController = async (req, res) => {
    try {
        const addCar = await addCarService(req)
        res.status(201).json({message: `Agregado el auto ${addCar.modelo}`})
    } catch (error) {
        console.log(error);
        res.json({message: error.message})  
    }
}

const getCarController = async (req, res) => {
    try {
       const cars = await getCarService();
       res.json(cars);
    } catch (error) {
       console.log(error);
       res.json({message: error.message})
    }
}

const getCarByMarcaController = async (req, res) => {
    try {
       const cars = await getCarByMarcaService(req);
       res.json(cars);
    } catch (error) {
       console.log(error);
       res.json({message: error.message})
    }
}

const updateCarController = async (req, res) => {
    try {
       const updateCar = await updateCarService(req);
       res.status(200).json({message: `Modificado el auto ${updateCar.marca}`})
    } catch (error) {
        console.log(error);
        res.json({message: error.message})
    }
}

const deleteCarController = async (req, res) => {
    try {
        const deleteCar = await deleteCarService(req);
        res.json({message: `Auto ${deleteCar} borrado exitosamente`})
    } catch (error) {
        console.log({message: error.message});
    }
}

module.exports = { addCarController, getCarController,getCarByMarcaController, updateCarController, deleteCarController }