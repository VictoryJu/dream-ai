import createApiClient from './instance/instance';
import { StoryPreviewResponseType } from './types/story';

const createStoryApi = (config?: { serverToken?: string }) => {
  const apiClient = createApiClient(config);

  return {
    fetchStoryPreview: (storyId: string) => {
      return apiClient<StoryPreviewResponseType>('/story/get-previewPages', {
        method: 'GET',
        params: { storyId },
      });
    },

    updateSummaryPage: (storyId: string) => {
      return apiClient<void>('/story/add-pages', {
        method: 'POST',
        params: {
          storyId,
        },
      });
    },

    resetStory: (storyId: number) => {
      return apiClient<void>('/story/new-chat', {
        method: 'POST',
        body: JSON.stringify({ storyId }),
      });
    },
  };
};

// 클라이언트용 기본 인스턴스
const storyApi = createStoryApi();
export default storyApi;

// 서버용 인스턴스 생성 함수
export const createServerStoryApi = (serverToken: string) => createStoryApi({ serverToken });
