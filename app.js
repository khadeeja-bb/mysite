const IC = {
  linkedin:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.3A6 6 0 0 1 16 8zM2 9h4v12H2zm2-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg>`,
  github:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
  code:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  mail:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  trophy:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 4H17L19 6V10C19 13.5 16 16 12 17C8 16 5 13.5 5 10V6L7 4Z"/><path d="M5 9H3V6H5"/><path d="M19 9H21V6H19"/><polyline points="8 21 12 21 16 21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  'graduation-cap':`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  briefcase:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>`,
  'folder-open':`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
  users:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  zap:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  github_sm:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
};

function svgIcon(name, cls=''){ return (IC[name] || IC['zap']).replace('<svg ','<svg class="'+cls+'" '); }

function buildSidebar(){
  const d = resumeData.personal;
  document.getElementById('sidebar').innerHTML = `
    <div class="sb-top">
      <div class="avatar-ring">
        <img src="${d.avatar}" alt="${d.name}"/>
      </div>
      <div class="sb-name">${d.name}</div>
    </div>

    <!-- Social Icons Only -->
    <div class="social-row">
      ${d.social.map(s=>`
        <a href="${s.url}" target="_blank" class="social-btn-icon" title="${s.label}">
          ${svgIcon(s.icon)}
        </a>`).join('')}
    </div>

    <div class="sb-section-label">Navigation</div>
    <nav>
      ${d.nav.map(n=>`
        <a class="nav-item" href="#${n.id}">
          ${svgIcon(n.icon)}<span>${n.label}</span>
        </a>`).join('')}
    </nav>
    <div style="flex:1"></div>
    <div class="sb-foot">© ${new Date().getFullYear()} · Khadeeja BiBi</div>`;
}

function buildAtAGlance(){
  return `
    <div class="stats-top-row">
      ${resumeData.personal.stats.map(s=>`
        <div class="stat-card-main">
          <div class="val">${s.value}<span class="suf">${s.suffix}</span></div>
          <div class="lbl">${s.label}</div>
        </div>`).join('')}
    </div>
  `;
}

function secHead(iconName, title){
  return `<div class="sec-head">
    <div class="sec-icon-wrap">${svgIcon(iconName)}</div>
    <h2 class="sec-title">${title}</h2>
    <div class="sec-rule"></div>
  </div>`;
}

function buildAchievements(){
  return `<section class="sec" id="achievements">
    ${secHead('trophy','Achievements')}
    <div class="ach-grid">
      ${resumeData.achievements.map(a=>`
        <a href="${a.url}" target="_blank" class="ach-card">
          <div class="ach-top">
            <span class="ach-badge">${a.badge}</span>
            <span class="ach-cat">${a.category}</span>
          </div>
          <p class="ach-text">${a.text}</p>
          <span class="ach-arrow">View ↗</span>
        </a>`).join('')}
    </div>
  </section>`;
}

function buildEducation(){
  return `<section class="sec" id="education">
    ${secHead('graduation-cap','Education')}
    ${resumeData.education.map(e=>`
      <div class="info-card">
        <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:16px;">
          <div>
            <div class="card-title">${e.degree}</div>
            <div class="card-subtitle">${e.institution}</div>
            <div class="card-loc">📍 ${e.location}</div>
          </div>
          <div style="text-align:right;display:flex;flex-direction:column;align-items:flex-end;gap:8px;">
            <div class="period-pill">${e.period}</div>
            <div style="display:flex;gap:8px;">
                <span style="background:#f4fdf8;color:#15803d;padding:4px 12px;border-radius:20px;font-size:0.75rem;font-weight:600;border:1px solid #bbf7d0;">CGPA ${e.cgpa}</span>
                <span style="background:#fffbf1;color:#b45309;padding:4px 12px;border-radius:20px;font-size:0.75rem;font-weight:600;border:1px solid #fde68a;">🥇 ${e.highlight}</span>
            </div>
          </div>
        </div>
        <p class="card-desc">${e.description}</p>
        <div class="tag-row">
          ${e.coursework.map(c=>`<span class="tag">${c}</span>`).join('')}
        </div>
      </div>`).join('')}
  </section>`;
}

function buildExperience(){
  return `<section class="sec" id="experience">
    ${secHead('briefcase','Work Experience')}
    ${resumeData.experience.map(e=>`
      <div class="info-card">
        <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:16px;">
          <div>
            <div class="card-title">${e.role}</div>
            <div class="card-subtitle"><a href="${e.url}" target="_blank" style="color:inherit;text-decoration:none;">${e.company} ↗</a></div>
            <div class="card-loc">📍 ${e.location}</div>
          </div>
          <span class="period-pill">${e.period}</span>
        </div>
        <p class="card-desc">${e.description}</p>
        <div class="point-list">
          ${e.points.map(p=>`<div class="point"><div class="dot"></div><span class="point-text">${p}</span></div>`).join('')}
        </div>
      </div>`).join('')}
  </section>`;
}

function buildProjects(){
  return `<section class="sec" id="projects">
    ${secHead('folder-open','Projects')}
    ${resumeData.projects.map(p=>`
      <div class="info-card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:16px;">
          <div style="display:flex;align-items:center;gap:16px;">
            <div class="proj-emoji-wrap">${p.emoji}</div>
            <div>
              <div class="card-title">${p.name}</div>
              <div style="font-family:'JetBrains Mono',monospace;font-size:0.75rem;color:var(--ink-500);">${p.subtitle}</div>
            </div>
          </div>
          <a href="${p.url}" target="_blank" style="display:flex;align-items:center;gap:8px;background:var(--white);border:1px solid var(--border);padding:8px 16px;border-radius:12px;font-size:0.8rem;font-weight:600;color:var(--ink-700);text-decoration:none;">
            ${svgIcon('github_sm')} GitHub
          </a>
        </div>
        ${p.metrics && p.metrics.length ? `
          <div class="metrics-row">
            ${p.metrics.map(m=>`<div class="metric"><div class="metric-val">${m.value}</div><div class="metric-lbl">${m.label}</div></div>`).join('')}
          </div>` : ''}
        <p class="card-desc" style="${p.metrics && p.metrics.length ? 'margin-top:0; border-top:none; padding-top:0;' : ''}">${p.description}</p>
        <div class="point-list">
          ${p.points.map(pt=>`<div class="point"><div class="dot"></div><span class="point-text">${pt}</span></div>`).join('')}
        </div>
        <div class="tag-row" style="margin-top:24px;">
          ${p.stack.map(t=>`<span class="tag" style="background:var(--bg);border-color:transparent;color:var(--ink-500);">${t}</span>`).join('')}
        </div>
      </div>`).join('')}
  </section>`;
}

function buildLeadership(){
  return `<section class="sec" id="leadership">
    ${secHead('users','Leadership')}
    ${resumeData.leadership.map(l=>`
      <div class="info-card">
        <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:16px;">
          <div>
            <div class="card-title">${l.role}</div>
            <div class="card-subtitle">${l.org}</div>
            <div class="card-loc">📍 ${l.location}</div>
          </div>
          <span class="period-pill">${l.period}</span>
        </div>
        <p class="card-desc">${l.description}</p>
        <div style="display:flex;flex-direction:column;gap:16px;">
          ${l.points.map(pt=>`
            <div style="background:var(--bg);padding:16px 20px;border-radius:16px;border:1px solid var(--border);">
              <div style="font-size:0.95rem;color:var(--ink-700);line-height:1.6;">${pt.text}</div>
              <a href="${pt.url}" target="_blank" style="display:inline-block;margin-top:12px;font-size:0.8rem;font-weight:600;color:var(--purple-600);text-decoration:none;background:var(--white);padding:6px 14px;border-radius:8px;border:1px solid var(--border);">
                ${pt.linkLabel} ↗
              </a>
            </div>`).join('')}
        </div>
      </div>`).join('')}
  </section>`;
}

function buildSkills(){
  return `<section class="sec" id="skills">
    ${secHead('zap','Technical Skills')}
    <div class="skills-grid">
      ${Object.entries(resumeData.skills).map(([cat,data])=>`
        <div class="skill-group">
          <div class="skill-group-top">
            <span class="skill-cat-emoji">${data.icon}</span>
            <span class="skill-cat-label">${cat}</span>
          </div>
          <div class="tag-row">
            ${data.items.map(i=>`<span class="tag" style="background:var(--bg);border-color:transparent;">${i}</span>`).join('')}
          </div>
        </div>`).join('')}
    </div>
  </section>`;
}

document.addEventListener('DOMContentLoaded', () => {
    buildSidebar();
    
    // Inject the main container holding all centered content
    document.getElementById('main').innerHTML = `
      <div class="main-container">
        ${buildAtAGlance()}
        ${buildAchievements()}
        ${buildEducation()}
        ${buildExperience()}
        ${buildProjects()}
        ${buildLeadership()}
        ${buildSkills()}
      </div>
    `;

    // Intersection Observer for Active Links
    const sectionIds = resumeData.personal.nav.map(n=>n.id);
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
          const a = document.querySelector(`.nav-item[href="#${e.target.id}"]`);
          if(a) a.classList.add('active');
        }
      });
    },{threshold:0.1, rootMargin:'-100px 0px -50% 0px'});
    
    sectionIds.forEach(id=>{ const el=document.getElementById(id); if(el) io.observe(el); });
});
