import { http, HttpResponse } from 'msw';
import { robotsMock } from '@/core/infrastructure/mocks/robots.mock';

export const handlers = [
  http.get('https://randomuser.me/api/', ({ request }) => {
    const url = new URL(request.url);

    const page = url.searchParams.get('page') || '1';
    const results = url.searchParams.get('results') || '10';

    const response = {
      results: robotsMock.slice(0, Math.min(parseInt(results, 10), robotsMock.length)),
      info: {
        seed: '3b290148e77b1c29',
        page: parseInt(page, 10),
        results: Math.min(parseInt(results, 10), robotsMock.length),
        version: '1.4',
      },
    };

    return HttpResponse.json(response);
  }),
];
