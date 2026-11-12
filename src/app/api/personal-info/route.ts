// Contact details are served only from the server so they never ship in the client bundle.
export const dynamic = 'force-static';

export const GET = () => {
  return new Response(JSON.stringify({ phone: '+38 (096) 916 42 58', email: 'petrivskytaras02@gmail.com' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
