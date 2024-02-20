import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class HouseService {


    async getHouses() {
        const houses = await dbContext.Houses.find()
        return houses
    }

    async getHouseById(houseId) {
        const house = await dbContext.Houses.findById(houseId)
        if (!house) {
            throw new BadRequest(`There is no car that matched the ID of ${houseId}`)
        }
        return house
    }
}

export const houseService = new HouseService()