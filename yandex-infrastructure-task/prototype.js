import React from 'https://esm.sh/react@18.3.1';
import {createRoot} from 'https://esm.sh/react-dom@18.3.1/client';
import htm from 'https://esm.sh/htm@3.1.1';
import {
  ThemeProvider,
  configure,
  Card,
  Table,
  Select,
  TextInput,
  Button,
  Label,
} from 'https://esm.sh/@gravity-ui/uikit@7.37.0?bundle';

configure({lang: 'en'});
const html = htm.bind(React.createElement);

const OBJECTS = [
  {id: 'patch-panel', name: 'PatchPanel', category: 'Network', status: 'OK', location: 'rack-LDN-A1', ip: '10.200.1.12', summary: 'Patch panel for top-of-rack uplinks.', comment: 'Healthy.', portsAndLinks: ['PP-01 -> london LB', 'PP-02 -> london modem 1'], ipAddresses: ['10.200.1.12/24'], natv4: ['none'], rackspace: ['Rack A1 / U02'], problems: []},
  {id: 'pdu', name: 'PDU', category: 'Power', status: 'OK', location: 'rack-LDN-A1', ip: '10.200.1.14', summary: 'Power distribution unit for A1.', comment: 'Load is balanced.', portsAndLinks: ['Outlet bank A', 'Outlet bank B'], ipAddresses: ['10.200.1.14/24'], natv4: ['none'], rackspace: ['Rack A1 / U40'], problems: []},
  {id: 'shelf', name: 'Shelf', category: 'Storage', status: 'OK', location: 'rack-LDN-A2', ip: '10.200.1.20', summary: 'Shared storage shelf.', comment: 'No alerts.', portsAndLinks: ['SAS-01 -> London server 6'], ipAddresses: ['10.200.1.20/24'], natv4: ['none'], rackspace: ['Rack A2 / U20-U24'], problems: []},
  {id: 'backup-library', name: 'backup library', category: 'Storage', status: 'Problem', location: 'rack-LDN-B1', ip: '10.200.1.30', summary: 'Tape library for cold backups.', comment: 'Drive 2 is degraded.', portsAndLinks: ['FC-01 -> london LB testing'], ipAddresses: ['10.200.1.30/24'], natv4: ['none'], rackspace: ['Rack B1 / U12-U18'], problems: ['Drive 2 degraded']},
  {id: 'london-lb', name: 'london LB', category: 'Network', status: 'OK', location: 'rack-LDN-A1', ip: '10.200.1.40', summary: 'Primary load balancer.', comment: 'Stable.', portsAndLinks: ['eth0 -> patch panel'], ipAddresses: ['10.200.1.40/24'], natv4: ['203.0.113.40 -> 10.200.1.40'], rackspace: ['Rack A1 / U06'], problems: []},
  {id: 'london-modem-1', name: 'london modem 1', category: 'Network', status: 'Problem', location: 'rack-LDN-A1', ip: '10.200.1.45', summary: 'Edge modem.', comment: 'Intermittent packet loss.', portsAndLinks: ['wan0 -> provider uplink'], ipAddresses: ['10.200.1.45/24'], natv4: ['198.51.100.45 -> 10.200.1.45'], rackspace: ['Rack A1 / U03'], problems: ['Packet loss above threshold']},
  {id: 'london-lb-testing', name: 'london LB testing', category: 'Network', status: 'OK', location: 'rack-LDN-C1', ip: '10.200.1.47', summary: 'Test load balancer cluster node.', comment: 'Ready.', portsAndLinks: ['eth0 -> london switch'], ipAddresses: ['10.200.1.47/24'], natv4: ['203.0.113.47 -> 10.200.1.47'], rackspace: ['Rack C1 / U05'], problems: []},
  {id: 'london-server-1', name: 'London server 1', category: 'Server', status: 'OK', location: 'rack-LDN-A2', ip: '10.200.1.51', summary: 'Application node #1.', comment: 'No incidents.', portsAndLinks: ['bond0 -> london switch'], ipAddresses: ['10.200.1.51/24'], natv4: ['none'], rackspace: ['Rack A2 / U07'], problems: []},
  {id: 'london-server-2', name: 'London server 2', category: 'Server', status: 'OK', location: 'rack-LDN-A2', ip: '10.200.1.52', summary: 'Application node #2.', comment: 'No incidents.', portsAndLinks: ['bond0 -> london switch'], ipAddresses: ['10.200.1.52/24'], natv4: ['none'], rackspace: ['Rack A2 / U08'], problems: []},
  {id: 'london-server-3', name: 'London server 3', category: 'Server', status: 'Problem', location: 'rack-LDN-A2', ip: '10.200.1.53', summary: 'Application node #3.', comment: 'Disk usage 95%.', portsAndLinks: ['bond0 -> london switch'], ipAddresses: ['10.200.1.53/24'], natv4: ['none'], rackspace: ['Rack A2 / U09'], problems: ['Disk usage 95%']},
  {id: 'london-server-4', name: 'London server 4', category: 'Server', status: 'Problem', location: 'rack-LDN-A2', ip: '10.200.1.60', summary: 'Database replica node with recurring network issue.', comment: 'this one needs replacement', portsAndLinks: ['eno1 -> london switch 1 / Gi1/0/14', 'eno2 -> london LB'], ipAddresses: ['10.200.1.60/24', 'fe80::2e0:4cff:fe68:0060'], natv4: ['203.0.113.60 -> 10.200.1.60'], rackspace: ['Rack A2 / U10'], problems: ['Network: 10.200.1.60']},
  {id: 'london-server-5', name: 'London server 5', category: 'Server', status: 'OK', location: 'rack-LDN-A2', ip: '10.200.1.55', summary: 'Application node #5.', comment: 'Healthy.', portsAndLinks: ['bond0 -> london switch'], ipAddresses: ['10.200.1.55/24'], natv4: ['none'], rackspace: ['Rack A2 / U11'], problems: []},
  {id: 'london-server-6', name: 'London server 6', category: 'Server', status: 'OK', location: 'rack-LDN-A2', ip: '10.200.1.56', summary: 'Application node #6.', comment: 'Healthy.', portsAndLinks: ['bond0 -> london switch'], ipAddresses: ['10.200.1.56/24'], natv4: ['none'], rackspace: ['Rack A2 / U12'], problems: []},
  {id: 'london-server-7', name: 'London server 7', category: 'Server', status: 'OK', location: 'rack-LDN-A2', ip: '10.200.1.57', summary: 'Application node #7.', comment: 'Healthy.', portsAndLinks: ['bond0 -> london switch'], ipAddresses: ['10.200.1.57/24'], natv4: ['none'], rackspace: ['Rack A2 / U13'], problems: []},
  {id: 'london-nas', name: 'london-NAS', category: 'Storage', status: 'OK', location: 'rack-LDN-B2', ip: '10.200.1.70', summary: 'NAS for design artifacts.', comment: 'Healthy.', portsAndLinks: ['eth0 -> londonswitch1'], ipAddresses: ['10.200.1.70/24'], natv4: ['none'], rackspace: ['Rack B2 / U16'], problems: []},
  {id: 'london-switch-1', name: 'londonswitch1', category: 'Network', status: 'OK', location: 'rack-LDN-A1', ip: '10.200.1.80', summary: 'Aggregation switch.', comment: 'No anomalies.', portsAndLinks: ['Gi1/0/1 -> london LB', 'Gi1/0/14 -> London server 4'], ipAddresses: ['10.200.1.80/24'], natv4: ['none'], rackspace: ['Rack A1 / U01'], problems: []},
  {id: 'lserver06-array', name: 'lserver06 array', category: 'Storage', status: 'Problem', location: 'rack-LDN-B2', ip: '10.200.1.90', summary: 'Storage array for server 06.', comment: 'One path degraded.', portsAndLinks: ['Path A -> London server 6', 'Path B -> London server 6'], ipAddresses: ['10.200.1.90/24'], natv4: ['none'], rackspace: ['Rack B2 / U18-U22'], problems: ['Path B timeout']},
  {id: 'lserver07-array', name: 'lserver07 array', category: 'Storage', status: 'Problem', location: 'rack-LDN-B2', ip: '10.200.1.91', summary: 'Storage array for server 07.', comment: 'Controller restart required.', portsAndLinks: ['Path A -> London server 7', 'Path B -> London server 7'], ipAddresses: ['10.200.1.91/24'], natv4: ['none'], rackspace: ['Rack B2 / U23-U27'], problems: ['Controller restart pending']},
];

const STATUS_OPTIONS = [
  {value: 'ALL', content: 'All'},
  {value: 'Problem', content: 'Problem'},
];

const HIDDEN_SECTIONS = {
  ports: false,
  ips: false,
  nat: false,
  rack: false,
};

function App() {
  const [query, setQuery] = React.useState('');
  const [status, setStatus] = React.useState('ALL');
  const [selectedId, setSelectedId] = React.useState(null);
  const [inspectorOpen, setInspectorOpen] = React.useState(false);
  const [sectionsOpen, setSectionsOpen] = React.useState(HIDDEN_SECTIONS);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return OBJECTS.filter((item) => {
      const statusMatch = status === 'ALL' || item.status === status;
      const queryMatch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.ip.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q);
      return statusMatch && queryMatch;
    });
  }, [query, status]);

  const selected = React.useMemo(
    () => OBJECTS.find((item) => item.id === selectedId) || null,
    [selectedId],
  );

  const columns = React.useMemo(
    () => [
      {id: 'name', name: 'Object', width: 260, primary: true},
      {
        id: 'status',
        name: 'Status',
        width: 120,
        template: (item) =>
          html`<${Label}
            theme=${item.status === 'Problem' ? 'danger' : 'success'}
            size="xs"
          >
            ${item.status}
          </${Label}>`,
      },
      {id: 'category', name: 'Type', width: 120},
      {id: 'ip', name: 'IP', width: 160, className: 'yi-mono'},
      {id: 'location', name: 'Location', width: 180},
      {
        id: 'problems',
        name: 'Problems',
        align: 'end',
        width: 90,
        template: (item) => item.problems.length,
      },
    ],
    [],
  );

  function setDefaultList() {
    setStatus('ALL');
    setQuery('');
    setSelectedId(null);
    setInspectorOpen(false);
  }

  function setWithInspector() {
    setStatus('ALL');
    setQuery('');
    setSelectedId('london-server-4');
    setInspectorOpen(true);
  }

  function setProblemOnly() {
    setStatus('Problem');
    setQuery('');
    setSelectedId(null);
    setInspectorOpen(false);
  }

  function clearFilters() {
    setStatus('ALL');
    setQuery('');
  }

  function toggleSection(key) {
    setSectionsOpen((prev) => ({...prev, [key]: !prev[key]}));
  }

  async function copyIp() {
    if (!selected) return;
    if (!navigator.clipboard) return;
    await navigator.clipboard.writeText(selected.ip);
  }

  const layoutClass = inspectorOpen && selected ? 'prototype-grid prototype-grid--inspector' : 'prototype-grid';

  return html`
    <${ThemeProvider} theme="light">
      <${Card} type="container" view="outlined" size="m" className="yi-root-card">
        <div className="yi-toolbar">
          <div className="yi-controls">
            <div className="yi-field">
              <div className="yi-field-label">Status</div>
              <${Select}
                size="m"
                width="max"
                value=${[status]}
                options=${STATUS_OPTIONS}
                onUpdate=${(value) => setStatus(value?.[0] || 'ALL')}
              />
            </div>
            <div className="yi-field yi-field--search">
              <div className="yi-field-label">Search</div>
              <${TextInput}
                size="m"
                value=${query}
                placeholder="Object, IP, location"
                hasClear=${true}
                onUpdate=${setQuery}
              />
            </div>
          </div>
          <div className="yi-actions">
            <${Button} view="outlined" size="m" onClick=${clearFilters}>Clear filters<//>
            <${Button} view="flat" size="m" onClick=${setDefaultList}>Default list<//>
            <${Button} view="flat" size="m" onClick=${setWithInspector}>With inspector<//>
            <${Button} view="flat" size="m" onClick=${setProblemOnly}>Problem filter<//>
          </div>
        </div>

        <div className=${layoutClass}>
          <div className="yi-table-wrap">
            <${Table}
              data=${filtered}
              columns=${columns}
              getRowId="id"
              onRowClick=${(item) => {
                setSelectedId(item.id);
                setInspectorOpen(true);
              }}
              getRowDescriptor=${(item) => ({
                interactive: true,
                classNames: item.id === selectedId ? ['yi-row-selected'] : [],
              })}
              emptyMessage="No objects match current filters"
            />
          </div>

          ${inspectorOpen && selected
            ? html`
                <aside className="yi-inspector">
                  <div className="yi-inspector-head">
                    <div>
                      <div className="yi-inspector-title">${selected.name}</div>
                      <div className="yi-inspector-meta">${selected.category}</div>
                    </div>
                    <${Button} size="s" view="flat" onClick=${() => setInspectorOpen(false)}>Close<//>
                  </div>

                  <div className="yi-inspector-body">
                    <${Card} type="container" view="outlined" className="yi-block">
                      <div className="yi-block-title">Problems</div>
                      <ul className="yi-list">
                        ${(selected.problems.length ? selected.problems : ['No active issues']).map(
                          (problem) => html`<li key=${problem}>${problem}</li>`,
                        )}
                      </ul>
                    </${Card}>

                    <${Card} type="container" view="outlined" className="yi-block">
                      <div className="yi-block-title">Summary</div>
                      <div className="yi-text">${selected.summary}</div>
                    </${Card}>

                    <${Card} type="container" view="outlined" className="yi-block">
                      <div className="yi-block-title">Comment</div>
                      <div className="yi-text">${selected.comment}</div>
                    </${Card}>

                    <${Card} type="container" view="outlined" className="yi-block">
                      <button className="yi-collapse-head" onClick=${() => toggleSection('ports')}>
                        Ports and links <span>${sectionsOpen.ports ? '▾' : '▸'}</span>
                      </button>
                      ${sectionsOpen.ports
                        ? html`<ul className="yi-list">${selected.portsAndLinks.map((port) => html`<li key=${port}>${port}</li>`)}</ul>`
                        : null}
                    </${Card}>

                    <${Card} type="container" view="outlined" className="yi-block">
                      <button className="yi-collapse-head" onClick=${() => toggleSection('ips')}>
                        IP addresses <span>${sectionsOpen.ips ? '▾' : '▸'}</span>
                      </button>
                      ${sectionsOpen.ips
                        ? html`
                            <div className="yi-kv">
                              <span>Primary</span><span className="yi-mono">${selected.ip}</span>
                              <span>All</span><span className="yi-mono">${selected.ipAddresses.join(', ')}</span>
                            </div>
                            <div className="yi-copy">
                              <${Button} size="s" view="outlined" onClick=${copyIp}>Copy IP<//>
                            </div>
                          `
                        : null}
                    </${Card}>

                    <${Card} type="container" view="outlined" className="yi-block">
                      <button className="yi-collapse-head" onClick=${() => toggleSection('nat')}>
                        NATv4 <span>${sectionsOpen.nat ? '▾' : '▸'}</span>
                      </button>
                      ${sectionsOpen.nat
                        ? html`<div className="yi-text yi-mono">${selected.natv4.join(', ') || 'none'}</div>`
                        : null}
                    </${Card}>

                    <${Card} type="container" view="outlined" className="yi-block">
                      <button className="yi-collapse-head" onClick=${() => toggleSection('rack')}>
                        Rackspace allocation <span>${sectionsOpen.rack ? '▾' : '▸'}</span>
                      </button>
                      ${sectionsOpen.rack
                        ? html`<div className="yi-text">${selected.rackspace.join(', ') || 'none'}</div>`
                        : null}
                    </${Card}>
                  </div>
                </aside>
              `
            : null}
        </div>
      </${Card}>
    </${ThemeProvider}>
  `;
}

const rootNode = document.getElementById('app');
if (rootNode) {
  createRoot(rootNode).render(html`<${App} />`);
}
