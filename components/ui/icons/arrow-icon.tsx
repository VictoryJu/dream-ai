import ArrowIconSvg from '@/public/icons/arrow.svg';

interface ArrowIconProps {
  width?: number;
  height?: number;
  stroke?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
}

const ArrowIcon = ({ width, height, stroke = '#7879F1', direction = 'right', className }: ArrowIconProps) => {
  const rotate = {
    left: '180deg',
    up: '270deg',
    down: '90deg',
    right: '0deg',
  };
  return (
    <ArrowIconSvg
      width={width}
      height={height}
      style={{ width: width, height: height, stroke: stroke, transform: `rotate(${rotate[direction]})` }}
      className={className}
    />
  );
};

export default ArrowIcon;
