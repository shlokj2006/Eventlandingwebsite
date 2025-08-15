export async function loadComponent(selector) {
  const container = document.querySelector(selector);
  if (!container) return;

  const source = container.getAttribute('data-source');
  if (!source) return;

  try {
    const response = await fetch(window.location.origin + '/api/preview-689f1e3b0f0d46b5cc4e1310/' + source);
    const html = await response.text();
    container.innerHTML = html;
  } catch (error) {
    console.error('Failed to load component:', error);
  }
}