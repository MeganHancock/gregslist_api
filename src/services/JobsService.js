import { dbContext } from "../db/DbContext.js"

class JobsService {



    async getJobs() {
        const jobs = await dbContext.Jobs.find()
        return jobs

    }

    async createJob(jobData) {
        const createdJob = dbContext.Jobs.create(jobData)
        return createdJob
    }
}

export const jobsService = new JobsService()