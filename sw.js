/**
 * Service Worker for Catholic Disney (catholicdisney.com)
 * Handles OS-level notifications, vibration, lock-screen alerts for wait time drops and park goals.
 */

const CACHE_NAME = 'catholic-disney-sw-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Handle notification clicks: focus tab or open URL
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) ? event.notification.data.url : '/#wait-times-tab';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      for (let client of windowClients) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});

// Listen for messages from frontend main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
    const title = event.data.title || '☩ Catholic Disney Alert';
    const options = event.data.options || {};
    
    self.registration.showNotification(title, {
      body: options.body || '',
      icon: options.icon || 'https://emojicdn.elk.sh/☩',
      badge: options.badge || 'https://emojicdn.elk.sh/🔔',
      vibrate: options.vibrate || [300, 150, 300],
      tag: options.tag || `cd-alert-${Date.now()}`,
      renotify: true,
      requireInteraction: true,
      data: options.data || { url: self.location.origin },
    });
  }
});
