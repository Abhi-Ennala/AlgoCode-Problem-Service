const NotImplementedError = require('../errors/notImplemented.error');
const { ProblemService } = require('../services');
const { ProblemRepsitory } = require('../repositories');
const { StatusCodes } = require('http-status-codes');

const problemService = new ProblemService(new ProblemRepsitory());

function pingProblemController(req, res) {
  return res.json({ message: 'Problem controller is up' });
}

async function addProblem(req, res, next) {
  try{

    const newProblem = await problemService.createProblem(req.body)
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created a new problem",
      error: {},
      data: newProblem
    });

  }catch(error){
    next(error);
  }
}

async function getProblem(req, res, next) {
 try{
  const problem = await problemService.getProblem(req.params.id);

  return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched the problem",
      error: {},
      data: problem
    });

  }catch(error){
    next(error);
  }
}

async function getProblems(req, res, next) {
  try{

    const allProblems = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all problems",
      error: {},
      data: allProblems
    });

  }catch(error){
    next(error);
  }
}

async function deleteProblem(req, res, next) {
 try{
    const deletedProblem = await problemService.deleteProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully deleted problem",
      error: {},
      data: deletedProblem
    });
    
  }catch(error){
    next(error);
  }
} 

async function updateProblem(req, res, next) {
 try{
  const updatedProblem = await problemService.updateProblem(req.params.id, req.body);
  return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully updated problem",
      error: {},
      data: updatedProblem
    });

  }catch(error){
    next(error);
  }
}

module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem
}