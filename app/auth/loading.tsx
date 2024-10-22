import SpinnerIcon from '@/components/ui/icons/spinner';

const LoginLoading = () => {
  return (
    <div className="flex justify-center items-center bg-black/50 fixed top-0 left-0 w-calcScreen h-calcScreen">
      <SpinnerIcon width={16} height={16} />
    </div>
  );
};

export default LoginLoading;
