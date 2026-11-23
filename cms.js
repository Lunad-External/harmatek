(function () {
  if (window.HT_CMS) return;
  var KEY = 'ht-cms', CAT = 'ht-cms-catalog';
  var PDF = 'public/';
  var IMG = 'src/assets/images/';
  var DEFAULTS = {
    home: {
      heroBadge: 'Hamratek Industrial Creative Solutions',
      heroP1: 'We are a specialized industrial engineering services company providing integrated solutions in the design and manufacturing of machines, production lines, and industrial , in addition to manufacturing spare parts and industrial components with high quality standards.',
      heroP2: 'Our team combines engineering expertise with modern technologies to deliver efficient, accurate, and reliable solutions that meet our clients’ operational needs while ensuring quality, safety, and on-time delivery.',
      heroP3: 'نحن شركة متخصصة في الخدمات الهندسية الصناعية، نقدم حلولًا متكاملة تشمل تصميم وتنفيذ الماكينات وخطوط الإنتاج بالإضافة إلى قطع الغيار والمكونات الصناعية بأعلى معايير الجوده',
      heroButton: 'Explore Solutions',
      heroSlides: [{ image: IMG + 'homepagehero1.png' }, { image: IMG + 'homepagehero2.jpg' }, { image: IMG + 'homepagehero3.jpg' }, { image: IMG + 'homepagehero4.jpg' }],
      heroStats: [{ value: '99.9%', label: 'Safety First' }, { value: '<50ms', label: 'Response Time' }, { value: '360°', label: 'Accuracy' }],
      productsBadge: 'Our Solutions',
      productsTitle: 'Browse',
      productsHighlight: 'Our Products',
      productsIntro: 'Discover our comprehensive suite of safety and productivity solutions designed for the modern warehouse.',
      productsButton: 'View all products',
      productCards: [
        { title: 'Contactors', description: 'Advanced sensor technology that detects pedestrians, objects, and other forklifts in real-time to prevent accidents.', image: 'src/assets/productImages/aux-contact-ua-2-1a1b-front-mount-1no-1nc-for-mc-9b-mc150a.webp', features: 'Consistent performance under use\nRefined surface finish\nLong-term durability\nEasy maintenance design' },
        { title: 'Power Supplies', description: 'Comprehensive fleet management and productivity monitoring system for data-driven warehouse optimization.', image: 'src/assets/productImages/mean-well-ndr-120-24-high-quality-power-supply-120-w-5-a-24-v.webp', features: 'Refined surface finish\nLong-term durability\nEasy maintenance design\nStable structural integrity' },
        { title: 'Engineering Services', description: 'Advanced safety systems, industrial automation and bespoke technical support', image: IMG + 'engineering-solutions.png', features: 'Design & manufacturing of custom machines\nIndustrial automation and process optimization solutions\nHigh-precision industrial component manufacturing\nEnd-to-end engineering support' }
      ],
      whyTitle: 'Why Choose',
      whyHighlight: 'HarmaTek',
      whyIntro: 'Industry-leading technology backed by in-house R&D expertise.',
      whyItems: [
        { title: 'Enhanced Safety', description: 'Reduce workplace incidents with advanced collision detection that protects both pedestrians and equipment.' },
        { title: 'Boost Productivity', description: 'Optimize operations with real-time data analytics and fleet management insights.' },
        { title: 'Real-Time Monitoring', description: '24/7 visibility into your fleet operations with instant alerts and comprehensive reporting.' },
        { title: 'Custom Integration', description: 'Fully configurable solutions tailored to your unique operational requirements.' }
      ],
      aboutBadge: 'About HarmaTek',
      aboutTitle: 'Pioneering',
      aboutHighlight: 'Workplace Safety',
      aboutP1: 'Established in 2022, HarmaTek is an Australian innovator committed to elevating safety and productivity standards within the material handling industry.',
      aboutP2: 'Our vision advocates for a future where enhanced safety and productivity features are not just optional or luxury add-ons, but fundamental components of every forklift—ensuring a safer, more efficient, and technologically advanced industry standard.',
      missionTitle: 'Our Mission',
      missionText: 'Innovation and excellence in creating systems that enhance both safety and efficiency, while ensuring accessibility and affordability for businesses of all sizes.',
      aboutStats: [{ value: '2022', label: 'Founded' }, { value: '100+', label: 'Clients Worldwide' }, { value: 'Multi', label: 'Site Deployments' }, { value: 'Custom', label: 'R&D Solutions' }],
      contactBadge: 'Get In Touch',
      contactTitle: 'Ready to',
      contactHighlight: 'Enhance Safety',
      contactIntro: 'Contact us today to discuss how our solutions can transform your operations.',
      contactInfoTitle: 'Contact Information',
      contactInfoText: 'Our team is ready to help you find the perfect safety solution for your material handling operations.',
      contactItems: [{ label: 'Email', value: 'sm@harmtek.sa', href: 'mailto:sm@harmtek.sa' }, { label: 'Phone', value: '+966 55 947 1701', href: 'tel:+966559471701' }, { label: 'Location', value: 'Riyadh, KSA', href: '#' }]
    },
    products: {
      bannerTitle: 'Our',
      bannerHighlight: 'Products',
      bannerP1: 'We are a leading company specialized in supplying all products related to electrical production lines and control panels, including PLC and VFD units. We provide comprehensive solutions that meet industry needs with the highest standards of quality and reliability. Our mission is to support our partners by delivering the latest technologies and exceptional services to ensure the continuity and efficiency of production operations',
      bannerP2: 'نحن شركة رائدة ومتخصصة في توريد جميع المنتجات المتعلقة بخطوط الإنتاج الكهربائية ولوحات التحكم، بما في ذلك وحدات) PLC وVFD، مع تقديم حلول متكاملة تلبي احتياجات الصناعة  ( بأعلى معايير الجودة والموثوقية. نسعى دائمًا لدعم شركائنا من خلال توفير أحدث التقنيات والخدمات المتميزة لضمان استمرارية وكفاءة عمليات الإنتاج',
      bannerSlides: ['hero-image-1.jpg', 'hero-image-2.jpg', 'hero-image-3.jpeg', 'hero-image-4.jpg', 'hero-image-5.jpg', 'hero-image-7.jpg', 'hero-image-8.jpg', 'hero-image-9.jpg', 'hero-image-10.jpg'].map(function (f) { return { image: IMG + f }; }),
      ctaText: 'Looking for a custom solution? We specialize in tailoring our technology to your specific needs.',
      ctaButton: 'Contact Sales Team'
    },
    brochures: {
      titleA: 'Download',
      titleB: 'our brochures',
      items: [
        { title: 'Electronics Equipment', image: IMG + 'electric-equipment.jpg', pdf: PDF + 'electric-equipment.pdf' },
        { title: 'General Profile', image: IMG + 'general-brochure.jpg', pdf: PDF + 'general-brochure.pdf' },
        { title: 'Lab Repair Services', image: IMG + 'repair-lab.jpg', pdf: PDF + 'repair-lab.pdf' },
        { title: 'Product Brochure', image: IMG + 'product-brochure.jpg', pdf: PDF + 'product-brochure.pdf' }
      ]
    },
    about: {
      title: 'About us',
      p1: 'We are a specialized industrial engineering services company providing integrated solutions in the design and manufacturing of machines, production lines, and industrial , in addition to manufacturing spare parts and industrial components with high quality standards.',
      p2: 'Our team combines engineering expertise with modern technologies to deliver efficient, accurate, and reliable solutions that meet our clients’ operational needs while ensuring quality, safety, and on-time delivery.',
      p3: 'نحن شركة متخصصة في الخدمات الهندسية الصناعية، نقدم حلولًا متكاملة تشمل تصميم وتنفيذ الماكينات وخطوط الإنتاج بالإضافة إلى قطع الغيار والمكونات الصناعية بأعلى معايير الجوده',
      images: [
        { image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop', alt: 'Electronic Circuit Board' },
        { image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop', alt: 'Industrial Automation' }
      ],
      automationTitle: 'Automation',
      automationText: 'We have an integrated team specialized in modernizing machinery and production lines. Our engineers are well qualified and expert in making a machine run utilizing all the hardware that is available in the side and make machine run with efficiency. These operations include changing the PLC and all other control devices (HMI, Inverter and servo drive...etc.) according to customer requirements.'
    },
    contact: {
      image: IMG + 'contact-page.jpg',
      cardTitle: 'Harma Tek',
      tagline: 'Specialized in maintaining machine production lines and installing electronic cards',
      phones: [{ number: '+966 55 947 1701' }, { number: '+966 57 308 2441' }, { number: '+966 53 286 8525' }],
      email: 'sm@harmatek.sa',
      location: 'Riyadh, KSA',
      locationsTitle: 'Our',
      locationsHighlight: 'Locations',
      locations: [
        { label: 'Head Office', address: "First Floor Near McDonald's, Office # 108, Riyadh, Saudi Arabia", map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d907.2550444687181!2d46.88835126955331!3d24.553964818462493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03003aa8d8a9%3A0x537de8477ac453a9!2sHarma%20Tek%20Office!5e0!3m2!1sen!2sae!4v1794821047851!5m2!1sen!2sae' },
        { label: 'Branch', address: 'Al Iskan, Riyadh 14315, Saudi Arabia', map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29026.039893807778!2d46.7829478!3d24.5803948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2fa711d1aae573%3A0x5052c3b72852fabc!2zSGFybWEgdGVrINmH2KfYsdmF2Kcg2KrZitmD!5e0!3m2!1sen!2sae!4v1794821109285!5m2!1sen!2sae' }
      ]
    },
    whatsapp: {
      number: '966559471701',
      message: 'Hi, I’d like to know more about your products and services.',
      enquiryButton: 'Send Enquiry',
      enquiryMessage: 'Hi, Please quote for {product}'
    }
  };

  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function load() { try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { return {}; } }
  function merge(def, ov) {
    if (ov === undefined || ov === null) return clone(def);
    if (Array.isArray(def) || typeof def !== 'object') return clone(ov);
    var out = {};
    Object.keys(def).forEach(function (k) { out[k] = merge(def[k], ov[k]); });
    Object.keys(ov).forEach(function (k) { if (!(k in out)) out[k] = clone(ov[k]); });
    return out;
  }
  var data = merge(DEFAULTS, load());
  function get(path) {
    var cur = data, parts = path.split('.');
    for (var i = 0; i < parts.length; i++) { if (cur == null) return undefined; cur = cur[parts[i]]; }
    return cur;
  }
  function loadCatalog() { try { var c = localStorage.getItem(CAT); return c ? JSON.parse(c) : null; } catch (e) { return null; } }
  var catalog = loadCatalog();

  window.HT_CMS = {
    defaults: function () { return clone(DEFAULTS); },
    all: function () { return data; },
    get: get,
    saveAll: function (d) {
      var ov = {};
      Object.keys(d).forEach(function (k) { ov[k] = d[k]; });
      localStorage.setItem(KEY, JSON.stringify(ov));
      data = merge(DEFAULTS, ov);
      window.dispatchEvent(new Event('ht-cms'));
    },
    resetAll: function () { localStorage.removeItem(KEY); localStorage.removeItem(CAT); data = clone(DEFAULTS); catalog = null; window.dispatchEvent(new Event('ht-cms')); },
    products: function () { return catalog || window.HARMATEK_PRODUCTS || null; },
    hasCatalogOverride: function () { return !!catalog; },
    saveCatalog: function (list) { localStorage.setItem(CAT, JSON.stringify(list)); catalog = list; window.dispatchEvent(new Event('ht-cms')); },
    resetCatalog: function () { localStorage.removeItem(CAT); catalog = null; window.dispatchEvent(new Event('ht-cms')); },
    wa: function (msg) { return 'https://wa.me/' + String(get('whatsapp.number') || '').replace(/[^\d]/g, '') + '?text=' + encodeURIComponent(msg == null ? get('whatsapp.message') : msg); },
    img: function (v) { return v || ''; }
  };

  // Apply single-value fields to static markup: data-cms="path" (text), data-cms-src / data-cms-bg / data-cms-href (attributes)
  function applyEl(el) {
    var p = el.getAttribute('data-cms');
    if (p) {
      var v = get(p), ar = get(p + '_ar');
      if (typeof v === 'string' && el.__cmsVal !== v) {
        var tn = null;
        for (var i = 0; i < el.childNodes.length; i++) if (el.childNodes[i].nodeType === 3) { tn = el.childNodes[i]; break; }
        if (tn) { tn.nodeValue = v; tn.__htAr = undefined; tn.__htEn = undefined; } else el.appendChild(document.createTextNode(v));
        el.__cmsVal = v;
      }
      if (ar) el.setAttribute('data-ar', ar); else if (el.hasAttribute('data-ar') && el.__cmsAr) el.removeAttribute('data-ar');
      el.__cmsAr = !!ar;
    }
    var s = el.getAttribute('data-cms-src'); if (s) { var sv = get(s); if (sv && el.getAttribute('src') !== sv) el.setAttribute('src', sv); }
    var b = el.getAttribute('data-cms-bg'); if (b) { var bv = get(b); if (bv) el.style.backgroundImage = "url('" + bv + "')"; }
    var h = el.getAttribute('data-cms-href'); if (h) { var hv = h === 'wa' ? window.HT_CMS.wa() : h === 'contact.emailHref' ? 'mailto:' + get('contact.email') : get(h); if (hv && el.getAttribute('href') !== hv) el.setAttribute('href', hv); }
  }
  function applyAll(root) {
    if (!root || !root.querySelectorAll) return;
    if (root.matches && root.matches('[data-cms],[data-cms-src],[data-cms-bg],[data-cms-href]')) applyEl(root);
    root.querySelectorAll('[data-cms],[data-cms-src],[data-cms-bg],[data-cms-href]').forEach(applyEl);
  }
  new MutationObserver(function (recs) {
    for (var i = 0; i < recs.length; i++) for (var j = 0; j < recs[i].addedNodes.length; j++) { var n = recs[i].addedNodes[j]; if (n.nodeType === 1) applyAll(n); }
  }).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener('ht-cms', function () { applyAll(document.body); });
  window.addEventListener('storage', function (e) { if (e.key === KEY || e.key === CAT) location.reload(); });
  if (document.body) applyAll(document.body); else document.addEventListener('DOMContentLoaded', function () { applyAll(document.body); });
})();
