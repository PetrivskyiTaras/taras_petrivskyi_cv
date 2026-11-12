import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Home-screen / Safari icon, rendered at build time from the same monogram as icon.svg.
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

const AppleIcon = async () => {
  const svg = await readFile(join(process.cwd(), 'src/app/icon.svg'));
  const src = `data:image/svg+xml;base64,${ svg.toString('base64') }`;

  return new ImageResponse(
    (
      // Full-bleed background: iOS applies its own rounded mask.
      <div style={{ display: 'flex', width: '100%', height: '100%', backgroundColor: '#1d5fa6' }}>
        <img src={src} alt="" width={180} height={180} />
      </div>
    ),
    size,
  );
};

export default AppleIcon;
