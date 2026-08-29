import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#03060e',
          backgroundImage: 'radial-gradient(circle at 50% 50%, #1e293b 0%, #03060e 100%)',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(59, 158, 255, 0.2)',
            borderRadius: '24px',
            padding: '60px',
            background: 'rgba(15, 23, 42, 0.8)',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: '900',
              margin: '0',
              background: 'linear-gradient(to right, #3b9eff, #a855f7)',
              backgroundClip: 'text',
              color: 'transparent',
              lineHeight: '1.2',
            }}
          >
            Sri Ram Charan
          </h1>
          <h2
            style={{
              fontSize: '36px',
              color: '#94a3b8',
              margin: '20px 0 0 0',
              fontWeight: '500',
            }}
          >
            AI Engineer & Full-Stack Developer
          </h2>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginTop: '40px',
            }}
          >
            <span style={{ fontSize: '24px', color: '#64748b', border: '1px solid #334155', padding: '10px 20px', borderRadius: '40px' }}>FastAPI</span>
            <span style={{ fontSize: '24px', color: '#64748b', border: '1px solid #334155', padding: '10px 20px', borderRadius: '40px' }}>React</span>
            <span style={{ fontSize: '24px', color: '#64748b', border: '1px solid #334155', padding: '10px 20px', borderRadius: '40px' }}>Flutter</span>
            <span style={{ fontSize: '24px', color: '#64748b', border: '1px solid #334155', padding: '10px 20px', borderRadius: '40px' }}>LLMs</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
