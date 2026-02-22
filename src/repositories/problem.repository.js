const { Problem } = require("../models");

class ProblemRepsitory {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        difficulty: problemData.difficulty,
        testCases: problemData.testCases ? problemData.testCases : [],
      });

      return problem;
    } catch (error) {
      throw error;
    }
  }

  async getProblem(id) {
    try {
      const problem = await Problem.findById(id);

      return problem;
    } catch (error) {
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});

      return problems;
    } catch (error) {
      throw error;
    }
  }

  async updateProblem(id, body) {
    try {
      const updatedProblem = await Problem.findByIdAndUpdate(id, body, { new: true });
      return updatedProblem;
    } catch (error) {
      throw error;
    }
  }

  async deleteProblem(id) {
    try {
      const deletedProblem = await Problem.findByIdAndDelete(id);

      return deletedProblem;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProblemRepsitory;
