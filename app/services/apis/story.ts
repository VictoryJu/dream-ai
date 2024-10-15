import apiClient from './instance/instance';

const resetStory = (storyId: number) => {
  return apiClient<void>('/stories/reset', {
    method: 'POST',
    body: JSON.stringify({
      storyId,
    }),
  });
};

const storyApi = {
  resetStory,
};

export default storyApi;
