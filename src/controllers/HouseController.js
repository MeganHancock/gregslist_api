import { houseService } from "../services/HouseService.js";
import BaseController from "../utils/BaseController.js";

export class HouseController extends BaseController {

    constructor() {
        super('api/houses')
        this.router
            .get('', this.getHouses)
            .get('/:houseId', this.getHouseById)
            .post('', this.createHouse)
            .put('/:houseId', this.updateHouse)
    }

    /**
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @param {import("express").NextFunction} next
 */
    async getHouses(request, response, next) {
        try {
            const houses = await houseService.getHouses()
            response.send(houses)
        } catch (error) {
            next(error)
        }
    }

    /**
    * @param {import("express").Request} request
    * @param {import("express").Response} response
    * @param {import("express").NextFunction} next
    */
    async getHouseById(request, response, next) {
        try {
            const houseId = request.params.houseId
            const house = await houseService.getHouseById(houseId)
            response.send(house)
        } catch (error) {
            next(error)
        }
    }


    /**
    * @param {import("express").Request} request
    * @param {import("express").Response} response
    * @param {import("express").NextFunction} next
    */
    async createHouse(request, response, next) {
        try {
            const houseData = request.body
            const createdHouse = await houseService.createHouse(houseData)
            response.send(createdHouse)
        } catch (error) {
            next(error)
        }
    }

    async updateHouse(request, response, next) {
        try {
            const houseId = request.params.houseId
            const houseData = request.body
            const updatedHouse = await houseService.updateHouse(houseId, houseData)
            response.send(updatedHouse)
        } catch (error) {
            next(error)
        }

    }

}