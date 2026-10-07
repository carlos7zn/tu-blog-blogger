// widgets.js - carga dinámica de widgets desde archivos HTML
document.addEventListener('DOMContentLoaded', () => {
  const widgets = [
    { id: 'widget-search', file: 'widgets/search.html' },
    { id: 'widget-counter', file: 'widgets/visit-counter.html' },
    { id: 'widget-weather', file: 'widgets/weather.html' },
    { id: 'widget-contact', file: 'widgets/contact.html' },
    { id: 'widget-poll', file: 'widgets/poll.html' },
    { id: 'widget-comments', file: 'widgets/recent-comments.html' },
    { id: 'widget-clock', file: 'widgets/clock.html' },
    { id: 'widget-rss', file: 'widgets/rss-feed.html' },
    { id: 'widget-translate', file: 'widgets/google-translate.html' }
  ];

  widgets.forEach(w => {
    const placeholder = document.getElementById(w.id);
    if (!placeholder) return;
    fetch(w.file)
      .then(resp => {
        if (!resp.ok) throw new Error(`Failed to load ${w.file}: ${resp.status}`);
        return resp.text();
      })
      .then(html => {
        placeholder.innerHTML = html;
      })
      .catch(err => {
        console.error(err);
        placeholder.innerHTML = `<p style="color:#e74c3c;">Error cargando widget</p>`;
      });
  });
});