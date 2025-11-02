// Family Data with Telugu Names
const teluguNames = {
    'Devayi': 'దేవయ్య', 'Rajanna': 'రాజన్న', 'Parameshwar': 'పరమేశ్వర్', 'Devu bhai': 'దేవు భాయ్',
    'Jagadeeshwar': 'జగదీశ్వర్', 'Puspa': 'పుష్ప', 'Laxmi': 'లక్ష్మి', 'Ravinder': 'రవీంద్ర్',
    'Anand': 'ఆనంద్', 'Nagamani': 'నాగమణి', 'Krishnam raju': 'కృష్ణం రాజు', 'Ashwini': 'అశ్విని',
    'Rambabu': 'రాంబాబు', 'Madhura': 'మధుర', 'Latha': 'లత', 'Rajendra Prasad': 'రాజేంద్ర ప్రసాద్',
    'Srikanth': 'శ్రీకాంత్', 'Mounika': 'మౌనిక', 'Vivek': 'వివేక్', 'Vamsi': 'వంశీ', 'Bunty': 'బంటీ',
    'Raju': 'రాజు', 'Chinna Raju': 'చిన్న రాజు', 'Uday': 'ఉదయ్', 'Teja': 'తేజ', 'Bunny': 'బన్నీ',
    'Srinika': 'శ్రీనిక', 'Dhruva': 'ధ్రువ', 'Frooty': 'ఫ్రూటీ', 'Agaam': 'ఆగామ్', 'Veer': 'వీర్', 'Potti': 'పొట్టి'
};

const familyData = {
    generation1: [
        { id: 'devayi', name: 'Devayi', telugu: teluguNames['Devayi'], gender: 'female', spouse: 'Rajanna', spouseId: 'rajanna', generation: 1, children: ['parameshwar', 'jagadeeshwar'], isRootCouple: true, photo: 'images/devayi.png' },
        { id: 'rajanna', name: 'Rajanna', telugu: teluguNames['Rajanna'], gender: 'male', spouse: 'Devayi', spouseId: 'devayi', generation: 1, children: ['parameshwar', 'jagadeeshwar'], isRootCouple: true, photo: 'images/rajanna.png' }
    ],
    generation2: [
        { id: 'parameshwar', name: 'Parameshwar', telugu: teluguNames['Parameshwar'], gender: 'male', spouse: 'Devu bhai', spouseId: 'devubhai', generation: 2, parents: ['devayi', 'rajanna'], children: ['laxmi-parameshwar', 'anand'], isBiologicalChild: true, photo: 'images/parameshwar.png' },
        { id: 'devubhai', name: 'Devu bhai', telugu: teluguNames['Devu bhai'], gender: 'female', spouse: 'Parameshwar', spouseId: 'parameshwar', generation: 2, children: ['laxmi-parameshwar', 'anand'], photo: 'images/devubhai.png' },
        { id: 'jagadeeshwar', name: 'Jagadeeshwar', telugu: teluguNames['Jagadeeshwar'], gender: 'male', spouse: 'Puspa', spouseId: 'puspa', generation: 2, parents: ['devayi', 'rajanna'], children: ['krishnamraju', 'rambabu', 'latha', 'laxmi-jagadeeshwar'], isBiologicalChild: true, photo: 'images/jagadeeshwar.png' },
        { id: 'puspa', name: 'Puspa', telugu: teluguNames['Puspa'], gender: 'female', spouse: 'Jagadeeshwar', spouseId: 'jagadeeshwar', generation: 2, children: ['krishnamraju', 'rambabu', 'latha', 'laxmi-jagadeeshwar'], photo: 'images/puspa.png' }
    ],
    generation3: [
        { id: 'laxmi-parameshwar', name: 'Laxmi', telugu: teluguNames['Laxmi'], gender: 'female', spouse: 'Ravinder', spouseId: 'ravinder', generation: 3, parents: ['parameshwar', 'devubhai'], children: ['mounika', 'vamsi', 'bunty'], isBiologicalChild: true, photo: 'images/laxmi-parameshwar.png' },
        { id: 'ravinder', name: 'Ravinder', telugu: teluguNames['Ravinder'], gender: 'male', spouse: 'Laxmi', spouseId: 'laxmi-parameshwar', generation: 3, children: ['mounika', 'vamsi', 'bunty'], photo: 'images/ravinder.png' },
        { id: 'anand', name: 'Anand', telugu: teluguNames['Anand'], gender: 'male', spouse: 'Nagamani', spouseId: 'nagamani', generation: 3, parents: ['parameshwar', 'devubhai'], children: ['raju', 'chinna-raju'], isBiologicalChild: true, photo: 'images/anand.png' },
        { id: 'nagamani', name: 'Nagamani', telugu: teluguNames['Nagamani'], gender: 'female', spouse: 'Anand', spouseId: 'anand', generation: 3, children: ['raju', 'chinna-raju'], photo: 'images/nagamani.png' },
        { id: 'latha', name: 'Latha', telugu: teluguNames['Latha'], gender: 'female', spouse: 'Rajendra Prasad', spouseId: 'rajendra-prasad', generation: 3, parents: ['jagadeeshwar', 'puspa'], children: ['uday', 'teja', 'bunny'], isBiologicalChild: true, photo: 'images/latha.png' },
        { id: 'rajendra-prasad', name: 'Rajendra Prasad', telugu: teluguNames['Rajendra Prasad'], gender: 'male', spouse: 'Latha', spouseId: 'latha', generation: 3, children: ['uday', 'teja', 'bunny'], photo: 'images/rajendra-prasad.png' },
        { id: 'krishnamraju', name: 'Krishnam raju', telugu: teluguNames['Krishnam raju'], gender: 'male', spouse: 'Ashwini', spouseId: 'ashwini', generation: 3, parents: ['jagadeeshwar', 'puspa'], children: ['srinika'], isBiologicalChild: true, photo: 'images/krishnamraju.png' },
        { id: 'ashwini', name: 'Ashwini', telugu: teluguNames['Ashwini'], gender: 'female', spouse: 'Krishnam raju', spouseId: 'krishnamraju', generation: 3, children: ['srinika'], photo: 'images/ashwini.png' },
        { id: 'rambabu', name: 'Rambabu', telugu: teluguNames['Rambabu'], gender: 'male', spouse: 'Madhura', spouseId: 'madhura', generation: 3, parents: ['jagadeeshwar', 'puspa'], children: ['dhruva'], isBiologicalChild: true, photo: 'images/rambabu.png' },
        { id: 'madhura', name: 'Madhura', telugu: teluguNames['Madhura'], gender: 'female', spouse: 'Rambabu', spouseId: 'rambabu', generation: 3, children: ['dhruva'], photo: 'images/madhura.png' },
        { id: 'laxmi-jagadeeshwar', name: 'Laxmi', telugu: teluguNames['Laxmi'], gender: 'female', spouse: 'Srikanth', spouseId: 'srikanth', generation: 3, parents: ['jagadeeshwar', 'puspa'], children: ['frooty', 'agaam'], isBiologicalChild: true, photo: 'images/laxmi-jagadeeshwar.png' },
        { id: 'srikanth', name: 'Srikanth', telugu: teluguNames['Srikanth'], gender: 'male', spouse: 'Laxmi', spouseId: 'laxmi-jagadeeshwar', generation: 3, children: ['frooty', 'agaam'], photo: 'images/srikanth.png' }
    ],
    generation4: [
        { id: 'mounika', name: 'Mounika', telugu: teluguNames['Mounika'], gender: 'female', spouse: 'Vivek', spouseId: 'vivek', generation: 4, parents: ['laxmi-parameshwar', 'ravinder'], children: ['veer', 'potti'], isBiologicalChild: true, photo: 'images/mounika.png' },
        { id: 'vivek', name: 'Vivek', telugu: teluguNames['Vivek'], gender: 'male', spouse: 'Mounika', spouseId: 'mounika', generation: 4, children: ['veer', 'potti'], photo: 'images/vivek.png' },
        { id: 'vamsi', name: 'Vamsi', telugu: teluguNames['Vamsi'], gender: 'male', generation: 4, parents: ['laxmi-parameshwar', 'ravinder'], isBiologicalChild: true, photo: 'images/vamsi.png' },
        { id: 'bunty', name: 'Bunty', telugu: teluguNames['Bunty'], gender: 'male', generation: 4, parents: ['laxmi-parameshwar', 'ravinder'], isBiologicalChild: true, photo: 'images/bunty.png' },
        { id: 'raju', name: 'Raju', telugu: teluguNames['Raju'], gender: 'male', generation: 4, parents: ['anand', 'nagamani'], isBiologicalChild: true, photo: 'images/raju.png' },
        { id: 'chinna-raju', name: 'Chinna Raju', telugu: teluguNames['Chinna Raju'], gender: 'male', generation: 4, parents: ['anand', 'nagamani'], isBiologicalChild: true, photo: 'images/chinna-raju.png' },
        { id: 'uday', name: 'Uday', telugu: teluguNames['Uday'], gender: 'male', generation: 4, parents: ['latha', 'rajendra-prasad'], isBiologicalChild: true, photo: 'images/uday.png' },
        { id: 'teja', name: 'Teja', telugu: teluguNames['Teja'], gender: 'male', generation: 4, parents: ['latha', 'rajendra-prasad'], isBiologicalChild: true, photo: 'images/teja.png' },
        { id: 'bunny', name: 'Bunny', telugu: teluguNames['Bunny'], gender: 'male', generation: 4, parents: ['latha', 'rajendra-prasad'], isBiologicalChild: true, photo: 'images/bunny.png' },
        { id: 'srinika', name: 'Srinika', telugu: teluguNames['Srinika'], gender: 'female', generation: 4, parents: ['krishnamraju', 'ashwini'], isBiologicalChild: true, photo: 'images/srinika.png' },
        { id: 'dhruva', name: 'Dhruva', telugu: teluguNames['Dhruva'], gender: 'male', generation: 4, parents: ['rambabu', 'madhura'], isBiologicalChild: true, photo: 'images/dhruva.png' },
        { id: 'frooty', name: 'Frooty', telugu: teluguNames['Frooty'], gender: 'female', generation: 4, parents: ['laxmi-jagadeeshwar', 'srikanth'], isBiologicalChild: true, photo: 'images/frooty.png' },
        { id: 'agaam', name: 'Agaam', telugu: teluguNames['Agaam'], gender: 'male', generation: 4, parents: ['laxmi-jagadeeshwar', 'srikanth'], isBiologicalChild: true, photo: 'images/agaam.png' }
    ],
    generation5: [
        { id: 'veer', name: 'Veer', telugu: teluguNames['Veer'], gender: 'male', generation: 5, parents: ['mounika', 'vivek'], isBiologicalChild: true, photo: 'images/veer.png' },
        { id: 'potti', name: 'Potti', telugu: teluguNames['Potti'], gender: 'male', generation: 5, parents: ['mounika', 'vivek'], isBiologicalChild: true, photo: 'images/potti.png' }
    ]
};

const generationNames = { 1: 'వేళ్ళు', 2: 'పెద్దలు', 3: 'తల్లిదండ్రులు', 4: 'పిల్లలు', 5: 'మనవలు' };
const allMembers = [...familyData.generation1, ...familyData.generation2, ...familyData.generation3, ...familyData.generation4, ...familyData.generation5];
function getMemberById(id) { return allMembers.find(m => m.id === id); }
function getInitials(name) { return name.split(' ').map(w => w.charAt(0).toUpperCase()).join(''); }

// TREE GENERATION - Kids at TOP, Elders at BOTTOM!
function generateSVGTree() {
    const svg = document.getElementById('familyTreeSVG');
    svg.innerHTML = '';
    const width = 1200, height = 800, centerX = width / 2;
    const colors = { 1: '#8b4513', 2: '#228b22', 3: '#32cd32', 4: '#90ee90', 5: '#7cb342' };
    const genY = { 5: 80, 4: 220, 3: 380, 2: 540, 1: 700 }; // REVERSED with better spacing!
    const positions = {};
    
    // Gen 5 at TOP
    familyData.generation5.forEach((m, i) => { positions[m.id] = { x: centerX + (i - 0.5) * 100, y: genY[5] }; });
    
    // Gen 4
    const g4 = familyData.generation4;
    g4.forEach((m, i) => { positions[m.id] = { x: 120 + (i * (width - 240) / g4.length), y: genY[4] }; });
    
    // Gen 3 - Latha/Prasad moved LEFT of Krishnam/Ashwini
    ['laxmi-parameshwar', 'ravinder', 'anand', 'nagamani', 'latha', 'rajendra-prasad', 'krishnamraju', 'ashwini', 'rambabu', 'madhura', 'laxmi-jagadeeshwar', 'srikanth'].forEach((id, i) => {
        const m = getMemberById(id);
        if (m) positions[id] = { x: 100 + (i * (width - 200) / 12), y: genY[3] };
    });
    
    // Gen 2
    familyData.generation2.forEach((m, i) => { positions[m.id] = { x: centerX + (i - 1.5) * 120, y: genY[2] }; });
    
    // Gen 1 at BOTTOM
    familyData.generation1.forEach((m, i) => { positions[m.id] = { x: centerX + (i - 0.5) * 60, y: genY[1] }; });
    
    // Draw spouse connections (curved pink dotted lines)
    allMembers.forEach(m => {
        if (m.spouse && m.spouseId && positions[m.id] && positions[m.spouseId] && m.id < m.spouseId) {
            const p1 = positions[m.id], p2 = positions[m.spouseId];
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            const midX = (p1.x + p2.x) / 2;
            const controlY = p1.y - 15; // Curve upward
            path.setAttribute('d', `M ${p1.x},${p1.y} Q ${midX},${controlY} ${p2.x},${p2.y}`);
            path.setAttribute('class', 'tree-branch to-spouse');
            svg.appendChild(path);
        }
    });
    
    // Draw beautiful curved lines from couple center to children
    allMembers.forEach(m => {
        if (m.children && m.spouse && m.id < m.spouseId) {
            const p1 = positions[m.id], p2 = positions[m.spouseId];
            if (p1 && p2) {
                const cx = (p1.x + p2.x) / 2, cy = (p1.y + p2.y) / 2;
                m.children.forEach(cid => {
                    const c = getMemberById(cid), cp = positions[cid];
                    if (c && cp) {
                        // Aesthetic curved path
                        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                        const midY = (cy + cp.y) / 2;
                        const controlX = cx + (cp.x - cx) * 0.3; // Slight horizontal curve
                        path.setAttribute('d', `M ${cx},${cy} Q ${controlX},${midY} ${cp.x},${cp.y}`);
                        path.setAttribute('class', c.isBiologicalChild ? 'tree-branch to-child' : 'tree-branch to-spouse');
                        svg.appendChild(path);
                    }
                });
            }
        }
    });
    
    // Draw nodes with BIGGER text
    allMembers.forEach(m => {
        if (positions[m.id]) {
            const pos = positions[m.id], g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            g.setAttribute('data-member-id', m.id); g.style.cursor = 'pointer';
            
            const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            c.setAttribute('cx', pos.x); c.setAttribute('cy', pos.y);
            c.setAttribute('r', m.generation === 1 ? 38 : m.generation === 2 ? 33 : 28);
            c.setAttribute('fill', colors[m.generation]);
            c.setAttribute('stroke', m.isBiologicalChild ? '#daa520' : m.spouse ? '#ff4081' : '#daa520');
            c.setAttribute('stroke-width', m.isBiologicalChild ? 3 : 2);
            g.appendChild(c);
            
            const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            t.setAttribute('x', pos.x); t.setAttribute('y', pos.y + 5); t.setAttribute('text-anchor', 'middle');
            t.setAttribute('fill', 'white'); t.setAttribute('font-size', m.generation === 1 ? 17 : 15); t.setAttribute('font-weight', 'bold');
            t.textContent = getInitials(m.name); g.appendChild(t);
            
            const n = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            n.setAttribute('x', pos.x); n.setAttribute('y', pos.y + (m.generation === 1 ? 60 : 50)); n.setAttribute('text-anchor', 'middle');
            n.setAttribute('fill', '#654321'); n.setAttribute('font-size', m.generation <= 2 ? 14 : 13); n.setAttribute('font-weight', '700');
            n.textContent = m.name; g.appendChild(n);
            
            const te = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            te.setAttribute('x', pos.x); te.setAttribute('y', pos.y + (m.generation === 1 ? 75 : 65)); te.setAttribute('text-anchor', 'middle');
            te.setAttribute('fill', '#8b4513'); te.setAttribute('font-size', m.generation <= 2 ? 13 : 12); te.setAttribute('font-weight', '600');
            te.textContent = m.telugu || ''; g.appendChild(te);
            
            g.addEventListener('click', () => showMemberModal(m.id));
            svg.appendChild(g);
        }
    });
}



function generateVillageHouses(filterGen = 'all') {
    const container = document.getElementById('villageHouses');
    const members = filterGen === 'all' ? allMembers : allMembers.filter(m => m.generation === parseInt(filterGen));
    container.innerHTML = members.map(m => `
        <div class="family-house" data-member-id="${m.id}">
            <div class="house-structure"><div class="house-roof"></div>
                <div class="house-walls"><div class="house-member-photo">${m.photo ? `<img src="${m.photo}" alt="${m.name}">` : `<div class="avatar-placeholder">${getInitials(m.name)}</div>`}</div></div>
            </div>
            <div class="house-member-name">${m.name}</div>
            <div class="house-member-details">${m.telugu || ''}</div>
        </div>
    `).join('');
    document.querySelectorAll('.family-house').forEach(h => h.addEventListener('click', function() { showMemberModal(this.getAttribute('data-member-id')); }));
}

function generateRiverTimeline() {
    const container = document.getElementById('riverBoats');
    const pos = [{ x: 150, y: 120 }, { x: 350, y: 170 }, { x: 550, y: 240 }, { x: 750, y: 330 }, { x: 950, y: 480 }];
    let html = '';
    for (let i = 1; i <= 5; i++) {
        const gm = familyData[`generation${i}`].filter((m, idx, self) => idx === self.findIndex(t => t.id === m.id));
        html += `<div class="river-boat" style="left: ${pos[i-1].x}px; top: ${pos[i-1].y}px;" data-generation="${i}">
            <div class="boat-sail"></div><div class="boat-body"><div class="boat-generation">${generationNames[i]}</div><div class="boat-members">${gm.length} మంది</div></div></div>`;
    }
    container.innerHTML = html;
    document.querySelectorAll('.river-boat').forEach(b => b.addEventListener('click', function() {
        const g = this.getAttribute('data-generation');
        document.querySelector('.nav-hut[data-view="gallery"]').click();
        setTimeout(() => document.querySelector(`.gen-filter[data-gen="${g}"]`).click(), 300);
    }));
}

// IMPROVED MODAL - Shows Person + Spouse + Kids!
function showMemberModal(memberId) {
    const m = getMemberById(memberId);
    if (!m) return;
    const modal = document.getElementById('memberModal');
    const spouse = m.spouse && m.spouseId ? getMemberById(m.spouseId) : null;
    let childHTML = '';
    if (m.children && m.children.length > 0) {
        childHTML = '<div style="margin-top: 2rem;"><h3 style="font-size: 1.8rem; color: #558b2f; margin-bottom: 1rem;">పిల్లలు / Children:</h3><div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 1.5rem;">';
        m.children.forEach(cid => {
            const c = getMemberById(cid);
            if (c) childHTML += `<div style="text-align: center; cursor: pointer;" onclick="showMemberModal('${c.id}')">
                <div style="width: 80px; height: 80px; margin: 0 auto; border-radius: 50%; background: linear-gradient(135deg, #7cb342, #558b2f); display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; font-weight: 700; border: 3px solid #daa520;">${getInitials(c.name)}</div>
                <div style="margin-top: 0.5rem; font-weight: 600; color: #654321;">${c.name}</div>
                <div style="font-size: 0.85rem; color: #8b4513;">${c.telugu || ''}</div></div>`;
        });
        childHTML += '</div></div>';
    }
    
    document.getElementById('bambooModalBody').innerHTML = `
        <div style="width: 200px; height: 200px; margin: 0 auto 1rem; border-radius: 50%; background: linear-gradient(135deg, #7cb342, #558b2f); display: flex; align-items: center; justify-content: center; color: white; font-size: 5rem; font-weight: 700; border: 6px solid #daa520; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">${getInitials(m.name)}</div>
        <h2 style="font-size: 2.5rem; font-weight: 700; text-align: center; color: #654321; margin-bottom: 0.5rem;">${m.name}</h2>
        <h3 style="font-size: 2rem; font-weight: 600; text-align: center; color: #8b4513; margin-bottom: 2rem;">${m.telugu || ''}</h3>
        <div style="background: linear-gradient(135deg, rgba(255,255,255,0.7), rgba(245,245,220,0.7)); border-radius: 20px; padding: 2rem; border: 4px solid #d4a574;">
            <div style="display: flex; justify-content: space-between; padding: 1rem 0; border-bottom: 2px solid #daa520;">
                <span style="font-weight: 700; color: #558b2f; font-size: 1.1rem;">తరం:</span><span style="color: #654321; font-size: 1.1rem;">${generationNames[m.generation]}</span></div>
            <div style="display: flex; justify-content: space-between; padding: 1rem 0; border-bottom: 2px solid #daa520;">
                <span style="font-weight: 700; color: #558b2f; font-size: 1.1rem;">లింగం:</span><span style="color: #654321; font-size: 1.1rem;">${m.gender === 'male' ? '♂ పురుషుడు' : '♀ స్త్రీ'}</span></div>
            ${spouse ? `<div style="display: flex; justify-content: space-between; padding: 1rem 0;">
                <span style="font-weight: 700; color: #558b2f; font-size: 1.1rem;">భార్య/భర్త:</span><span style="color: #654321; font-size: 1.1rem; cursor: pointer;" onclick="showMemberModal('${spouse.id}')">${spouse.name} (${spouse.telugu})</span></div>` : ''}
        </div>${childHTML}`;
    modal.classList.add('active');
}

function initNavigation() {
    const huts = document.querySelectorAll('.nav-hut'), views = document.querySelectorAll('.village-view');
    huts.forEach(h => h.addEventListener('click', function() {
        const v = this.getAttribute('data-view');
        huts.forEach(x => x.classList.remove('active')); views.forEach(x => x.classList.remove('active'));
        this.classList.add('active'); document.getElementById(`${v}-view`).classList.add('active');
    }));
}

function initFilters() {
    document.querySelectorAll('.gen-filter').forEach(f => f.addEventListener('click', function() {
        document.querySelectorAll('.gen-filter').forEach(x => x.classList.remove('active'));
        this.classList.add('active'); generateVillageHouses(this.getAttribute('data-gen'));
    }));
}

function initModal() {
    const modal = document.getElementById('memberModal');
    document.querySelector('.bamboo-close').addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
}

document.addEventListener('DOMContentLoaded', function() {
    generateSVGTree(); generateVillageHouses(); generateRiverTimeline();
    initNavigation(); initFilters(); initModal();
});