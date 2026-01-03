import React from 'react';
import { cn } from '../../lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-slate-400 mb-1.5">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={cn(
                        'flex h-10 w-full rounded-lg border border-slate-700/50 bg-slate-900/50 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all disabled:opacity-50',
                        error && 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50',
                        className
                    )}
                    {...props}
                />
                {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
            </div>
        );
    }
);
Input.displayName = 'Input';
