import { Button } from '@/components/ui/button';
import ArrowTailUpIcon from '@/components/ui/icons/arrow-tail-up-icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const EditorIndex = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex rounded-lg  w-[100%] py-[63px]   bg-white shadow-[0px_0.4px_8px_0px_rgba(0,0,0,0.05)]">
      {children}
    </div>
  );
};

const Section = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex-1  px-[63px]">{children}</div>;
};

interface ImageSectionProps {
  src: string;
  alt: string;
}

const ImageSection = ({ src, alt }: ImageSectionProps) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative w-full h-full max-w-[463px] max-h-[463px] rounded-[5px] overflow-hidden">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
};

interface TextInputProps {
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const TextInput = ({ title, value, onChange, placeholder, className }: TextInputProps) => (
  <div className={cn('mb-[25px]', className)}>
    <div className="text-black-description text-[22px] leading-[33px] font-bold">{title}</div>
    <Input
      className="mt-[20px] focus:outline-none focus:ring-1 focus:ring-purple-main"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

interface ImagePromptProps {
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isImagePrompt?: boolean;
}

const TextArea = ({ title, value, onChange, isImagePrompt }: ImagePromptProps) => (
  <>
    <div className="text-black-description text-[22px] leading-[33px] font-bold mt-[25px]">{title}</div>
    <div className="relative w-full max-w-xl">
      <Textarea
        placeholder="이미지 생성 프롬프트를 입력해주세요."
        className="w-full mt-[20px] p-4 pr-16 border rounded-lg h-32 focus:outline-none focus:ring-1 focus:ring-purple-main resize-none"
        value={value}
        onChange={onChange}
      />
      {isImagePrompt && (
        <div className="absolute h-full right-2 top-[20%] flex flex-col space-y-2">
          <Button className="flex items-center justify-center w-10 h-10 bg-purple-200 rounded-lg shadow-md hover:bg-purple-200/80 p-[7px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4-4m0 0l-4 4m4-4v12"
              />
            </svg>
          </Button>
          <Button className="flex items-center justify-center w-10 h-10 rounded-lg shadow-md p-[7px]">
            <ArrowTailUpIcon direction="up" />
          </Button>
        </div>
      )}
    </div>
  </>
);

const Divider = () => <div className="w-[1px]  bg-gray-border" />;

EditorIndex.Section = Section;
EditorIndex.ImageSection = ImageSection;
EditorIndex.TextInput = TextInput;
EditorIndex.TextArea = TextArea;
EditorIndex.Divider = Divider;

export default EditorIndex;
