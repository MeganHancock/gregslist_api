import { jobsService } from "../services/JobsService.js";
import BaseController from "../utils/BaseController.js";

export class JobsController extends BaseController {
    constructor() {
        super('api/jobs')
        this.router
            .get('', this.getJobs)
            .get('/:jobId', this.getJobById)
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

    /**
    * @param {import("express").Request} request
    * @param {import("express").Response} response
    * @param {import("express").NextFunction} next
    */
    async createJob(request, response, next) {
        try {
            const jobData = request.body
            const createdJob = await jobsService.createJob(jobData)
            response.send(createdJob)
        } catch (error) {
            next(error)
        }
    }
    /**
    * @param {import("express").Request} request
    * @param {import("express").Response} response
    * @param {import("express").NextFunction} next
    */
    async getJobById(request, response, next) {
        try {
            const jobId = request.params.jobId
            const foundJob = await jobsService.getJobById(jobId)
            response.send(foundJob)
        } catch (error) {
            next(error)
        }
    }

}