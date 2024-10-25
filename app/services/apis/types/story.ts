import { ApiResponse } from './instance';

export interface Book {
  imageId: number;
  image_url: string;
  pageId: number;
  pageNum: number;
  sceneSummary: string;
  sceneTitle: string;
  status: 'ING' | 'COMPLETE' | 'SAVE' | '';
}

export type StoryPreviewResponseType = ApiResponse<Book[]>;
