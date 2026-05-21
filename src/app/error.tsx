'use client';

import { AlertTriangle } from 'lucide-react';

export default function ErrorBoundary() {
  return (
    <div className='min-h-100 flex items-center justify-center p-4'>
      <div className='max-w-md w-full text-center'>
        <div className='relative inline-block mb-6'>
          <AlertTriangle className='text-gray-100 mx-auto size-16' />

          <div className='absolute h-1 w-16 bg-red-500 -rotate-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80'></div>
        </div>
      </div>
    </div>
  );
}
