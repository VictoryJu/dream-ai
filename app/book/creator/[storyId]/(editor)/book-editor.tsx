import { Book } from '@/app/services/apis/types/story';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import EditorIndex from './editor-index';

interface BookEditorProps {
  story: Book;
  bookLength: number;
}

const BookEditor = ({ story, bookLength }: BookEditorProps) => {
  const { sceneTitle, sceneSummary, image_url, pageNum } = story;
  console.log(story);

  const isAuthPage = pageNum === 1;
  const isEndPage = pageNum === bookLength;

  const shoduleDisplayDescription = !isAuthPage && !isEndPage;

  const [authorName, setAuthorName] = useState('');
  const [title, setTitle] = useState(sceneTitle);
  const [imagePrompt, setImagePrompt] = useState('');
  const [description, setDescription] = useState(sceneSummary);
  const [lastWords, setLastWords] = useState('');

  return (
    <>
      <div className="flex justify-end mb-[18px]">
        <Button className="h-[60px] px-[24px] text-[22px] bg-gray-100 text-gray-300 hover:bg-gray-100/80">
          최종 제출
        </Button>
      </div>
      <EditorIndex>
        <EditorIndex.Section>
          <EditorIndex.ImageSection src={image_url} alt="image" />
        </EditorIndex.Section>
        <EditorIndex.Divider />
        <EditorIndex.Section>
          <EditorIndex.TextInput title="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
          {isAuthPage && (
            <EditorIndex.TextInput
              title="작가명"
              placeholder="작가명을 입력해주세요."
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
            />
          )}

          {shoduleDisplayDescription && (
            <EditorIndex.TextArea title="내용" value={description} onChange={(e) => setDescription(e.target.value)} />
          )}

          {isEndPage && (
            <EditorIndex.TextInput
              title="마지막 한마디"
              value={lastWords}
              onChange={(e) => setLastWords(e.target.value)}
            />
          )}
          <EditorIndex.TextArea
            title="이미지"
            isImagePrompt={true}
            value={imagePrompt}
            onChange={(e) => setImagePrompt(e.target.value)}
          />
        </EditorIndex.Section>
      </EditorIndex>
    </>
  );
};

export default BookEditor;
