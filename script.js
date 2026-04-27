*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #F5F3EE;
  --surface: #FFFEFB;
  --accent: #2A6657;
  --accent-light: #E6F2EE;
  --accent-mid: #3D8A74;
  --text-primary: #1A1A18;
  --text-secondary: #6B6B67;
  --text-muted: #A0A09C;
  --border: #E2DFD8;
  --border-strong: #C8C5BC;
  --step-done: #2A6657;
  --step-active: #2A6657;
  --step-next: #D6D3CA;
  --danger: #C94040;
  --radius: 14px;
  --radius-sm: 8px;
}

body {
  font-family: 'Sora', sans-serif;
  background: var(--bg);
  color: var(--text-primary);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding: 0 2rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  width: 34px;
  height: 34px;
  background: var(--accent);
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-icon svg {
  width: 18px;
  height: 18px;
  fill: white;
}

.logo-name {
  font-family: 'DM Serif Display', serif;
  font-size: 1.2rem;
  color: var(--text-primary);
  letter-spacing: -0.3px;
}

.logo-name span {
  color: var(--accent);
}

.header-info {
  font-size: 0.78rem;
  color: var(--text-muted);
  text-align: right;
  line-height: 1.4;
}


main {
  flex: 1;
  max-width: 860px;
  margin: 0 auto;
  width: 100%;
  padding: 2.5rem 1.5rem 4rem;
}


.steps {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2.5rem;
}

.step-item {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.step-item:last-child {
  flex: 0;
}

.step-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.72rem;
  font-weight: 600;
  flex-shrink: 0;
  transition: all 0.3s;
  border: 2px solid var(--step-next);
  color: var(--text-muted);
  background: transparent;
}

.step-circle.done {
  background: var(--step-done);
  border-color: var(--step-done);
  color: white;
}

.step-circle.active {
  background: var(--surface);
  border-color: var(--step-active);
  color: var(--step-active);
}

.step-label {
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--text-muted);
  white-space: nowrap;
  transition: color 0.3s;
}

.step-label.active { color: var(--accent); }
.step-label.done   { color: var(--text-secondary); }

.step-line {
  flex: 1;
  height: 1.5px;
  background: var(--border);
  margin: 0 8px;
  transition: background 0.3s;
}

.step-line.done {
  background: var(--accent);
}

/* ── PANELS ── */
.panel {
  display: none;
  animation: fadeIn 0.3s ease;
}

.panel.active {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

.panel-title {
  font-family: 'DM Serif Display', serif;
  font-size: 1.6rem;
  color: var(--text-primary);
  margin-bottom: 0.3rem;
  letter-spacing: -0.4px;
}

.panel-subtitle {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 1.8rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
  margin-bottom: 2rem;
}

.select-card {
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  padding: 1.2rem 1rem;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  position: relative;
  overflow: hidden;
}

.select-card:hover {
  border-color: var(--accent-mid);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(42, 102, 87, 0.1);
}

.select-card.selected {
  border-color: var(--accent);
  background: var(--accent-light);
}

.select-card.selected::after {
  content: '✓';
  position: absolute;
  top: 10px;
  right: 12px;
  width: 20px;
  height: 20px;
  background: var(--accent);
  color: white;
  border-radius: 50%;
  font-size: 0.65rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
}

.card-icon {
  width: 36px;
  height: 36px;
  background: var(--accent-light);
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-bottom: 0.7rem;
}

.select-card.selected .card-icon {
  background: white;
}

.card-name {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2px;
}

.card-desc {
  font-size: 0.73rem;
  color: var(--text-secondary);
  line-height: 1.4;
}

.card-price {
  font-size: 0.78rem;
  color: var(--accent);
  font-weight: 600;
  margin-top: 6px;
}

.prof-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
  margin-bottom: 2rem;
}

.prof-card {
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  padding: 1.2rem 1rem;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  position: relative;
}

.prof-card:hover {
  border-color: var(--accent-mid);
  transform: translateY(-2px);
}

.prof-card.selected {
  border-color: var(--accent);
  background: var(--accent-light);
}

.prof-card.selected::after {
  content: '✓';
  position: absolute;
  top: 10px;
  right: 10px;
  width: 18px;
  height: 18px;
  background: var(--accent);
  color: white;
  border-radius: 50%;
  font-size: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
}

.prof-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin: 0 auto 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  font-family: 'DM Serif Display', serif;
}

.prof-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
}

.prof-role {
  font-size: 0.72rem;
  color: var(--text-secondary);
  margin-top: 2px;
}

.any-prof {
  border-style: dashed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 110px;
}

.any-icon {
  font-size: 1.6rem;
}

.calendar-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.calendar-box {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.2rem;
}

.cal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.cal-title {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-primary);
}

.cal-nav {
  background: none;
  border: 1px solid var(--border);
  border-radius: 6px;
  width: 28px;
  height: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 0.75rem;
  transition: all 0.2s;
}

.cal-nav:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.cal-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  margin-bottom: 4px;
}

.cal-weekday {
  text-align: center;
  font-size: 0.65rem;
  font-weight: 600;
  color: var(--text-muted);
  padding: 4px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.cal-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
}

.cal-day {
  text-align: center;
  padding: 7px 2px;
  font-size: 0.8rem;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.15s;
  color: var(--text-primary);
  font-weight: 400;
}

.cal-day:hover:not(.disabled):not(.empty) {
  background: var(--accent-light);
  color: var(--accent);
}

.cal-day.selected {
  background: var(--accent);
  color: white;
  font-weight: 600;
}

.cal-day.today {
  font-weight: 700;
  color: var(--accent);
}

.cal-day.today.selected {
  color: white;
}

.cal-day.disabled {
  color: var(--text-muted);
  cursor: not-allowed;
  opacity: 0.4;
}

.cal-day.empty {
  cursor: default;
}


.times-box {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.2rem;
}

.times-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.6px;
}

.times-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));
  gap: 8px;
}

.time-btn {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 8px 4px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  transition: all 0.15s;
  color: var(--text-primary);
  font-family: 'Sora', sans-serif;
}

.time-btn:hover:not(.unavailable) {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-light);
}

.time-btn.selected {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

.time-btn.unavailable {
  color: var(--text-muted);
  background: var(--bg);
  cursor: not-allowed;
  opacity: 0.4;
  text-decoration: line-through;
}

/* ── FORMULÁRIO ── */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-group.full {
  grid-column: 1 / -1;
}

label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

input,
select,
textarea {
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 10px 14px;
  font-size: 0.88rem;
  color: var(--text-primary);
  font-family: 'Sora', sans-serif;
  transition: border-color 0.2s;
  outline: none;
  width: 100%;
}

input:focus,
select:focus,
textarea:focus {
  border-color: var(--accent);
}

input.invalid,
select.invalid {
  border-color: var(--danger);
}

textarea {
  resize: vertical;
  min-height: 80px;
}

.field-error {
  font-size: 0.7rem;
  color: var(--danger);
  display: none;
}

.field-error.show {
  display: block;
}

/* ── RESUMO ── */
.summary-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.summary-header {
  background: var(--accent);
  color: white;
  padding: 1rem 1.4rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.summary-header-text {
  font-size: 0.9rem;
  font-weight: 600;
}

.summary-header-sub {
  font-size: 0.75rem;
  opacity: 0.8;
  margin-top: 2px;
}

.summary-rows {
  padding: 0 1.4rem;
}

.summary-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.9rem 0;
  border-bottom: 1px solid var(--border);
  gap: 1rem;
}

.summary-row:last-child {
  border-bottom: none;
}

.sum-key {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  flex-shrink: 0;
}

.sum-val {
  font-size: 0.86rem;
  color: var(--text-primary);
  font-weight: 500;
  text-align: right;
}

.sum-val.accent {
  color: var(--accent);
  font-weight: 700;
}

.btn-row {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
}

.btn {
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Sora', sans-serif;
  transition: all 0.2s;
  border: none;
  outline: none;
}

.btn-primary {
  background: var(--accent);
  color: white;
}

.btn-primary:hover {
  background: var(--accent-mid);
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(42, 102, 87, 0.25);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-primary:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.btn-ghost {
  background: transparent;
  color: var(--text-secondary);
  border: 1.5px solid var(--border);
}

.btn-ghost:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.success-screen {
  text-align: center;
  padding: 3rem 1rem;
}

.success-icon {
  width: 72px;
  height: 72px;
  background: var(--accent-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
}

.success-title {
  font-family: 'DM Serif Display', serif;
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.success-sub {
  font-size: 0.9rem;
  color: var(--text-secondary);
  max-width: 420px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.confirm-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.4rem;
  max-width: 420px;
  margin: 0 auto 2rem;
  text-align: left;
}

.confirm-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  font-size: 0.84rem;
  border-bottom: 1px solid var(--border);
}

.confirm-row:last-child {
  border-bottom: none;
}

.confirm-row span:first-child { color: var(--text-secondary); }
.confirm-row span:last-child  { font-weight: 600; color: var(--text-primary); }

.code-badge {
  display: inline-block;
  background: var(--accent);
  color: white;
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 1.5rem;
  font-family: monospace;
}

/* ── UTILITÁRIOS ── */
.no-date-msg {
  text-align: center;
  color: var(--text-muted);
  font-size: 0.83rem;
  padding: 2rem 1rem;
}

.optional-tag {
  font-weight: 400;
  color: var(--text-muted);
  text-transform: none;
  letter-spacing: 0;
  font-size: 0.7rem;
}

@media (max-width: 580px) {
  .calendar-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .cards-grid { grid-template-columns: 1fr 1fr; }
  .prof-grid  { grid-template-columns: repeat(3, 1fr); }
  main        { padding: 1.5rem 1rem 3rem; }
  .panel-title { font-size: 1.3rem; }
}

@media (max-width: 480px) {
  .form-grid { grid-template-columns: 1fr; }
}

@media (max-width: 380px) {
  .cards-grid { grid-template-columns: 1fr; }
  .prof-grid  { grid-template-columns: 1fr 1fr; }
}
