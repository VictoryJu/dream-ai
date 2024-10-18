import React, { Suspense } from 'react';
import BookPreview from '../book-preview';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { storyKeys } from '@/app/services/keys/story';
import storyApi from '@/app/services/apis/story';

interface BookPreviewPageProps {
  params: {
    storyId: string;
  };
}

const BookPreviewPage = ({ params }: BookPreviewPageProps) => {
  const { storyId } = params;
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryKey: storyKeys.preview(storyId),
    queryFn: () => storyApi.fetchStoryPreview(storyId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BookPreview storyId={storyId} />
    </HydrationBoundary>
  );
};

export default BookPreviewPage;
