import * as React from 'react';

import { cn } from '@/lib/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-[52px] w-full rounded-md border border-input bg-white p-4 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-200 focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50',
        '[&[aria-invalid="true"]]:border-red-warning',
        '[&[aria-invalid="false"]]:focus-visible:border-purple-main',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
