import ArrowTailIconSvg from '@/public/icons/arrow-tail.svg';

interface ArrowTailIconProps {
  width?: number;
  height?: number;
  stroke?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
}

const ArrowTailIcon = ({ width, height, stroke = '#ffffff', direction = 'up', className }: ArrowTailIconProps) => {
  const rotate = {
    left: '270deg',
    up: '0deg',
    down: '180deg',
    right: '90deg',
  };
  return (
    <ArrowTailIconSvg
      width={width}
      height={height}
      style={{ width: width, height: height, stroke: stroke, transform: `rotate(${rotate[direction]})` }}
      className={className}
    />
  );
};

export default ArrowTailIcon;
