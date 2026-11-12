import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Link-preview card (LinkedIn, Slack, Telegram, X…), generated once at build time.
export const alt = 'Taras Petrivskyi – Senior Full-Stack Software Engineer | Technical Lead';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const OpengraphImage = async () => {
  const photo = await readFile(join(process.cwd(), 'public/avatar.jpg'));
  const photoSrc = `data:image/jpeg;base64,${ photo.toString('base64') }`;

  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%', backgroundColor: '#14171c' }}>
        <img src={photoSrc} alt="" width={480} height={630} style={{ objectFit: 'cover' }} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            padding: '0 56px',
            borderLeft: '6px solid #8cb8f2',
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 700, color: '#e4e8ee', lineHeight: 1.1 }}>Taras Petrivskyi</div>
          <div style={{ fontSize: 30, color: '#8cb8f2', marginTop: 28, lineHeight: 1.25 }}>Senior Full-Stack Software Engineer</div>
          <div style={{ fontSize: 30, color: '#8cb8f2', lineHeight: 1.25 }}>Technical Lead</div>
          <div style={{ fontSize: 26, color: '#a9b3c1', marginTop: 32, lineHeight: 1.4 }}>
            TypeScript · React · Next.js · Node.js
          </div>
          <div style={{ fontSize: 24, color: '#7cc6a1', marginTop: 16 }}>11+ years · Kyiv, Ukraine</div>
        </div>
      </div>
    ),
    size,
  );
};

export default OpengraphImage;
