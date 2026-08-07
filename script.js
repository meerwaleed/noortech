// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => nav.classList.remove('open'))
  );
}

// Footer year updater
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ============================================================
// TEAM MODAL
// ============================================================
const teamData = {
  'richard-scott': {
    name: 'Richard Scott',
    title: 'Sector Advisor',
    bio: [
      'Richard Scott is a Sector Advisor with experience in both onshore and offshore renewables, having spent most of his 22-year career working on renewables projects across five continents.',
      'Richard is VP Operations at JERA Nex, where he is responsible for the delivery of the company\'s global onshore renewables portfolio.',
      'Before the launch of JERA Nex, Richard was the Business Development Director for JERA\'s renewables business. Previously, he was with SSE Renewables in roles including Head of Business Development and operational asset management of offshore and onshore wind projects. A civil engineer by training, Richard has lived in Singapore, UAE, Kenya, Sierra Leone, and Iraq, and currently resides in the UK.'
    ],
    credentials: [
      'VP Operations — JERA Nex',
      'Business Development Director — JERA Renewables',
      'Head of Business Development & Asset Management — SSE Renewables',
      'Civil Engineer by training'
    ]
  },
  'matt-cheney': {
    name: 'Matt Cheney',
    title: 'Executive Board Member & CEO of Catalyst',
    bio: [
      'Matt has brought to life a series of large-scale renewable energy companies and funds including CP-EM, Conveyance Capital Partners, CleanPath Ventures, Fotowatio RV, MMA Renewable Ventures, and Nuon nv Americas.',
      'He has syndicated tax-efficient and direct funding for solar and wind projects totaling over 6 GW globally. He is also a serial investor in promising start-ups.'
    ],
    credentials: ['BS — The American University, Washington DC', 'Master\'s Degree — Johns Hopkins SAIS, Washington DC']
  },
  'hani-bakr': {
    name: 'Hani Bakr',
    title: 'Managing Director — Strategy & Investments',
    bio: [
      'Hani Bakr brings over 30 years of experience in Saudi Arabia spanning banking, financial services, real estate, international business, compliance and operations.',
      'He has led the growth of Noortech, building it into a capable service provider in electrical solutions across commercial and industrial sectors. He is currently leading the evolution of Noortech into a next-generation energy platform.',
      'His focus is on building a scalable platform that combines execution capability, financial structuring, and advisory services, positioning the business to play a central role in the region\'s energy transition and industrial transformation.'
    ],
    credentials: ['BS in Industrial Management — King Fahd University of Petroleum & Minerals (KFUPM)', 'Business Leadership Course — London Business School']
  },
  'waleed-bakr': {
    name: 'Waleed Bakr',
    title: 'Managing Director — Engineering',
    bio: [
      'Waleed Bakr has over three decades of experience across electrical engineering, project execution, and executive leadership within Saudi Arabia\'s industrial and infrastructure sectors.',
      'He played a central role in building and scaling Noortech from a project-focused engineering firm into a trusted provider of electrical and energy solutions. His strength lies in combining technical expertise with operational leadership, having overseen complex installations, managed large project portfolios, and led multidisciplinary teams at scale.',
      'He participated in the Society of Advanced Systems in Building Integration at Carnegie Mellon University, and attended the WPC Energy UK National Committee Expert Workshop at Deloitte, London (October 2024). He is now actively positioning Noortech for its next phase of growth in energy advisory and transaction support.'
    ],
    credentials: [
      'MSc in Finance (Distinction) — Regent\'s University London',
      'MSc in Electrical Engineering — Pennsylvania State University, USA',
      'BSc with High Honors in Electrical Engineering — KFUPM, Dhahran',
      'Undergraduate internship — ABB, Baden, Germany & Turgi-Zurich, Switzerland',
      'Memberships: IEEE | Saudi Council of Engineers (SCE) | KFUPM Commencement Committee'
    ]
  },
  'waleed-meer': {
    name: 'Waleed Meer',
    title: 'Financial Controller',
    bio: [
      'Waleed Meer has over 16 years of experience specializing in financial management, audit oversight, regulatory compliance, and internal financial control systems.',
      'He has led end-to-end financial control functions including statutory audits, account reconciliations, and implementation of robust internal control frameworks, ensuring compliance with Saudi regulatory requirements including VAT, payroll, and EOSB obligations.',
      'Meer has played a key role in improving financial workflow efficiency through the integration of ERP systems including Odoo, NetSuite, and QuickBooks, and development of structured Excel-based reconciliation and reporting models.'
    ],
    credentials: [
      'Association of Chartered Certified Accountants (ACCA-UK)',
      'CPA — Institute of Certified Public Accountants of Pakistan (ICPAP)',
      'MBA — Virtual University of Pakistan',
      'Bachelor of Commerce — University of the Punjab'
    ]
  },
  'hani-waqadani': {
    name: 'Hani Al-Waqadani',
    title: 'Administration & Compliance Manager',
    bio: [
      'Hani Al-Waqadani leads administration, compliance, and governance at Noortech, ensuring the company operates with strong regulatory alignment and disciplined internal controls.',
      'He is responsible for establishing and maintaining compliance frameworks, overseeing corporate administration, and managing risk across client engagements and internal operations — including developing policies and procedures, monitoring regulatory adherence, and ensuring audit readiness and documentation integrity.',
      'Al-Waqadani plays a central role in strengthening governance structures as Noortech scales, supporting contract discipline, regulatory interfacing, and internal accountability.'
    ],
    credentials: ['Bachelor\'s degree in Accounting — Umm Al-Qura University']
  },
  'waleed-adly': {
    name: 'Waleed Adly',
    title: 'Solar Energy Assistant Engineer',
    bio: [
      'Waleed Adly is an Assistant Engineer specializing in solar PV systems with 5+ years of experience delivering distributed energy projects across Saudi Arabia.',
      'He is responsible for end-to-end solar PV project delivery including feasibility assessment, system design, execution, commissioning, and final handover. He specializes in conducting detailed site assessments to determine the technical and commercial viability of Solar PPAs, forming a critical foundation for investment decisions.',
      'His capabilities include advanced PV system design and modeling using PVsyst and AutoCAD, on-site supervision of installations, and effective coordination with contractors, suppliers, and clients to ensure seamless project delivery.'
    ],
    credentials: [
      'B.Eng. in Power Engineering — Helwan University, Egypt (2021)',
      'Registered Engineer — Saudi Council of Engineers (SCE), Energy Engineering (valid through 2028)',
      'Certified Solar PV Installer — Saudi Electricity Company (valid through 2028)',
      'Solar PV Designer — TVTC Accredited Training (40 hours)'
    ]
  },
  'thamer-mataen': {
    name: 'Thamer Al-Mataen',
    title: 'Technical Assistant',
    bio: [
      'Thamer Al-Mataen supports the delivery of renewable energy advisory projects with a focus on technical coordination, system understanding, and on-ground execution support.',
      'He contributes to project workflows including site assessments, data collection, and technical documentation, ensuring alignment between design assumptions and field realities. His training in solar PV installation enables him to support renewable energy system deployment.'
    ],
    credentials: [
      'Bachelor\'s in Applied Power & Electrical Machines Engineering — College of Technology, Jeddah',
      'Solar PV Installation Certification',
      'Risk Management Certification',
      'Occupational Safety and Health Certification',
      'Firefighting and Fire Prevention Certification',
      'Safety Supervision Certification'
    ]
  }
};

function openModal(memberId) {
  const d = teamData[memberId];

  const modal = document.getElementById('teamModal');
  const box   = modal.querySelector('.modal-box');

  box.setAttribute('dir', 'ltr');

  // Populate
  modal.querySelector('.modal-name').textContent  = d.name;
  modal.querySelector('.modal-role').textContent  = d.title;
  modal.querySelector('.modal-bio').innerHTML     = d.bio.map(p => `<p>${p}</p>`).join('');

  const cred = modal.querySelector('.modal-credentials');
  if (d.credentials && d.credentials.length) {
    cred.innerHTML = `<h4>Qualifications & Credentials</h4><ul>${d.credentials.map(c => `<li>${c}</li>`).join('')}</ul>`;
    cred.style.display = 'block';
  } else {
    cred.style.display = 'none';
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('teamModal').classList.remove('open');
  document.body.style.overflow = '';
}

// Close on overlay click
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('teamModal');
  if (overlay) {
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  }
});

// Close on ESC
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ============================================================
// FORM SUBMISSION — inline success message
// ============================================================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    const errorEl = document.getElementById('form-error');
    if (errorEl) errorEl.style.display = 'none';

    const formData = new FormData(contactForm);
    try {
      const res = await fetch('https://formly.email/submit', {
        method: 'POST',
        body: formData
      });
      if (!res.ok) throw new Error('Submission rejected: ' + res.status);

      contactForm.style.display = 'none';
      const success = document.getElementById('form-success');
      if (success) success.style.display = 'block';
    } catch (err) {
      console.warn('Form error:', err);
      if (errorEl) errorEl.style.display = 'block';
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}
