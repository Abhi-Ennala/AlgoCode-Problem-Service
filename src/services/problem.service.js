const NotFoundError = require("../errors/notfound.error");
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
    const updatedProblem = await this.problemRepository.updateProblem(id, body);

    if(!updatedProblem){
      throw new NotFoundError("Problem", id);
    }

    return updatedProblem;
  }

  async deleteProblem(id){
    const deletedProblem = await this.problemRepository.deleteProblem(id);

    if(!deletedProblem){
      throw new NotFoundError("Problem", id);
    }

    return deletedProblem;
  }

}

module.exports = ProblemService;