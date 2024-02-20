import { dbContext } from "../db/DbContext.js"

class JobsService {


    async getJobs() {
        const jobs = await dbContext.Jobs.find()
        return jobs

    }


}

export const jobsService = new JobsService()