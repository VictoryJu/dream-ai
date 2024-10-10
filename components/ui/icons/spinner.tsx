import SpinnerIconSvg from '@/public/icons/spinner.svg';

interface SpinnerIconProps {
  width: number;
  height: number;
  className?: string;
}

const SpinnerIcon = ({ width, height, className }: SpinnerIconProps) => {
  return <SpinnerIconSvg width={width} height={height} className={`animate-spin h-5 w-5 ${className}`} />;
};

export default SpinnerIcon;
