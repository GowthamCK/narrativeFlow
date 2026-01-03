import React from 'react';
import { cn } from '../../lib/utils';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    options: { label: string; value: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, label, error, options, ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-slate-400 mb-1.5">
                        {label}
                    </label>
                )}
                <div className="relative">
                    <select
                        ref={ref}
                        className={cn(
                            'flex h-10 w-full appearance-none rounded-lg border border-slate-700/50 bg-slate-900/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all disabled:opacity-50',
                            error && 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50',
                            className
                        )}
                        {...props}
                    >
                        {options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                    {/* Custom chevron */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
                {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
            </div>
        );
    }
);
Select.displayName = 'Select';
