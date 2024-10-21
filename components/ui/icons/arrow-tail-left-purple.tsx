import ArrowTailLeftPurpleSvg from '@/public/icons/arrow-tail-left-purple.svg';

interface ArrowTailLeftPurpleProps {
  width?: number;
  height?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
}

const ArrowTailLeftPurple = ({ width = 14, height = 16, direction = 'up', className }: ArrowTailLeftPurpleProps) => {
  const rotate = {
    left: '0deg',
    up: '270deg',
    down: '90deg',
    right: '180deg',
  };
  return (
    <ArrowTailLeftPurpleSvg
      width={width}
      height={height}
      style={{ width: width, height: height, transform: `rotate(${rotate[direction]})` }}
      className={className}
    />
  );
};

export default ArrowTailLeftPurple;
