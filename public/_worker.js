export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const validPagePaths = new Set([
      '/',
      '/our-work/',
      '/pricing/',
      '/process/',
      '/faq/',
      '/contact/',
      '/privacy-policy/',
      '/terms-of-service/',
      '/404/',
      '/not-found/',
    ]);

    if (url.hostname === 'webleee.com') {
      url.hostname = 'www.webleee.com';
      return Response.redirect(url.toString(), 301);
    }

    if ((request.method === 'GET' || request.method === 'HEAD') && !hasFileExtension(url.pathname)) {
      const normalizedPath = url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`;

      if (!validPagePaths.has(normalizedPath)) {
        const notFoundUrl = new URL('/not-found/', url.origin);
        const notFoundResponse = await env.ASSETS.fetch(new Request(notFoundUrl, request));
        return new Response(notFoundResponse.body, {
          status: 404,
          headers: notFoundResponse.headers,
        });
      }
    }

    return env.ASSETS.fetch(request);
  },
};

function hasFileExtension(pathname) {
  return /\/[^/]+\.[^/]+$/.test(pathname);
}
