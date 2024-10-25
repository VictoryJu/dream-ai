import ArrowTailUpIconSvg from '@/public/icons/arrow-tail-up.svg';

interface ArrowTailUpIconProps {
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
}

const ArrowTailUpIcon = ({ direction = 'up', className }: ArrowTailUpIconProps) => {
  const rotate = {
    left: '270deg',
    up: '0deg',
    down: '180deg',
    right: '90deg',
  };
  return <ArrowTailUpIconSvg style={{ transform: `rotate(${rotate[direction]})` }} className={className} />;
};

export default ArrowTailUpIcon;
