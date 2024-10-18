import apiClient from './instance/instance';

const resetStory = (storyId: number) => {
  return apiClient<void>('/story/new-chat', {
    method: 'POST',
    body: JSON.stringify({
      storyId,
    }),
  });
};

const fetchStoryPreview = (storyId: string) => {
  return apiClient<void>('/story/get-previewPages', {
    method: 'GET',
    params: {
      storyId,
    },
  });
};

const storyApi = {
  resetStory,
  fetchStoryPreview,
};

export default storyApi;
