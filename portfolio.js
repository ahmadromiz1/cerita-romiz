(() => {
  'use strict';
  const en = document.documentElement.lang === 'en';
  const languageIndex = en ? 1 : 0;
  const text = (id, english) => en ? english : id;
  const projects = window.PORTFOLIO_PROJECTS || [];
  const cards = Array.from(document.querySelectorAll('.project-card'));
  const filters = Array.from(document.querySelectorAll('[data-filter]'));
  const skills = Array.from(document.querySelectorAll('[data-skill]'));
  const dialog = document.querySelector('#project-dialog');
  const content = document.querySelector('#dialog-content');
  let category = 'all';
  let skill = '';
  let lastOpener = null;

  document.querySelector('#year').textContent = new Date().getFullYear();

  function applyFilters() {
    let count = 0;
    for (const card of cards) {
      const project = projects.find(item => item.id === card.querySelector('[data-project]').dataset.project);
      const visible = (category === 'all' || card.dataset.category === category) && (!skill || project.tech.includes(skill));
      card.hidden = !visible;
      if (visible) count++;
    }
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
    skills.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.skill === skill)));
    document.querySelector('.active-filter').hidden = !skill;
    document.querySelector('#filter-label').textContent = `${text('Teknologi', 'Technology')}: ${skill}`;
    document.querySelector('.empty-state').hidden = count !== 0;
    document.querySelector('#project-status').textContent = `${count} ${text('proyek ditampilkan', 'projects shown')}`;
  }
  filters.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.filter;
    applyFilters();
  }));
  skills.forEach(button => button.addEventListener('click', () => {
    skill = skill === button.dataset.skill ? '' : button.dataset.skill;
    category = 'all';
    applyFilters();
    document.querySelector('#work').scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
    document.querySelector('[data-filter="all"]').focus({preventScroll: true});
  }));
  document.querySelector('#reset-filter').addEventListener('click', () => {
    skill = '';
    category = 'all';
    applyFilters();
    document.querySelector('[data-filter="all"]').focus({preventScroll: true});
  });

  function element(tag, value, className) {
    const node = document.createElement(tag);
    if (value) node.textContent = value;
    if (className) node.className = className;
    return node;
  }
  function appendSection(title, value) {
    content.append(element('h3', title), element('p', value));
  }
  document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
    const project = projects.find(item => item.id === button.dataset.project);
    if (!project) return;
    lastOpener = button;
    content.replaceChildren();
    const title = element('h2', project.title[languageIndex]);
    title.id = 'dialog-title';
    const tags = element('div', '', 'tags');
    project.tech.forEach(tech => tags.append(element('span', tech)));
    content.append(title, element('p', project.summary[languageIndex]), tags);
    appendSection(text('Tantangan', 'The challenge'), project.problem[languageIndex]);
    appendSection(text('Pendekatan & solusi', 'Approach & solution'), project.solution[languageIndex]);
    content.append(element('h3', text('Yang dikerjakan', 'What it covers')));
    const list = element('ul');
    project.features[languageIndex].forEach(feature => list.append(element('li', feature)));
    content.append(list);
    appendSection(text('Hasil & konteks', 'Outcome & context'), project.result[languageIndex]);
    if (!project.repo) content.append(element('p', text('Proyek internal. Keterangan mengikuti catatan implementasi yang telah dipublikasikan; source code dan data internal tidak ditampilkan.', 'Internal project. Details follow published implementation notes; internal source code and data are not displayed.'), 'dialog-note'));
    const actions = element('div', '', 'dialog-actions');
    const primary = element('a', project.repo ? text('Lihat repo GitHub ↗', 'View GitHub repository ↗') : text('Baca catatan implementasi ↗', 'Read implementation notes ↗'), 'button primary');
    primary.href = project.repo ? `https://github.com/ahmadromiz1/${project.repo}` : en ? 'cerita-en.html#experience' : 'cerita.html#pengalaman';
    if (project.repo) { primary.target = '_blank'; primary.rel = 'noopener noreferrer'; }
    const discuss = element('a', text('Diskusikan proyek serupa ↗', 'Discuss a similar project ↗'), 'text-link');
    discuss.href = `https://wa.me/6285742864832?text=${encodeURIComponent(text('Halo Romiz, saya ingin berdiskusi tentang ', 'Hi Romiz, I would like to discuss ') + project.title[languageIndex])}`;
    discuss.target = '_blank';
    discuss.rel = 'noopener noreferrer';
    actions.append(primary, discuss);
    content.append(actions);
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('dialog-open');
    dialog.querySelector('.dialog-close').focus({preventScroll: true});
  }));
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  let pressedBackdrop = false;
  function outside(event) {
    const rect = dialog.getBoundingClientRect();
    return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  }
  dialog.addEventListener('pointerdown', event => { pressedBackdrop = event.target === dialog && outside(event); });
  dialog.addEventListener('click', event => {
    if (pressedBackdrop && event.target === dialog && outside(event)) dialog.close();
    pressedBackdrop = false;
  });
  // Native dialog handles Escape, focus trapping, and background inertness.
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    lastOpener?.focus({preventScroll: true});
  });
  applyFilters();
})();
