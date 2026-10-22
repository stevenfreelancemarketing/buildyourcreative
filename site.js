// Set true only for GitHub Pages hosted on a custom domain.
const forceEmailDraft = false;
const menu = document.querySelector('.menu');
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  document.querySelector('.nav nav')?.classList.toggle('open', open);
  menu.innerHTML = (open ? 'Close' : 'Menu') + ' <span>☰</span>';
});
function wirePreview() {
  const dialog = document.querySelector('dialog.concept-dialog');
  const trigger = document.querySelector('.preview-open');
  if (!dialog || !trigger) return;
  const close = () => dialog.close();
  trigger.addEventListener('click', () => { dialog.showModal(); document.body.style.overflow = 'hidden'; });
  dialog.querySelector('.dialog-toolbar button')?.addEventListener('click', close);
  dialog.addEventListener('click', e => { if (e.target === dialog) close(); });
  dialog.addEventListener('close', () => { document.body.style.overflow = ''; trigger.focus(); });
}
const tabs = [...document.querySelectorAll('.tabs button')];
tabs.forEach((button, index) => button.addEventListener('click', () => {
  const template = document.getElementById('concept-' + index);
  if (!template) return;
  document.querySelector('.concept-dialog')?.close();
  tabs.forEach((tab, i) => tab.setAttribute('aria-pressed', String(i === index)));
  const content = template.content.cloneNode(true);
  for (const selector of ['.example-meta', '.preview-trigger', '.concept-dialog']) {
    const replacement = content.querySelector(selector);
    const current = document.querySelector(selector);
    if (replacement && current) current.replaceWith(replacement);
  }
  wirePreview();
}));
wirePreview();
const form = document.querySelector('#root form[name="project-inquiry"]');
const emailMode = forceEmailDraft || location.hostname.endsWith('.github.io') || location.protocol === 'file:' || location.hostname === 'localhost';
if (form && emailMode) {
  form.querySelector('button[type="submit"]').textContent = 'Prepare inquiry email ↗';
  const note = document.createElement('p');
  note.className = 'formnote';
  note.textContent = 'This opens a draft in your email app. Your inquiry is only sent when you send that email.';
  form.append(note);
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    if (data.get('companyUrl')) return;
    const body = ['Name','Business','Email','Phone','Area','Service','Message'].map(label => label + ': ' + (data.get(label.toLowerCase()) || '')).join('\n\n');
    let status = form.querySelector('[role="status"]');
    if (!status) { status = document.createElement('div'); status.setAttribute('role','status'); form.append(status); }
    status.replaceChildren();
    const message = document.createElement('p');
    message.textContent = 'Not sent yet. Send the draft in your email app, or copy this text into an email to stevenmarketingfreelance@gmail.com.';
    const text = document.createElement('textarea');
    text.readOnly = true; text.rows = 10; text.style.width = '100%'; text.value = body; text.setAttribute('aria-label','Inquiry email draft');
    status.append(message,text);
    location.href = 'mailto:stevenmarketingfreelance@gmail.com?subject=' + encodeURIComponent('Website inquiry — ' + (data.get('business') || '')) + '&body=' + encodeURIComponent(body);
  });
}
