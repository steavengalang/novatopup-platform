import * as React from 'react';
import { cn } from '../lib/utils';

export interface CardProps extends React.HTMLAttributes&lt;HTMLDivElement&gt; {}

const Card = React.forwardRef&lt;HTMLDivElement, CardProps&gt;(
  ({ className, ...props }, ref) =&gt; (
    &lt;div
      ref={ref}
      className={cn(
        'rounded-xl border border-grid-glow bg-deep-void/50 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,245,255,0.2)]',
        className
      )}
      {...props}
    /&gt;
  )
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef&lt;HTMLDivElement, React.HTMLAttributes&lt;HTMLDivElement&gt;&gt;(
  ({ className, ...props }, ref) =&gt; (
    &lt;div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    /&gt;
  )
);
CardHeader.displayName = 'CardHeader';

const CardContent = React.forwardRef&lt;HTMLDivElement, React.HTMLAttributes&lt;HTMLDivElement&gt;&gt;(
  ({ className, ...props }, ref) =&gt; (
    &lt;div ref={ref} className={cn('p-6 pt-0', className)} {...props} /&gt;
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef&lt;HTMLDivElement, React.HTMLAttributes&lt;HTMLDivElement&gt;&gt;(
  ({ className, ...props }, ref) =&gt; (
    &lt;div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    /&gt;
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardContent, CardFooter };
