import { ImageResponse } from 'next/og';

export const alt = 'Ask4Loan - Quick & Easy Personal Loans Canada';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #F0FDF9 0%, #FFFFFF 60%, #F0FDF9 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 96,
              height: 96,
              borderRadius: 24,
              backgroundColor: '#10B981',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 56,
              color: '#FFFFFF',
              fontWeight: 700,
            }}
          >
            $
          </div>
          <div style={{ display: 'flex', fontSize: 76, fontWeight: 700, color: '#1F2937' }}>
            Ask4Loan
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 34, color: '#64748B', textAlign: 'center' }}>
          Quick &amp; Easy Personal Loans in Canada
        </div>
        <div style={{ display: 'flex', gap: 16, marginTop: 32 }}>
          {['$300 - $5,000', 'Fast Approval', 'All Credit Types'].map((label) => (
            <div
              key={label}
              style={{
                display: 'flex',
                padding: '10px 22px',
                borderRadius: 999,
                border: '2px solid #10B981',
                color: '#10B981',
                fontSize: 22,
                fontWeight: 600,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
