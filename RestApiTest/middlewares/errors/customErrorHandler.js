const CustomError = require("../../helpers/error/CustomError")

const customErrorHandler = (err,req,res,next) => {
    
    let customError = err;
    console.log(err.name);
    
    if(err.name ==="SyntaxError"){
      customError = new CustomError("unexpected Syntax",400)
    }
    
    if(err.name === "ValidationError"){
      customError = new CustomError(err.message,400);
    }
    if(err.name === "CastError"){
      customError = new CustomError("Please provide a valid id",400)
    }
    if(err.code === 11000) {
      customError = new CustomError("Duplicate Key Error:check your input",400);
    }
        console.log(customError.message,customError.status);
    res
    .status(customError.status || 500)
    .json({ 
      success: false,
      message: customError.message || "Internal server error"
    });
  }


  module.exports = customErrorHandler;