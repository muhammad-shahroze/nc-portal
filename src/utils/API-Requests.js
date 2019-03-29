const axios = require("axios");

const request = axios.create({
  baseURL: "https://ms-ncknews.herokuapp.com/api"
});

export const fetchUsers = async () => {
  const { data } = await request.get("/users");
  return data.users;
};

export const fetchUserByUsername = async username => {
  const { data } = await request.get(`/users/${username}`);
  return data.user;
};

export const fetchArticles = async (topic, sort_by, order, page) => {
  let query = "";
  if (topic || sort_by || order || page) {
    const queryArr = [
      topic ? `topic=${topic}` : "",
      sort_by ? `sort_by=${sort_by}` : "",
      order ? `order=${order}` : "",
      page ? `page=${page}` : ""
    ];
    query +=
      "?" +
      queryArr
        .filter(
          queryType => typeof queryType === "string" && queryType.length > 0
        )
        .join("&");
  }
  const { data } = await request.get(`/articles${query}`);
  return data;
};

export const getArticleById = async article_id => {
  const { data } = await request.get(`/articles/${article_id}`);
  return data.article;
};

export const fetchComments = async () => {
  const { data } = await request.get("/comments");
  return data;
};

export const fetchCommentsByArticleId = async article_id => {
  const { data } = await request.get(`/articles/${article_id}/comments`);
  return data;
};

export const fetchTopics = async () => {
  const { data } = await request.get("/topics");
  return data.topics;
};

export const postArticle = async newArticle => {
  const { data } = await request.post("/articles", newArticle);
  return data.article;
};

export const deleteArticle = async article_id => {
  const { data } = await request.delete(`/articles/${article_id}`);
  return data;
};

export const postTopic = async newTopic => {
  const { data } = await request.post("/topics", newTopic);
  return data.topic;
};

export const postUser = async newUser => {
  const { data } = await request.post("/users", newUser);
  return data.user;
};

export const patchArticle = async (article_id, voteChange) => {
  const { data } = await request.patch(`/articles/${article_id}`, {
    inc_votes: voteChange
  });
  return data.article;
};

export const patchComment = async (comment_id, voteChange) => {
  const { data } = await request.patch(`/comments/${comment_id}`, {
    inc_votes: voteChange
  });
  return data.comment;
};

export const deleteComment = async comment_id => {
  const { data } = await request.delete(`/comments/${comment_id}`);
  return data;
};

export const postCommentByArticleId = async (article_id, newComment) => {
  const { data } = await request.post(
    `/articles/${article_id}/comments`,
    newComment
  );
  return data.comment;
};
