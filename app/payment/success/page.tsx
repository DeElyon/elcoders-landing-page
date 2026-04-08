'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const PaymentContent = dynamic(() => import('./content'), {
  loading: () => (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
        <p className="text-white text-lg">Verifying your payment...</p>
      </div>
    </div>
  ),
});

export default function PaymentSuccess() {
  return (
    <Suspense fallback={<div />}>
      <PaymentContent />
    </Suspense>
  );
}
