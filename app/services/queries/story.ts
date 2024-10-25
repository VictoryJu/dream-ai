import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import storyApi from '../apis/story';
import { storyKeys } from '../keys/story';

export const useResetStory = () => {
  return useMutation({
    mutationFn: storyApi.resetStory,
  });
};

export const useStoryPreview = (storyId: string) => {
  return useSuspenseQuery({
    queryKey: storyKeys.preview(storyId),
    queryFn: () => storyApi.fetchStoryPreview(storyId),
    select: (res) => res.data ?? [],
    staleTime: Infinity,
  });
};

export const useUpdateSummaryPage = (storyId: string) => {
  return useMutation({
    mutationFn: () => storyApi.updateSummaryPage(storyId),
  });
};
