import { ImageResponse } from 'next/og';

// Default image shown when a page is shared on LinkedIn, Slack, etc.
export const alt = 'Software@Scale';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0c2080',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: '-2px' }}>Software@Scale</div>
        <div style={{ marginTop: 32, fontSize: 44, lineHeight: 1.3, display: 'flex', flexDirection: 'column' }}>
          <span>Solve the problem. Write the code.</span>
          <span style={{ color: '#5ae0f6' }}>Scale the solution.</span>
        </div>
      </div>
    ),
    size,
  );
}
