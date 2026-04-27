const SERVICES = [
  { id: 's1', icon: '💈', name: 'Barbearia',     desc: 'Corte, barba e acabamento',      price: 'A partir de R$ 35'  },
  { id: 's2', icon: '💆', name: 'Estética',       desc: 'Massagens e tratamentos',        price: 'A partir de R$ 80'  },
  { id: 's3', icon: '🦷', name: 'Odontologia',    desc: 'Consultas e procedimentos',      price: 'A partir de R$ 120' },
  { id: 's4', icon: '🩺', name: 'Clínica Médica', desc: 'Consultas gerais',               price: 'A partir de R$ 150' },
  { id: 's5', icon: '🐾', name: 'Petshop',        desc: 'Banho, tosa e consultas',        price: 'A partir de R$ 55'  },
  { id: 's6', icon: '💅', name: 'Manicure',       desc: 'Unhas e cuidados',               price: 'A partir de R$ 40'  },
  { id: 's7', icon: '👁️', name: 'Oftalmologia',   desc: 'Exames e consultas',             price: 'A partir de R$ 200' },
  { id: 's8', icon: '🧘', name: 'Psicologia',     desc: 'Consultas e terapia',            price: 'A partir de R$ 180' },
];

const PROFESSIONALS = [
  { id: 'p0', name: 'Qualquer um', role: 'Primeiro disponível', color: '#6B6B67', any: true },
  { id: 'p1', name: 'Ana Lima',    role: 'Profissional dentista', color: '#9B59B6' },
  { id: 'p2', name: 'Bruno Melo',  role: 'Profissional em corte de cabelo',        color: '#1b4d6e' },
  { id: 'p3', name: 'Carla Dias',  role: 'Especialista em estética',        color: '#27AE60' },
  { id: 'p4', name: 'Diego Faria', role: 'Médico',           color: '#E67E22' },
  { id: 'p5', name: 'Elena Costa', role: 'Especialista em Psicologia',        color: '#C0392B' },
  { id: 'p5', name: 'Alice Santos', role: 'Oftamologista',        color: '#cffc09' },
  { id: 'p5', name: 'Carol Lima', role: 'Profissional em manicure',        color: '#f707a7' },
  { id: 'p5', name: 'Paulo Judas', role: 'Profissional do Pet Shop',        color: '#00e1ff' },
];

const TIMES_AM = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30'];
const TIMES_PM = ['13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'];

const UNAVAILABLE = ['09:00', '10:30', '14:00', '16:00'];

const MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

let state = {
  service: null,
  prof:    null,
  date:    null,
  time:    null,
  name:    '',
  phone:   '',
  email:   '',
  birth:   '',
  obs:     ''
};

let calYear, calMonth;

function init() {
  const now = new Date();
  calYear  = now.getFullYear();
  calMonth = now.getMonth();

  renderServices();
  renderProfs();
  renderCalendar();
  initPhoneMask();
}

function renderServices() {
  const grid = document.getElementById('service-grid');
  grid.innerHTML = SERVICES.map(s => `
    <div class="select-card" id="card-${s.id}" onclick="selectService('${s.id}')">
      <div class="card-icon">${s.icon}</div>
      <div class="card-name">${s.name}</div>
      <div class="card-desc">${s.desc}</div>
      <div class="card-price">${s.price}</div>
    </div>
  `).join('');
}

function selectService(id) {
  document.querySelectorAll('#service-grid .select-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('card-' + id).classList.add('selected');
  state.service = SERVICES.find(s => s.id === id);
  document.getElementById('btn1').disabled = false;
}


function renderProfs() {
  const grid = document.getElementById('prof-grid');
  grid.innerHTML = PROFESSIONALS.map(p => {
    const initials = p.any
      ? '?'
      : p.name.split(' ').map(n => n[0]).join('').slice(0, 2);

    return `
      <div class="prof-card${p.any ? ' any-prof' : ''}" id="pcard-${p.id}" onclick="selectProf('${p.id}')">
        ${p.any
          ? `<div class="any-icon">🔀</div>`
          : `<div class="prof-avatar" style="background:${p.color}">${initials}</div>`
        }
        <div class="prof-name">${p.name}</div>
        <div class="prof-role">${p.role}</div>
      </div>
    `;
  }).join('');
}

function selectProf(id) {
  document.querySelectorAll('#prof-grid .prof-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('pcard-' + id).classList.add('selected');
  state.prof = PROFESSIONALS.find(p => p.id === id);
  document.getElementById('btn2').disabled = false;
}


function renderCalendar() {
  document.getElementById('cal-title').textContent = MONTHS[calMonth] + ' ' + calYear;

  const now        = new Date();
  const firstDay   = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();

  let html = '';

  for (let i = 0; i < firstDay; i++) {
    html += `<div class="cal-day empty"></div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateObj  = new Date(calYear, calMonth, d);
    const isPast   = dateObj < new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const isWeekend = dateObj.getDay() === 0; // domingos bloqueados
    const isDisabled = isPast || isWeekend;
    const isToday  = dateObj.toDateString() === now.toDateString();

    const dateStr  = `${calYear}-${String(calMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const isSelected = state.date === dateStr;

    let cls = 'cal-day';
    if (isDisabled) cls += ' disabled';
    if (isToday)    cls += ' today';
    if (isSelected) cls += ' selected';

    const clickAttr = isDisabled ? '' : `onclick="selectDate('${dateStr}')"`;
    html += `<div class="${cls}" ${clickAttr}>${d}</div>`;
  }

  document.getElementById('cal-days').innerHTML = html;
}

function changeMonth(dir) {
  calMonth += dir;
  if (calMonth < 0)  { calMonth = 11; calYear--; }
  if (calMonth > 11) { calMonth = 0;  calYear++; }
  renderCalendar();
}

function selectDate(dateStr) {
  state.date = dateStr;
  state.time = null;
  document.getElementById('btn3').disabled = true;
  renderCalendar();
  renderTimes();
}

function renderTimes() {
  const container = document.getElementById('times-content');

  if (!state.date) {
    container.innerHTML = '<div class="no-date-msg">Selecione uma data no calendário</div>';
    return;
  }

  const dateObj = new Date(state.date + 'T12:00:00');
  const fmt = dateObj.toLocaleDateString('pt-BR', {
    weekday: 'long', day: 'numeric', month: 'long'
  });
  const label = fmt.charAt(0).toUpperCase() + fmt.slice(1);

  const makeBtn = t => {
    const unavail = UNAVAILABLE.includes(t);
    const sel     = state.time === t;
    let cls = 'time-btn';
    if (unavail) cls += ' unavailable';
    if (sel)     cls += ' selected';
    const clickAttr = unavail ? '' : `onclick="selectTime('${t}')"`;
    return `<div class="${cls}" ${clickAttr}>${t}</div>`;
  };

  container.innerHTML = `
    <div style="font-size:0.75rem;color:var(--text-secondary);margin-bottom:0.8rem;font-weight:500;">${label}</div>
    <div style="font-size:0.72rem;color:var(--text-muted);font-weight:600;letter-spacing:0.5px;text-transform:uppercase;margin-bottom:6px;">Manhã</div>
    <div class="times-grid" style="margin-bottom:12px;">${TIMES_AM.map(makeBtn).join('')}</div>
    <div style="font-size:0.72rem;color:var(--text-muted);font-weight:600;letter-spacing:0.5px;text-transform:uppercase;margin-bottom:6px;">Tarde</div>
    <div class="times-grid">${TIMES_PM.map(makeBtn).join('')}</div>
  `;
}

function selectTime(t) {
  state.time = t;
  renderTimes();
  document.getElementById('btn3').disabled = false;
}


function initPhoneMask() {
  const input = document.getElementById('f-phone');
  if (!input) return;

  input.addEventListener('input', function () {
    let v = this.value.replace(/\D/g, '');

    v = v.slice(0, 11);

    if (v.length <= 10) {
      // telefone fixo
      v = v.replace(/^(\d{0,2})(\d{0,4})(\d{0,4})$/, function (_, ddd, p1, p2) {
        let result = '';
        if (ddd) result += `(${ddd}`;
        if (ddd.length === 2) result += ') ';
        if (p1) result += p1;
        if (p2) result += '-' + p2;
        return result;
      });
    } else {

      v = v.replace(/^(\d{0,2})(\d{0,5})(\d{0,4})$/, function (_, ddd, p1, p2) {
        let result = '';
        if (ddd) result += `(${ddd}`;
        if (ddd.length === 2) result += ') ';
        if (p1) result += p1;
        if (p2) result += '-' + p2;
        return result;
      });
    }

    this.value = v;
  });
}

function validateAndGoTo5() {
  const nameInput  = document.getElementById('f-name');
  const phoneInput = document.getElementById('f-phone');
  const errName    = document.getElementById('err-name');
  const errPhone   = document.getElementById('err-phone');

  nameInput.classList.remove('invalid');
  phoneInput.classList.remove('invalid');
  errName.classList.remove('show');
  errPhone.classList.remove('show');

  let valid = true;

  if (!nameInput.value.trim()) {
    nameInput.classList.add('invalid');
    errName.classList.add('show');
    valid = false;
  }

  if (!phoneInput.value.trim()) {
    phoneInput.classList.add('invalid');
    errPhone.classList.add('show');
    valid = false;
  }

  if (!valid) return;

  state.name  = nameInput.value.trim();
  state.phone = phoneInput.value.trim();
  state.email = document.getElementById('f-email').value.trim();
  state.birth = document.getElementById('f-birth').value;
  state.obs   = document.getElementById('f-obs').value.trim();

  goTo(5);
}


function renderSummary() {
  const dateFormatted = state.date
    ? (() => {
        const d = new Date(state.date + 'T12:00:00');
        const s = d.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
        return s.charAt(0).toUpperCase() + s.slice(1);
      })()
    : '—';

  const rows = [
    { k: 'Serviço',       v: state.service ? `${state.service.icon} ${state.service.name}` : '—' },
    { k: 'Profissional',  v: state.prof    ? state.prof.name : '—' },
    { k: 'Data',          v: dateFormatted },
    { k: 'Horário',       v: state.time || '—', accent: true },
    { k: 'Nome',          v: state.name  || '—' },
    { k: 'Telefone',      v: state.phone || '—' },
    ...(state.email ? [{ k: 'E-mail',       v: state.email }] : []),
    ...(state.obs   ? [{ k: 'Observações',  v: state.obs   }] : []),
  ];

  document.getElementById('summary-rows').innerHTML = rows.map(r => `
    <div class="summary-row">
      <span class="sum-key">${r.k}</span>
      <span class="sum-val${r.accent ? ' accent' : ''}">${r.v}</span>
    </div>
  `).join('');
}


function confirmBooking() {
  const code = 'AG-' + Math.floor(1000 + Math.random() * 9000);
  document.getElementById('booking-code').textContent = code;

  const dateFormatted = state.date
    ? new Date(state.date + 'T12:00:00').toLocaleDateString('pt-BR', {
        day: '2-digit', month: '2-digit', year: 'numeric'
      })
    : '—';

  document.getElementById('confirm-details').innerHTML = `
    <div class="confirm-row"><span>Serviço</span><span>${state.service?.icon} ${state.service?.name}</span></div>
    <div class="confirm-row"><span>Profissional</span><span>${state.prof?.name}</span></div>
    <div class="confirm-row"><span>Data</span><span>${dateFormatted}</span></div>
    <div class="confirm-row"><span>Horário</span><span>${state.time}</span></div>
    <div class="confirm-row"><span>Cliente</span><span>${state.name}</span></div>
  `;

  document.getElementById('steps-bar').style.display = 'none';
  goTo(6);
}


function goTo(step) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel' + step).classList.add('active');
  updateSteps(step);
  if (step === 5) renderSummary();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateSteps(current) {
  for (let i = 1; i <= 5; i++) {
    const circle = document.getElementById('sc' + i);
    const label  = document.getElementById('sl' + i);

    circle.className = 'step-circle';
    label.className  = 'step-label';

    if (i < current) {
      circle.classList.add('done');
      circle.innerHTML = '✓';
      label.classList.add('done');
    } else if (i === current) {
      circle.classList.add('active');
      circle.innerHTML = String(i);
      label.classList.add('active');
    } else {
      circle.innerHTML = String(i);
    }

    if (i < 5) {
      const line = document.getElementById('line' + i);
      line.className = 'step-line' + (i < current ? ' done' : '');
    }
  }
}


function resetAll() {
  state = { service: null, prof: null, date: null, time: null, name: '', phone: '', email: '', birth: '', obs: '' };

  document.querySelectorAll('.select-card').forEach(c => c.classList.remove('selected'));
  document.querySelectorAll('.prof-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('f-name').value  = '';
  document.getElementById('f-phone').value = '';
  document.getElementById('f-email').value = '';
  document.getElementById('f-birth').value = '';
  document.getElementById('f-obs').value   = '';

  document.getElementById('btn1').disabled = true;
  document.getElementById('btn2').disabled = true;
  document.getElementById('btn3').disabled = true;

  document.getElementById('steps-bar').style.display = 'flex';

  calYear  = new Date().getFullYear();
  calMonth = new Date().getMonth();
  renderCalendar();

  goTo(1);
}

init();
