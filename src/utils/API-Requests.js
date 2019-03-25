const axios = require("axios");

const request = axios.create({
  baseURL: "https://ms-ncknews.herokuapp.com/api"
});

export const fetchUsers = async () => {
  const { data } = await request.get("/users");
  return data.users;
};

export const fetchArticles = async () => {
  const { data } = await request.get("/articles");
  return data.articles;
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

export const patchArticleVotes = async (article_id, voteChange) => {
  const { data } = await request.patch(`/articles/${article_id}`, {
    inc_votes: voteChange
  });
  return data.article;
};

export const deleteComment = async comment_id => {
  const { data } = await request.delete(`/articles/${comment_id}`);
  return data;
};

export const postCommentByArticleId = async (article_id, newComment) => {
  const { data } = await request.post(
    `/articles/${article_id}/comment`,
    newComment
  );
  return data.comment;
};