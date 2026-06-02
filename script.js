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

// 🔹 Language toggle
const placeholders = {
  ar: { name: 'اكتب اسمك', email: 'example@company.com', message: 'كيف يمكننا المساعدة؟' },
  en: { name: 'Enter your name', email: 'example@company.com', message: 'How can we help you?' }
};

function setPlaceholders(lang) {
  const p = placeholders[lang];
  const n = document.querySelector('input[name="name"]');
  const e = document.querySelector('input[name="email"]');
  const m = document.querySelector('textarea[name="message"]');
  if (n) n.placeholder = p.name;
  if (e) e.placeholder = p.email;
  if (m) m.placeholder = p.message;
}

function toggleLang() {
  const html = document.documentElement;
  const logo = document.getElementById('brand-logo');
  const footerLogo = document.getElementById('footer-logo');
  if (document.body.classList.contains('lang-ar')) {
    document.body.classList.remove('lang-ar');
    document.body.classList.add('lang-en');
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', 'en');
    setPlaceholders('en');
    if (logo) { logo.src = 'images/logo-en.png'; logo.alt = 'Noortech'; }
    if (footerLogo) { footerLogo.src = 'images/logo-en.png'; footerLogo.alt = 'Noortech'; }
  } else {
    document.body.classList.remove('lang-en');
    document.body.classList.add('lang-ar');
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'ar');
    setPlaceholders('ar');
    if (logo) { logo.src = 'images/logo-ar.png'; logo.alt = 'نور للتقنية'; }
    if (footerLogo) { footerLogo.src = 'images/logo-ar.png'; footerLogo.alt = 'نور للتقنية'; }
  }
}

// ============================================================
// TEAM MODAL
// ============================================================
const teamData = {
  'richard-scott': {
    ar: {
      name: 'ريتشارد سكوت',
      title: 'مستشار قطاعي',
      bio: [
        'ريتشارد سكوت مستشار قطاعي يتمتع بخبرة واسعة في مشاريع الطاقة المتجددة البرية والبحرية، حيث أمضى معظم مسيرته المهنية الممتدة لـ22 عاماً في العمل على مشاريع الطاقة المتجددة عبر خمس قارات.',
        'يشغل حالياً منصب نائب الرئيس للعمليات في JERA Nex، ويتولى مسؤولية تنفيذ محفظة الشركة العالمية لمشاريع الطاقة المتجددة البرية.',
        'وقبل إطلاق JERA Nex، شغل منصب مدير تطوير الأعمال لقطاع الطاقة المتجددة في JERA. كما عمل سابقاً لدى SSE Renewables في عدة مناصب، من بينها رئيس تطوير الأعمال وإدارة الأصول التشغيلية لمشاريع الرياح البرية والبحرية. مهندس مدني بالتدريب، أقام في سنغافورة والإمارات وكينيا وسيراليون والعراق، ويقيم حالياً في المملكة المتحدة.'
      ],
      credentials: [
        'نائب الرئيس للعمليات — JERA Nex',
        'مدير تطوير الأعمال السابق — JERA Renewables',
        'رئيس تطوير الأعمال وإدارة الأصول — SSE Renewables',
        'مهندس مدني بالتدريب'
      ]
    },
    en: {
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
    }
  },
  'matt-cheney': {
    ar: {
      name: 'مات تشيني',
      title: 'عضو مجلس الإدارة التنفيذي والرئيس التنفيذي لشركة Catalyst',
      bio: [
        'أسس وقاد عدداً من شركات وصناديق الطاقة المتجددة الكبرى، من بينها CP-EM وConveyance Capital Partners وCleanPath Ventures وFotowatio RV وMMA Renewable Ventures وNuon nv Americas.',
        'نجح مات في ترتيب وتمويل مشاريع للطاقة الشمسية وطاقة الرياح تتجاوز قدرتها الإجمالية 6 جيجاواط حول العالم، من خلال هياكل تمويلية مباشرة وفعّالة ضريبياً. كما يُعد مستثمراً متسلسلاً في الشركات الناشئة الواعدة.'
      ],
      credentials: ['بكالوريوس من الجامعة الأمريكية في واشنطن', 'ماجستير من كلية الدراسات الدولية المتقدمة بجامعة جونز هوبكنز (SAIS) — واشنطن العاصمة']
    },
    en: {
      name: 'Matt Cheney',
      title: 'Executive Board Member & CEO of Catalyst',
      bio: [
        'Matt has brought to life a series of large-scale renewable energy companies and funds including CP-EM, Conveyance Capital Partners, CleanPath Ventures, Fotowatio RV, MMA Renewable Ventures, and Nuon nv Americas.',
        'He has syndicated tax-efficient and direct funding for solar and wind projects totaling over 6 GW globally. He is also a serial investor in promising start-ups.'
      ],
      credentials: ['BS — The American University, Washington DC', 'Master\'s Degree — Johns Hopkins SAIS, Washington DC']
    }
  },
  'hani-bakr': {
    ar: {
      name: 'هاني بكر',
      title: 'المدير العام — الاستراتيجية والاستثمارات',
      bio: [
        'هاني طلال بكر هو العضو المنتدب والشريك المؤسس لشركة نور للتقنية، ويتمتع بخبرة تتجاوز 30 عاماً في المملكة العربية السعودية، تمتد عبر قطاعات البنوك والخدمات المالية والعقارات والأعمال الدولية والامتثال والعمليات التشغيلية.',
        'قاد نمو شركة نور للتقنية وتحويلها إلى مقاول موثوق لحلول الخدمات الكهربائية في القطاعين التجاري والصناعي.',
        'ويقود حالياً عملية تطوير نور للتقنية لتصبح منصة طاقة متقدمة، مع التركيز على بناء منصة قابلة للتوسع تجمع بين قدرات التنفيذ والهيكلة المالية والخدمات الاستشارية، بما يعزز دور الشركة كمساهم رئيسي في تحول الطاقة والتحول الصناعي في المنطقة.'
      ],
      credentials: ['بكالوريوس في الإدارة الصناعية — جامعة الملك فهد للبترول والمعادن (KFUPM)', 'برنامج القيادة التنفيذية — London Business School']
    },
    en: {
      name: 'Hani Bakr',
      title: 'Managing Director — Strategy & Investments',
      bio: [
        'Hani Bakr brings over 30 years of experience in Saudi Arabia spanning banking, financial services, real estate, international business, compliance and operations.',
        'He has led the growth of Noortech, building it into a capable service provider in electrical solutions across commercial and industrial sectors. He is currently leading the evolution of Noortech into a next-generation energy platform.',
        'His focus is on building a scalable platform that combines execution capability, financial structuring, and advisory services, positioning the business to play a central role in the region\'s energy transition and industrial transformation.'
      ],
      credentials: ['BS in Industrial Management — King Fahd University of Petroleum & Minerals (KFUPM)', 'Business Leadership Course — London Business School']
    }
  },
  'waleed-bakr': {
    ar: {
      name: 'وليد بكر',
      title: 'المدير العام — الهندسة',
      bio: [
        'وليد طلال بكر هو المدير الهندسي والشريك المؤسس لشركة نور للتقنية، ويتمتع بخبرة تتجاوز ثلاثة عقود في مجالات الهندسة الكهربائية وتنفيذ المشاريع والقيادة التنفيذية في القطاعات الصناعية والبنية التحتية بالمملكة العربية السعودية.',
        'لعب دوراً محورياً في بناء وتوسيع أعمال نور للتقنية، وتحويلها من شركة هندسية تركز على المشاريع إلى مزود موثوق لحلول الكهرباء والطاقة يخدم العملاء التجاريين والصناعيين. تكمن قوة وليد في الجمع بين الخبرة الفنية والقيادة التشغيلية، حيث أشرف على تنفيذ مشاريع معقدة وإدارة محافظ مشاريع كبيرة وقيادة فرق متعددة التخصصات على نطاق واسع.',
        'وفي السنوات الأخيرة، وسّع نطاق تركيزه ليشمل الأبعاد المالية والاستراتيجية لقطاع الطاقة. ويشارك حالياً بفعالية في قيادة المرحلة المقبلة لنمو نور للتقنية، بما يشمل التوسع في الاستشارات المتعلقة بالطاقة ودعم المعاملات والحلول المتكاملة.'
      ],
      credentials: [
        'ماجستير في التمويل (بمرتبة امتياز) — Regent\'s University London',
        'ماجستير في الهندسة الكهربائية — Pennsylvania State University',
        'بكالوريوس مع مرتبة الشرف العالية في علوم الهندسة الكهربائية — جامعة الملك فهد للبترول والمعادن',
        'تدريب في ABB — بادن وتورغي-زيورخ، سويسرا',
        'مشاركة في برنامج Carnegie Mellon University وورشة WPC Energy UK في ديلويت، لندن (أكتوبر 2024)',
        'عضوية: IEEE | الهيئة السعودية للمهندسين | لجنة خريجي جامعة الملك فهد للبترول والمعادن'
      ]
    },
    en: {
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
    }
  },
  'waleed-meer': {
    ar: {
      name: 'وليد مير',
      title: 'المدير المالي الرقابي',
      bio: [
        'وليد مير هو المدير المالي الرقابي في نور للتقنية، ويتمتع بخبرة تتجاوز 16 عاماً في الإدارة المالية والإشراف على التدقيق والامتثال التنظيمي وأنظمة الرقابة المالية الداخلية.',
        'قاد وأدار وظائف الرقابة المالية بشكل متكامل، بما في ذلك التدقيقات النظامية وتسويات الحسابات وتنفيذ أطر رقابة داخلية قوية. ويضمن عمله الدقة والشفافية والامتثال في عمليات التقارير المالية وفق المتطلبات التنظيمية السعودية، بما يشمل ضريبة القيمة المضافة وإدارة الرواتب ومستحقات نهاية الخدمة.',
        'كما لعب دوراً مهماً في تحسين كفاءة سير العمل المالي من خلال دمج أنظمة تخطيط موارد المؤسسات ERP مثل (Odoo, NetSuite, QuickBooks)، إضافة إلى تطوير نماذج احترافية للتسويات والتقارير المالية باستخدام Excel.'
      ],
      credentials: [
        'شهادة CPA وماجستير إدارة أعمال، مع مستوى متقدم في مؤهل ACCA المهني',
        'محاسب قانوني معتمد CPA — معهد المحاسبين القانونيين المعتمدين في باكستان (ICPAP)',
        'ماجستير في إدارة الأعمال — الجامعة الافتراضية في باكستان',
        'بكالوريوس في التجارة — جامعة البنجاب في باكستان'
      ]
    },
    en: {
      name: 'Waleed Meer',
      title: 'Financial Controller',
      bio: [
        'Waleed Meer has over 16 years of experience specializing in financial management, audit oversight, regulatory compliance, and internal financial control systems.',
        'He has led end-to-end financial control functions including statutory audits, account reconciliations, and implementation of robust internal control frameworks, ensuring compliance with Saudi regulatory requirements including VAT, payroll, and EOSB obligations.',
        'Meer has played a key role in improving financial workflow efficiency through the integration of ERP systems including Odoo, NetSuite, and QuickBooks, and development of structured Excel-based reconciliation and reporting models.'
      ],
      credentials: [
        'CPA certification and an MBA, with advanced standing in the ACCA professional qualification',
        'CPA — Institute of Certified Public Accountants of Pakistan (ICPAP)',
        'MBA — Virtual University of Pakistan',
        'Bachelor of Commerce — University of the Punjab'
      ]
    }
  },
  'hani-waqadani': {
    ar: {
      name: 'هاني الوقداني',
      title: 'مدير الإدارة والامتثال',
      bio: [
        'هاني الوقداني هو مدير الإدارة والامتثال في نور للتقنية، ويقود أعمال الإدارة والامتثال والحوكمة بالشركة، بما يضمن التوافق التنظيمي القوي والانضباط في أنظمة الرقابة الداخلية.',
        'يتولى مسؤولية تطوير وإدارة أطر الامتثال والإشراف على الإدارة المؤسسية وإدارة المخاطر عبر العمليات الداخلية وعلاقات العملاء. كما تشمل مهامه تطوير السياسات والإجراءات ومراقبة الالتزام بالمتطلبات التنظيمية وضمان جاهزية التدقيق وسلامة الوثائق المؤسسية.',
        'ويلعب الوقداني دوراً محورياً في تعزيز هياكل الحوكمة مع توسع أعمال نور للتقنية، من خلال دعم الانضباط التعاقدي والتنسيق التنظيمي والمساءلة الداخلية.'
      ],
      credentials: ['بكالوريوس في المحاسبة — جامعة أم القرى']
    },
    en: {
      name: 'Hani Al-Waqadani',
      title: 'Administration & Compliance Manager',
      bio: [
        'Hani Al-Waqadani leads administration, compliance, and governance at Noortech, ensuring the company operates with strong regulatory alignment and disciplined internal controls.',
        'He is responsible for establishing and maintaining compliance frameworks, overseeing corporate administration, and managing risk across client engagements and internal operations — including developing policies and procedures, monitoring regulatory adherence, and ensuring audit readiness and documentation integrity.',
        'Al-Waqadani plays a central role in strengthening governance structures as Noortech scales, supporting contract discipline, regulatory interfacing, and internal accountability.'
      ],
      credentials: ['Bachelor\'s degree in Accounting — Umm Al-Qura University']
    }
  },
  'waleed-adly': {
    ar: {
      name: 'وليد عدلي',
      title: 'مهندس مساعد للطاقة الشمسية',
      bio: [
        'وليد عدلي مهندس مساعد متخصص في أنظمة الطاقة الشمسية الكهروضوئية، ويتمتع بخبرة تزيد عن خمس سنوات في تنفيذ مشاريع الطاقة الموزعة في المملكة العربية السعودية.',
        'يجمع بين القدرات الفنية القوية في التصميم والتنفيذ الميداني العملي، بما يضمن تنفيذ أنظمة مرتبطة بالشبكة بكفاءة عالية ووفق أعلى معايير الجودة والامتثال. كما يمتلك خبرة متكاملة في إدارة دورة حياة المشاريع من البداية حتى التسليم النهائي.',
        'تشمل مسؤولياته: تقييم الجدوى الفنية والتجارية، تصميم الأنظمة الشمسية، التنفيذ والتشغيل والتسليم النهائي، إعداد دراسات المواقع لتقييم جدوى اتفاقيات شراء الطاقة الشمسية (PPA)، تصميم ومحاكاة الأنظمة باستخدام PVsyst وAutoCAD، والإشراف الموقعي والتنسيق مع المقاولين والموردين والعملاء.'
      ],
      credentials: [
        'بكالوريوس في هندسة القوى الكهربائية — جامعة حلوان، مصر (2021)',
        'مهندس معتمد لدى الهيئة السعودية للمهندسين — تخصص هندسة الطاقة (ساري حتى 2028)',
        'اعتماد تركيب أنظمة الطاقة الشمسية — شركة السعودية للكهرباء (ساري حتى 2028)',
        'برنامج تصميم أنظمة الطاقة الشمسية — معتمد من المؤسسة العامة للتدريب التقني والمهني TVTC'
      ]
    },
    en: {
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
    }
  },
  'thamer-mataen': {
    ar: {
      name: 'ثامر ال مطاعن',
      title: 'مساعد فني',
      bio: [
        'ثامر ال مطاعن مساعد فني في نور للتقنية، يساهم في دعم تنفيذ مشاريع الاستشارات المتعلقة بالطاقة المتجددة مع التركيز على التنسيق الفني وفهم الأنظمة ودعم التنفيذ الميداني.',
        'يحمل درجة البكالوريوس في هندسة القوى التطبيقية والآلات الكهربائية من الكلية التقنية بجدة، مما يوفر له أساساً قوياً في الأنظمة الكهربائية وتوليد الطاقة وأداء المعدات.',
        'يساهم في سير العمل بالمشاريع من خلال تقييم المواقع وجمع البيانات وإعداد الوثائق الفنية ودعم مواءمة التصاميم مع الواقع الميداني. كما أن تدريبه في تركيب أنظمة الطاقة الشمسية يمكّنه من دعم عمليات نشر مشاريع الطاقة المتجددة.'
      ],
      credentials: [
        'بكالوريوس في هندسة القوى التطبيقية والآلات الكهربائية — الكلية التقنية بجدة',
        'شهادة تركيب أنظمة الطاقة الشمسية',
        'شهادة إدارة المخاطر',
        'شهادة السلامة والصحة المهنية',
        'شهادة مكافحة الحرائق والوقاية منها',
        'شهادة الإشراف على السلامة'
      ]
    },
    en: {
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
  }
};

function openModal(memberId) {
  const lang = document.body.classList.contains('lang-en') ? 'en' : 'ar';
  const d = teamData[memberId][lang];
  const isRtl = lang === 'ar';

  const modal = document.getElementById('teamModal');
  const box   = modal.querySelector('.modal-box');

  // Set direction on modal box
  box.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

  // Populate
  modal.querySelector('.modal-name').textContent  = d.name;
  modal.querySelector('.modal-role').textContent  = d.title;
  modal.querySelector('.modal-bio').innerHTML     = d.bio.map(p => `<p>${p}</p>`).join('');

  const cred = modal.querySelector('.modal-credentials');
  if (d.credentials && d.credentials.length) {
    cred.innerHTML = `<h4>${isRtl ? 'المؤهلات والشهادات' : 'Qualifications & Credentials'}</h4><ul>${d.credentials.map(c => `<li>${c}</li>`).join('')}</ul>`;
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

    const formData = new FormData(contactForm);
    try {
      await fetch('https://formly.email/submit', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
    } catch (err) {
      console.warn('Form error:', err);
    }

    contactForm.style.display = 'none';
    const success = document.getElementById('form-success');
    if (success) success.style.display = 'block';
  });
}
