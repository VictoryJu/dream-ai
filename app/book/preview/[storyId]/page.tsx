import { createServerStoryApi } from '@/app/services/apis/story';
import { storyKeys } from '@/app/services/keys/story';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { cookies } from 'next/headers';
import BookPreview from './book-preview';

interface BookPreviewPageProps {
  params: {
    storyId: string;
  };
}

const BookPreviewPage = async ({ params }: BookPreviewPageProps) => {
  const { storyId } = params;
  const queryClient = new QueryClient();
  const serverToken = cookies().get('accessToken')?.value;

  const serverStoryApi = createServerStoryApi(serverToken ?? '');
  await queryClient.prefetchQuery({
    queryKey: storyKeys.preview(storyId),
    queryFn: () => serverStoryApi.fetchStoryPreview(storyId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BookPreview storyId={storyId} />
    </HydrationBoundary>
  );
};

export default BookPreviewPage;
