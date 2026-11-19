// 앱 설치(홈 화면 앱)용 최소 서비스 워커: 저장(캐시)은 하지 않고 항상 최신 파일을 받음 (v2: 브라우저 캐시도 건너뜀)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => { if (e.request.mode === 'navigate') e.respondWith(fetch(e.request.url, { cache: 'no-store', credentials: 'same-origin' }).catch(() => fetch(e.request))); });
