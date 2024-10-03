import React from 'react';

import { cn } from '@/lib/utils';
import { FormLabel } from '../form';

interface AuthFormLabelProps extends React.ComponentPropsWithoutRef<typeof FormLabel> {
  required?: boolean;
}

export const AuthFormLabel = React.forwardRef<HTMLLabelElement, AuthFormLabelProps>(
  ({ children, required, className, ...props }, ref) => {
    return (
      <FormLabel
        ref={ref}
        className={cn(` text-foreground text-gray-400 text-xl leading-[22px] font-medium ${className}`)}
        {...props}
      >
        {children}
        {required && (
          <>
            <span className="text-red-500 ml-1" aria-hidden="true">
              *
            </span>
          </>
        )}
      </FormLabel>
    );
  },
);

AuthFormLabel.displayName = 'AuthFormLabel';
