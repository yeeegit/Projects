const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const User = require("../models/user");

const blockUser = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findById(id);

  user.blocked = !user.blocked;

  await user.save();

  const blockStatus = user.blocked ? "blocked" : "unblocked";

  return res.status(200).json({
    success: true,
    message: `User ${blockStatus} successfully`,
  });
});

const deleteUser = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;

  // Use deleteOne to delete a single document
  const result = await User.deleteOne({ _id: id });

  if (result.deletedCount === 0) {
    return next(new CustomError("User not found", 404));
  }

  return res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
});


module.exports = {
  blockUser,
  deleteUser
};
