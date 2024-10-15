import { useMutation } from '@tanstack/react-query';
import storyApi from '../apis/story';

export const useResetStory = () => {
  return useMutation({
    mutationFn: storyApi.resetStory,
  });
};
