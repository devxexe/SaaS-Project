// 1. Navbar Toggle Functionality Mobile View Hook Elements
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// 2. Interactive Calculator Value Pipeline Integration Framework Formulas Engine
const teamSlider = document.getElementById('team-slider');
const hoursSlider = document.getElementById('hours-slider');
const teamVal = document.getElementById('team-val');
const hoursVal = document.getElementById('hours-val');
const savedHours = document.getElementById('saved-hours');
const savedMoney = document.getElementById('saved-money');

function calculateROI() {
    if (!teamSlider || !hoursSlider) return;

    const team = parseInt(teamSlider.value);
    const hours = parseInt(hoursSlider.value);

    // Dynamic Display value mappings configurations metrics label text update fields
    teamVal.textContent = team === 1 ? '1 member' : `${team} members`;
    hoursVal.textContent = `${hours} hrs`;

    // Mathematical formula parameters execution structures limits logic rules updates calculations
    const hoursResult = Math.round(team * hours * 0.75 * 52); 
    const cashResult = hoursResult * 35; 

    savedHours.textContent = hoursResult.toLocaleString() + ' hrs';
    savedMoney.textContent = '$' + cashResult.toLocaleString();
}

if (teamSlider && hoursSlider) {
    teamSlider.addEventListener('input', calculateROI);
    hoursSlider.addEventListener('input', calculateROI);
    calculateROI(); // Execute core initial calculation layer runtime startup trigger
}

// 3. Tab Switching Layout Control Filters Interface System Matrix Modules
function switchTab(target) {
    const btnResume = document.getElementById('tab-resume');
    const btnProjects = document.getElementById('tab-projects');
    const secResume = document.getElementById('content-resume');
    const secProjects = document.getElementById('content-projects');

    if (!btnResume || !btnProjects || !secResume || !secProjects) return;

    // Reset components tags configurations states classes overlays blocks filters properties rules
    [btnResume, btnProjects].forEach(btn => {
        btn.classList.remove('text-emerald-400', 'bg-slate-900/40');
        btn.classList.add('text-slate-400');
    });
    secResume.classList.replace('block', 'hidden');
    secProjects.classList.replace('block', 'hidden');

    // Enable active destination route parameters matching layout nodes selections controls
    if (target === 'resume') {
        btnResume.classList.replace('text-slate-400', 'text-emerald-400');
        btnResume.classList.add('bg-slate-900/40');
        secResume.classList.replace('hidden', 'block');
    } else if (target === 'projects') {
        btnProjects.classList.replace('text-slate-400', 'text-emerald-400');
        btnProjects.classList.add('bg-slate-900/40');
        secProjects.classList.replace('hidden', 'block');
    }
}

// 4. Dynamic Pricing Toggle Filter Parameter Selection Interface Updates Modules
function setPrice(period) {
    const btnMonthly = document.getElementById('toggle-monthly');
    const btnYearly = document.getElementById('toggle-yearly');
    const displayPrice = document.getElementById('price-pro');
    const displayPeriod = document.getElementById('price-period-pro');

    if (!btnMonthly || !btnYearly || !displayPrice || !displayPeriod) return;

    if (period === 'monthly') {
        btnMonthly.classList.add('bg-emerald-500', 'text-white');
        btnMonthly.classList.remove('text-slate-400');
        btnYearly.classList.remove('bg-emerald-500', 'text-white');
        btnYearly.classList.add('text-slate-400');
        
        displayPrice.textContent = '$49';
        displayPeriod.textContent = '/ month';
    } else {
        btnYearly.classList.add('bg-emerald-500', 'text-white');
        btnYearly.classList.remove('text-slate-400');
        btnMonthly.classList.remove('bg-emerald-500', 'text-white');
        btnMonthly.classList.add('text-slate-400');
        
        displayPrice.textContent = '$39';
        displayPeriod.textContent = '/ month, billed annually';
    }
}