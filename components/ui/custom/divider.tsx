type DividerProps = {
  direction?: 'horizontal' | 'vertical'; // 가로선 또는 세로선 선택
  className?: string;
};

const Divider = ({ direction = 'horizontal', className }: DividerProps) => {
  return (
    <div
      className={className}
      style={{
        borderTop: direction === 'horizontal' ? '1px solid var(--Text-2, #AEAFBB)' : 'none',
        borderLeft: direction === 'vertical' ? '1px solid var(--Text-2, #AEAFBB)' : 'none',
        opacity: 0.5,
        width: direction === 'horizontal' ? '100%' : '1px',
        height: direction === 'vertical' ? '100%' : '1px',
      }}
    />
  );
};

export default Divider;
