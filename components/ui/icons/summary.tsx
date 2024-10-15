import SummaryIconSvg from '@/public/icons/summary.svg';

interface SummaryIconProps {
  width: number;
  height: number;
  className?: string;
}

const SummaryIcon = ({ width, height, className }: SummaryIconProps) => {
  return <SummaryIconSvg width={width} height={height} className={`${className}`} />;
};

export default SummaryIcon;
