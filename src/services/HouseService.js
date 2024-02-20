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

    async createHouse(houseData) {
        const createdHouse = await dbContext.Houses.create(houseData)
        return createdHouse
    }

    async updateHouse(houseId, houseData) {
        const houseToUpdate = await this.getHouseById(houseId)

        houseToUpdate.price = houseData.price == undefined ? houseToUpdate.price : houseData.price
        houseToUpdate.imgUrl = houseData.imgUrl || houseToUpdate.imgUrl
        houseToUpdate.description = houseData.description || houseToUpdate.description

        await houseToUpdate.save()
        return houseToUpdate
    }

    async removeHouse(houseId) {
        const houseToRemove = await this.getHouseById(houseId)
        await houseToRemove.deleteOne()
        return 'House has been removed!'
    }
}

export const houseService = new HouseService()