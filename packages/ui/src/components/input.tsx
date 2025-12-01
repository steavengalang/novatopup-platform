import * as React from 'react';
import { cn } from '../lib/utils';

export interface InputProps extends React.InputHTMLAttributes&lt;HTMLInputElement&gt; {}

const Input = React.forwardRef&lt;HTMLInputElement, InputProps&gt;(
  ({ className, type, ...props }, ref) =&gt; {
    return (
      &lt;input
        type={type}
        className={cn(
          'flex h-12 w-full rounded-lg border border-grid-glow bg-deep-void/80 px-4 py-2 text-white placeholder:text-white/50 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200',
          className
        )}
        ref={ref}
        {...props}
      /&gt;
    );
  }
);

Input.displayName = 'Input';

export { Input };
