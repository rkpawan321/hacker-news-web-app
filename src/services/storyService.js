import axios from 'axios';

async function getStories() {
  const url = `https://hacker-news.firebaseio.com/v0/topstories.json`;
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
    responseType: 'json',
    responseEncoding: 'utf8',
    url,
  };
  const result = await axios(options);
  return result;
};

async function getStoryById(storyId) {
  const url = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`;
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
    responseType: 'json',
    responseEncoding: 'utf8',
    url,
  };
  const result = await axios(options);
  return result;
};

export const storyService = {
    getStories,
    getStoryById,
};
