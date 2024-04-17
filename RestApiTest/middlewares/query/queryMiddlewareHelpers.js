const { model } = require("mongoose");

const searchHelper = (searchKey, query, req) => {
  if (req.query.search) {
    const searchObject = {};

    const regex = new RegExp(req.query.search, "i");
    searchObject["title"] = regex;

    return (query = query.where(searchObject));
  }
  return query;
};
const populateHelper = (query, population) => {
  return query.populate(population);
};
const questionSortHelper = (query, req) => {
  const sortKey = req.query.sortBy;

  if (sortKey === "most-answered") {
    return (query = query.sort("-answerCount"));
  }
  if (sortKey === "most-liked") {
    return query.sort("-likeCount");
  }
  return query.sort("-createdAt");
};
const paginationHelper = async (totalDocument, query, req) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 6;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const pagination = {};

  if (startIndex > 0) {
    pagination.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  if (endIndex < totalDocument) {
    pagination.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (query) {
    query = query.skip(startIndex).limit(limit);
  }

  return {
    query: query,
    pagination: pagination,
    startIndex: startIndex,
    limit: limit,
  };
};

  
module.exports = {
  searchHelper,
  populateHelper,
  questionSortHelper,
  paginationHelper,
};
