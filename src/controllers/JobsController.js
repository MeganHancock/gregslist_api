import { jobsService } from "../services/JobsService.js";
import BaseController from "../utils/BaseController.js";

export class JobsController extends BaseController {
    constructor() {
        super('api/jobs')
        this.router
            .get('', this.getJobs)
            .post('', this.createJob)
    }

    /**
* @param {import("express").Request} request
* @param {import("express").Response} response
* @param {import("express").NextFunction} next
*/
    async getJobs(request, response, next) {
        try {
            const jobs = await jobsService.getJobs()
            response.send(jobs)
        } catch (error) {
            next(error)
        }
    }

    async createJob(request, response, next) {
        try {
            const jobData = request.body
            const createdJob = await jobsService.createJob(jobData)
            response.send(createdJob)
        } catch (error) {
            next(error)
        }
    }

}