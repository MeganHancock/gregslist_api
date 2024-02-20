import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class JobsService {



    async getJobs() {
        const jobs = await dbContext.Jobs.find()
        return jobs

    }

    async createJob(jobData) {
        const createdJob = dbContext.Jobs.create(jobData)
        return createdJob
    }

    async getJobById(jobId) {
        const job = await dbContext.Jobs.findById(jobId)
        if (!job) {
            throw new BadRequest(`There is no car that matched the ID of ${jobId}`)
        }
        return (job)
    }

}

export const jobsService = new JobsService()