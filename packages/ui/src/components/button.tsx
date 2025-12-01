import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        neonGlow: 'bg-neon-cyan text-deep-void shadow-[0_0_20px_rgba(0,245,255,0.5)] hover:shadow-[0_0_40px_rgba(0,245,255,0.8)] active:scale-95',
        neonOutline: 'border-2 border-neon-cyan text-neon-cyan bg-transparent hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_rgba(0,245,255,0.3)]',
        magenta: 'bg-neon-magenta text-white shadow-[0_0_20px_rgba(255,0,110,0.5)] hover:shadow-[0_0_40px_rgba(255,0,110,0.8)] active:scale-95',
        ghost: 'text-electric-green hover:bg-electric-green/10 hover:text-electric-green',
        outline: 'border border-grid-glow text-white hover:bg-white/5',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'neonGlow',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes&lt;HTMLButtonElement&gt;,
    VariantProps&lt;typeof buttonVariants&gt; {
  asChild?: boolean;
}

const Button = React.forwardRef&lt;HTMLButtonElement, ButtonProps&gt;(
  ({ className, variant, size, ...props }, ref) =&gt; {
    return (
      &lt;button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      /&gt;
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
