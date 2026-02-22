const logger = require("../config/logger.config");
const NotFoundError = require("../errors/notFound.error");
const { markdownSanitizer } = require("../utils");

class ProblemService {

  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    problemData.description = markdownSanitizer(problemData.description);
    const problem = await this.problemRepository.createProblem(problemData);
    return problem;
  }

  async getProblem(id) {
    const problem = await this.problemRepository.getProblem(id);

    if(!problem){
      throw new NotFoundError("Problem", id);
    }

    return problem;
  }

  async getAllProblems() {
    const problems = await this.problemRepository.getAllProblems();
    return problems;
  }

  async updateProblem(id, body){

    if(body.description)
      body.description =  markdownSanitizer(body.description);

    const updatedProblem = await this.problemRepository.updateProblem(id, body);

    if(!updatedProblem){
      throw new NotFoundError("Problem", id);
    }

    return updatedProblem;
  }

  async deleteProblem(id){
    const deletedProblem = await this.problemRepository.deleteProblem(id);

    if(!deletedProblem){
      logger.error(`Problem with id: ${id} does not exist in the database`);
      throw new NotFoundError("Problem", id);
    }

    return deletedProblem;
  }

}

module.exports = ProblemService;