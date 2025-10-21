'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bgLight">
      <div className="text-center p-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Something went wrong!</h2>
        <p className="text-textLight mb-6">We apologize for the inconvenience.</p>
        <button
          onClick={() => reset()}
          className="px-8 py-3 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary-dark transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

