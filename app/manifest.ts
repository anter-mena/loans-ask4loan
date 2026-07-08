import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ask4Loan',
    short_name: 'Ask4Loan',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#588157',
    icons: [
      { src: '/icon.png', sizes: 'any', type: 'image/png', purpose: 'any' },
      { src: '/icon.png', sizes: 'any', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
