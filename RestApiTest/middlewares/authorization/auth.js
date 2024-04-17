const jwt = require("jsonwebtoken");
const CustomError = require("../../helpers/error/CustomError");
const asyncErrorWrapper = require('express-async-handler');
const User = require("../../models/user");
const Question = require("../../models/question");
const Answer = require("../../models/Answer")
const {
  getAccessTokenFromHeader,
  isTokenIncluded,
} = require("../../helpers/authorization/tokenHelpers");

const getAccessToRoute = (req, res, next) => {
  const { JWT_SECRET_KEY } = process.env;

  if (!isTokenIncluded(req)) {
    return next(
      new CustomError("You are not authorized to access this page", 403)
    );
  }

  const accessToken = getAccessTokenFromHeader(req);

  jwt.verify(accessToken, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return next(
        new CustomError("You are not authorized to access this", 401)
      );
    }
    req.user = {
      id: decoded.id,
      name: decoded.name,
    };

    next();
  });
};

const getAdminAccess = asyncErrorWrapper( async(req,res,next)=>{
  const {id} = req.user;

  const user = await User.findById(id);

  if(user.role !== "admin"){
    return next(new CustomError("Only admins can access this route",403))
  }
next();
});

const getQuestionOwnerAccess = asyncErrorWrapper(async(req,res,next)=>{
  const userId = req.user.id;
  const questionId = req.params.id;

  const question = await Question.findById(questionId);

  if(question.user != userId){
    return next(new CustomError("Only owner can handle this operation",403))
  }
  next();
})

const getAnswerOwnerAccess = asyncErrorWrapper(async (req, res, next) => {
  const userId = req.user.id;
  const answerId = req.params.id;

  const answer = await Answer.findById(answerId);

  if (!answer) {
    return next(new CustomError("Answer not found", 404));
  }

  if (answer.user != userId) {
    return next(new CustomError("Only the owner can handle this operation", 403));
  }

  next();
});


module.exports = {
  getAccessToRoute,
  getAdminAccess,
  getQuestionOwnerAccess,
  getAnswerOwnerAccess

};
