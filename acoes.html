const SERVICOS = [
  { id: 's1', icone: '💈', nome: 'Barbearia'     },
  { id: 's2', icone: '💆', nome: 'Estética'       },
  { id: 's3', icone: '🦷', nome: 'Odontologia'    },
  { id: 's4', icone: '🩺', nome: 'Clínica Médica' },
  { id: 's5', icone: '🐾', nome: 'Petshop'        },
  { id: 's6', icone: '💅', nome: 'Manicure'       },
  { id: 's7', icone: '👁️', nome: 'Oftalmologia'   },
  { id: 's8', icone: '🧘', nome: 'Psicologia'     },
];

const PROFISSIONAIS = [
  { id: 'p0', nome: 'Qualquer um',  cargo: 'Primeiro disponível',          cor: '#6B6B67', qualquer: true,  especialidades: ['s1','s2','s3','s4','s5','s6','s7','s8'] },
  { id: 'p1', nome: 'Ana Lima',     cargo: 'Dentista',                      cor: '#9B59B6', especialidades: ['s3'] },
  { id: 'p2', nome: 'Bruno Melo',   cargo: 'Barbeiro',                      cor: '#1b4d6e', especialidades: ['s1'] },
  { id: 'p3', nome: 'Carla Dias',   cargo: 'Esteticista',                   cor: '#27AE60', especialidades: ['s2'] },
  { id: 'p4', nome: 'Diego Faria',  cargo: 'Médico clínico geral',          cor: '#E67E22', especialidades: ['s4'] },
  { id: 'p5', nome: 'Elena Costa',  cargo: 'Psicóloga',                     cor: '#C0392B', especialidades: ['s8'] },
  { id: 'p6', nome: 'Alice Santos', cargo: 'Oftalmologista',                cor: '#0e8a6e', especialidades: ['s7'] },
  { id: 'p7', nome: 'Carol Lima',   cargo: 'Manicure',                      cor: '#f707a7', especialidades: ['s6'] },
  { id: 'p8', nome: 'Paulo Judas',  cargo: 'Profissional de Petshop',       cor: '#00a8bf', especialidades: ['s5'] },
];

const TODOS_HORARIOS = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
];

function hoje() {
  return new Date().toISOString().slice(0, 10);
}

function amanha() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
}

const AGENDA = [
  { profId: 'p2', data: hoje(), horario: '09:00' },
  { profId: 'p2', data: hoje(), horario: '10:30' },
  { profId: 'p2', data: hoje(), horario: '14:00' },

  { profId: 'p1', data: hoje(), horario: '08:00' },
  { profId: 'p1', data: hoje(), horario: '11:00' },
  { profId: 'p1', data: hoje(), horario: '15:00' },

  { profId: 'p5', data: hoje(), horario: '09:30' },
  { profId: 'p5', data: hoje(), horario: '13:30' },
  { profId: 'p5', data: hoje(), horario: '16:00' },

  { profId: 'p3', data: amanha(), horario: '08:30' },
  { profId: 'p3', data: amanha(), horario: '10:00' },
  { profId: 'p3', data: amanha(), horario: '14:30' },

  { profId: 'p4', data: amanha(), horario: '08:00' },
  { profId: 'p4', data: amanha(), horario: '09:00' },
  { profId: 'p4', data: amanha(), horario: '16:30' },
];

let servicoAtivoId = null;
let profSelecionadoId1 = null;
let agendadosNestaSessao = [];

function renderizarChips() {
  const container = document.getElementById('servico-chips');
  if (!container) return;

  container.innerHTML = SERVICOS.map(s => `
    <div class="servico-chip" id="chip-${s.id}" onclick="selecionarServico('${s.id}')">
      <span>${s.icone}</span>
      <span>${s.nome}</span>
    </div>
  `).join('');
}

/**
 * @param {string} servicoId - ID do serviço clicado (ex.: 's1')
 */
function selecionarServico(servicoId) {
  servicoAtivoId    = servicoId;
  profSelecionadoId1 = null;

  document.querySelectorAll('.servico-chip').forEach(chip => {
    chip.classList.remove('ativo');
  });
  document.getElementById('chip-' + servicoId).classList.add('ativo');

  const msg = document.getElementById('selecao-msg-1');
  if (msg) msg.textContent = '';

  filtrarProfissionais(servicoId);
}

/**
 * @param {string} servicoId
 */
function filtrarProfissionais(servicoId) {
  const grid = document.getElementById('demo-prof-grid');
  if (!grid) return;

  const habilitados = PROFISSIONAIS.filter(prof =>
    prof.qualquer || prof.especialidades.includes(servicoId)
  );

  if (habilitados.length === 0) {
    grid.innerHTML = '<div class="vazio-msg">Nenhum profissional disponível para este serviço.</div>';
    return;
  }

  function iniciais(nome) {
    return nome.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  }

  grid.innerHTML = habilitados.map(prof => {
    const isQualquer = prof.qualquer;
    const isSelecionado = prof.id === profSelecionadoId1;

    return `
      <div class="demo-prof-card${isSelecionado ? ' selecionado' : ''}"
           id="dpc-${prof.id}"
           onclick="selecionarProfissional1('${prof.id}')">

        ${isQualquer
          ? `<div class="demo-avatar" style="background:${prof.cor};font-size:1.4rem;">🔀</div>`
          : `<div class="demo-avatar" style="background:${prof.cor}">${iniciais(prof.nome)}</div>`
        }

        <div class="demo-prof-nome">${prof.nome}</div>
        <div class="demo-prof-role">${prof.cargo}</div>
      </div>
    `;
  }).join('');
}

/**
 * @param {string} profId - ID do profissional clicado
 */
function selecionarProfissional1(profId) {
  profSelecionadoId1 = profId;

  document.querySelectorAll('.demo-prof-card').forEach(card => {
    card.classList.remove('selecionado');
  });
  const card = document.getElementById('dpc-' + profId);
  if (card) card.classList.add('selecionado');

  const prof    = PROFISSIONAIS.find(p => p.id === profId);
  const servico = SERVICOS.find(s => s.id === servicoAtivoId);

  const msg = document.getElementById('selecao-msg-1');
  if (msg && prof && servico) {
    msg.className = 'selecao-msg sucesso';
    msg.textContent =
      `✓ ${prof.nome} selecionado para "${servico.nome}". ` +
      `No sistema completo, o próximo passo seria escolher data e horário.`;
  }
}

function popularSelectProfissionais() {
  const select = document.getElementById('demo-prof-select');
  if (!select) return;

  const profissionaisEspecificos = PROFISSIONAIS.filter(p => !p.qualquer);

  select.innerHTML =
    '<option value="">— Selecione —</option>' +
    profissionaisEspecificos.map(p => `
      <option value="${p.id}">${p.nome} — ${p.cargo}</option>
    `).join('');
}

function aoMudarFiltroConflito() {
  const profId = document.getElementById('demo-prof-select').value;
  const data   = document.getElementById('demo-data').value;

  const grid        = document.getElementById('demo-times-grid');
  const contador    = document.getElementById('slots-contador');
  const msgSelecao  = document.getElementById('selecao-msg-2');

  if (msgSelecao) {
    msgSelecao.textContent = '';
    msgSelecao.className   = 'selecao-msg';
  }

  if (!profId || !data) {
    grid.innerHTML     = '<div class="sem-selecao-msg">Selecione um profissional e uma data para ver os horários.</div>';
    contador.style.display = 'none';
    return;
  }

  renderizarGradeConflito(profId, data);
}

/**
 * @param {string} profId - ID do profissional
 * @param {string} data   - Data no formato YYYY-MM-DD
 * @returns {string[]}    - Array de horários ocupados (ex.: ['09:00','14:00'])
 */
function verificarConflitos(profId, data) {
  const ocupadosAgenda = AGENDA
    .filter(ag => ag.profId === profId && ag.data === data)
    .map(ag => ag.horario);

  const ocupadosSessao = agendadosNestaSessao
    .filter(ag => ag.profId === profId && ag.data === data)
    .map(ag => ag.horario);

  return [...new Set([...ocupadosAgenda, ...ocupadosSessao])];
}

/**
 * @param {string} profId - ID do profissional selecionado
 * @param {string} data   - Data selecionada (YYYY-MM-DD)
 */
function renderizarGradeConflito(profId, data) {
  const grid     = document.getElementById('demo-times-grid');
  const contador = document.getElementById('slots-contador');

  const horariosOcupados = verificarConflitos(profId, data);

  const agendadosSessaoSet = new Set(
    agendadosNestaSessao
      .filter(ag => ag.profId === profId && ag.data === data)
      .map(ag => ag.horario)
  );

  let countLivres   = 0;
  let countOcupados = 0;

  const slotsHTML = TODOS_HORARIOS.map(horario => {
    const estaOcupado   = horariosOcupados.includes(horario);
    const estaEmSessao  = agendadosSessaoSet.has(horario);

    if (estaOcupado) {
      countOcupados++;
    } else {
      countLivres++;
    }

    let classeSlot = 'slot-horario';
    if (estaEmSessao)       classeSlot += ' recém-agendado';
    else if (estaOcupado)   classeSlot += ' ocupado';

    let statusTexto = '';
    if (estaEmSessao)       statusTexto = 'Agendado';
    else if (estaOcupado)   statusTexto = 'Ocupado';
    else                    statusTexto = 'Livre';

    const clickAttr = (!estaOcupado && !estaEmSessao)
      ? `onclick="agendarSlot('${profId}', '${data}', '${horario}')"`
      : '';

    return `
      <div class="${classeSlot}" ${clickAttr}>
        ${horario}
        <span class="slot-status-badge">${statusTexto}</span>
      </div>
    `;
  }).join('');

  grid.innerHTML = slotsHTML;

  document.getElementById('slots-livres-num').textContent   = countLivres;
  document.getElementById('slots-ocupados-num').textContent = countOcupados;
  contador.style.display = 'inline-block';
}

/**
 * @param {string} profId  - ID do profissional
 * @param {string} data    - Data (YYYY-MM-DD)
 * @param {string} horario - Horário clicado (HH:MM)
 */
function agendarSlot(profId, data, horario) {
  agendadosNestaSessao.push({ profId, data, horario });

  renderizarGradeConflito(profId, data);

  const prof = PROFISSIONAIS.find(p => p.id === profId);

  const msg = document.getElementById('selecao-msg-2');
  if (msg) {
    msg.className   = 'selecao-msg sucesso';
    msg.textContent =
      `✓ Horário ${horario} reservado para ${prof?.nome || 'profissional'} ` +
      `em ${formatarData(data)}. O slot foi bloqueado em tempo real.`;
  }
}

/**
 * @param {string} dataStr - Data no formato YYYY-MM-DD
 * @returns {string}       - Data formatada (ex.: "18/04/2026")
 */
function formatarData(dataStr) {
  if (!dataStr) return '';
  const [ano, mes, dia] = dataStr.split('-');
  return `${dia}/${mes}/${ano}`;
}

document.addEventListener('DOMContentLoaded', function () {

  /* --- Ação 1 --- */
  renderizarChips();

  if (SERVICOS.length > 0) {
    selecionarServico(SERVICOS[0].id);
  } else {
    filtrarProfissionais(null);
  }

  /* --- Ação 2 --- */
  popularSelectProfissionais();

  document.getElementById('demo-data').value = hoje();

  document.getElementById('demo-prof-select').addEventListener('change', aoMudarFiltroConflito);
  document.getElementById('demo-data').addEventListener('change', aoMudarFiltroConflito);
});