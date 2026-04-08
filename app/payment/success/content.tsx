'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function PaymentContent() {
  const searchParams = useSearchParams();
  const reference = searchParams.get('reference');
  const [status, setStatus] = useState<string>('loading');
  const [transactionData, setTransactionData] = useState<any>(null);

  useEffect(() => {
    const verifyPayment = async () => {
      if (!reference) {
        setStatus('error');
        return;
      }

      try {
        const response = await fetch(
          `/api/korapay/verify?reference=${reference}`
        );
        const data = await response.json();

        if (data.success) {
          setStatus('success');
          setTransactionData(data.data);
          
          // Auto-redirect to WhatsApp after 3 seconds
          setTimeout(() => {
            window.location.href = 'https://wa.link/aps8r5';
          }, 3000);
        } else {
          setStatus('error');
        }
      } catch (error) {
        console.error('Verification error:', error);
        setStatus('error');
      }
    };

    verifyPayment();
  }, [reference]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-white text-lg">Verifying your payment...</p>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-red-500 text-6xl mb-4">✗</div>
          <h1 className="text-3xl font-bold text-white mb-4">Payment Failed</h1>
          <p className="text-slate-400 mb-8">
            We couldn&apos;t verify your payment. Please contact support if you need assistance.
          </p>
          <Link
            href="/"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:opacity-90 transition inline-block"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="text-green-500 text-6xl mb-4">✓</div>
        <h1 className="text-4xl font-bold text-white mb-4">Payment Successful!</h1>
        <p className="text-slate-400 mb-2">
          Thank you! Redirecting to WhatsApp in 3 seconds...
        </p>
        <p className="text-slate-500 text-sm mb-8">
          Our team will reach out within 2 hours to start your project.
        </p>

        {transactionData && (
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-8 text-left">
            <div className="space-y-3">
              <div>
                <p className="text-slate-400 text-sm">Reference</p>
                <p className="text-white font-mono">{transactionData.reference}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Amount</p>
                <p className="text-white text-lg">₦{(transactionData.amount / 100).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Status</p>
                <p className="text-green-400 font-semibold">{transactionData.status?.toUpperCase() || 'COMPLETED'}</p>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <p className="text-slate-500 text-sm">
            Don&apos;t want to wait? 
          </p>
          <a
            href="https://wa.link/aps8r5"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:opacity-90 transition inline-block"
          >
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default PaymentContent;
