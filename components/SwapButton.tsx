"use client";

import Spinner from './Spinner';

interface SwapButtonProps {
  onClick: () => void;
  isLoading: boolean;
  disabled: boolean;
  theme?: 'default' | 'gradient';
}

export default function SwapButton({ onClick, isLoading, disabled, theme = 'default' }: SwapButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`w-full py-3 px-4 rounded-xl text-white font-semibold ${
        disabled || isLoading
          ? 'bg-gray-400 cursor-not-allowed'
          : theme === 'gradient'
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
            : 'bg-blue-500 hover:bg-blue-600'
      } transition-colors flex items-center justify-center`}
    >
      {isLoading ? (
        <>
          <Spinner className="h-5 w-5 mr-2" />
          Swapping...
        </>
      ) : (
        'Swap'
      )}
    </button>
  );
}

