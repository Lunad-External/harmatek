(function () {
  if (window.HT_ADMIN_T) return;
  var D = {
    "Admin Panel": "لوحة التحكم", "Sign in to manage website content": "سجّل الدخول لإدارة محتوى الموقع", "Username": "اسم المستخدم", "Password": "كلمة المرور",
    "Incorrect username or password.": "اسم المستخدم أو كلمة المرور غير صحيحة.", "Sign in": "تسجيل الدخول", "← Back to website": "→ العودة إلى الموقع",
    "HarmaTek": "هارماتك", "View website ↗": "عرض الموقع ↗", "Export backup (JSON)": "تصدير نسخة احتياطية (JSON)", "Import backup": "استيراد نسخة احتياطية",
    "Reset everything to original": "استعادة كل المحتوى الأصلي", "Sign out": "تسجيل الخروج", "Open page ↗": "فتح الصفحة ↗", "● Unsaved changes": "● تغييرات غير محفوظة",
    "Reset section": "استعادة القسم", "Save changes": "حفظ التغييرات",
    "Edits are saved in this browser and show on the website immediately for this browser. Arabic fields are optional — leave empty to use the built-in translation.": "تُحفظ التعديلات في هذا المتصفح وتظهر على الموقع فورًا في هذا المتصفح. الحقول العربية اختيارية — اتركها فارغة لاستخدام الترجمة المدمجة.",
    "Upload": "رفع", "Uploaded file stored": "تم حفظ الملف المرفوع", "+ Add": "+ إضافة", "Delete": "حذف", "Edit": "تعديل", "Cancel": "إلغاء",
    "Product catalogue": "كتالوج المنتجات", "products · changes here save instantly": "منتج · تُحفظ التغييرات هنا فورًا", "Reset catalogue": "استعادة الكتالوج",
    "+ Add product": "+ إضافة منتج", "Save product": "حفظ المنتج", "← Prev": "→ السابق", "Next →": "التالي ←", "Page": "صفحة", "of": "من",
    "Paste a URL or upload a file": "الصق رابطًا أو ارفع ملفًا", "Arabic (optional)": "العربية (اختياري)", "Move up": "تحريك لأعلى", "Move down": "تحريك لأسفل",
    "Paste a URL or upload": "الصق رابطًا أو ارفع ملفًا", "Image file name, URL, or upload": "اسم ملف الصورة أو رابط أو رفع", "Search by name, description or brand…": "ابحث بالاسم أو الوصف أو العلامة التجارية…",
    "Hero section": "القسم الرئيسي", "The brochure cards in the hero are managed in the Brochure section.": "تُدار بطاقات الكتيبات في القسم الرئيسي من قسم الكتيبات.",
    "Badge text": "نص الشارة", "Main paragraph": "الفقرة الرئيسية", "Second paragraph": "الفقرة الثانية",
    "Arabic paragraph (shown in English mode, hidden in Arabic mode)": "الفقرة العربية (تظهر في الوضع الإنجليزي وتُخفى في الوضع العربي)", "Button label": "نص الزر",
    "Background slideshow images": "صور العرض الخلفي", "Products preview": "معاينة المنتجات", "Heading (first part)": "العنوان (الجزء الأول)", "Heading (highlighted part)": "العنوان (الجزء المميز)",
    "Intro text": "النص التمهيدي", "Product cards": "بطاقات المنتجات", "Features (one per line)": "المزايا (ميزة في كل سطر)", "Why choose us": "لماذا تختارنا",
    "Feature cards": "بطاقات المزايا", "About preview": "معاينة من نحن", "Paragraph 1": "الفقرة 1", "Paragraph 2": "الفقرة 2", "Mission title": "عنوان المهمة", "Mission text": "نص المهمة",
    "Stats cards": "بطاقات الإحصائيات", "Stats": "الإحصائيات", "Contact preview": "معاينة التواصل", "Info title": "عنوان المعلومات", "Info text": "نص المعلومات", "Contact items": "عناصر التواصل",
    "Link (mailto:, tel:, or URL)": "الرابط (mailto: أو tel: أو عنوان URL)", "Page banner": "لافتة الصفحة", "Arabic paragraph (shown in English mode)": "الفقرة العربية (تظهر في الوضع الإنجليزي)",
    "Paragraph": "الفقرة", "Banner slideshow images": "صور عرض اللافتة", "Bottom call to action": "دعوة الإجراء السفلية", "Page heading": "عنوان الصفحة",
    "Also shown as the download cards in the Home hero.": "تظهر أيضًا كبطاقات تحميل في القسم الرئيسي للصفحة الرئيسية.", "Brochures": "الكتيبات", "Cover image": "صورة الغلاف", "PDF file": "ملف PDF",
    "Paste a PDF link, or upload a small PDF (under 3 MB).": "الصق رابط PDF أو ارفع ملف PDF صغيرًا (أقل من 3 ميجابايت).", "Introduction": "المقدمة", "Images": "الصور", "Page title": "عنوان الصفحة", "Image description": "وصف الصورة",
    "Automation": "الأتمتة", "Contact card": "بطاقة التواصل", "Header image": "صورة الرأس", "Company name": "اسم الشركة", "Tagline": "الشعار النصي", "Phone numbers": "أرقام الهاتف", "Phone number": "رقم الهاتف",
    "Locations": "المواقع", "Addresses": "العناوين", "Address": "العنوان", "Google Maps embed link": "رابط تضمين خرائط Google",
    "Paste the Google Maps embed URL or the full <iframe> code.": "الصق رابط تضمين خرائط Google أو كود <iframe> كاملًا.", "WhatsApp settings": "إعدادات واتساب",
    "WhatsApp number (with country code, digits only)": "رقم واتساب (مع رمز الدولة، أرقام فقط)", "Default message (floating WhatsApp button)": "الرسالة الافتراضية (زر واتساب العائم)",
    "Product card button label": "نص زر بطاقة المنتج", "Product enquiry message": "رسالة الاستفسار عن المنتج", "Use {product} where the product name should appear.": "استخدم {product} حيث يجب أن يظهر اسم المنتج.",
    "Product name": "اسم المنتج", "Product name (Arabic, optional)": "اسم المنتج (بالعربية، اختياري)", "Description (Arabic, optional)": "الوصف (بالعربية، اختياري)",
    "Use an uploaded image, a full URL, or the original image file name.": "استخدم صورة مرفوعة أو رابطًا كاملًا أو اسم ملف الصورة الأصلي.", "Product name is required": "اسم المنتج مطلوب",
    "Home": "الرئيسية", "Products": "المنتجات", "Brochure": "الكتيبات", "About": "من نحن", "Contact": "اتصل بنا", "WhatsApp": "واتساب", "Help": "المساعدة",
    "Image": "الصورة", "Title": "العنوان", "Value": "القيمة", "Label": "التسمية", "Badge": "الشارة", "Description": "الوصف", "Text": "النص", "Email": "البريد الإلكتروني",
    "Location": "الموقع", "Brand": "العلامة التجارية", "Unbranded": "بدون علامة تجارية", "No matches": "لا توجد نتائج", "New product": "منتج جديد", "Edit product": "تعديل المنتج",
    "Changes saved": "تم حفظ التغييرات", "Could not save — storage is full. Use smaller images or links.": "تعذّر الحفظ — مساحة التخزين ممتلئة. استخدم صورًا أصغر أو روابط.",
    "File added — remember to save": "تمت إضافة الملف — لا تنسَ الحفظ", "Product deleted": "تم حذف المنتج", "Catalogue restored": "تمت استعادة الكتالوج", "Product added": "تمت إضافة المنتج",
    "Product saved": "تم حفظ المنتج", "Everything restored": "تمت استعادة كل المحتوى", "Backup imported": "تم استيراد النسخة الاحتياطية", "Invalid backup file": "ملف نسخة احتياطية غير صالح",
    "Delete this item?": "حذف هذا العنصر؟", "PDF is larger than 3 MB — please paste a link instead.": "ملف PDF أكبر من 3 ميجابايت — يرجى لصق رابط بدلًا منه.",
    "Restore the original product catalogue? Your product edits will be lost.": "استعادة كتالوج المنتجات الأصلي؟ ستفقد تعديلاتك على المنتجات.",
    "Restore ALL website content and products to the original? This cannot be undone.": "استعادة كل محتوى الموقع والمنتجات إلى الأصل؟ لا يمكن التراجع عن ذلك.",
    "Restore the original content for": "استعادة المحتوى الأصلي لقسم", "(Not saved until you click Save changes.)": "(لن يُحفظ حتى تضغط حفظ التغييرات.)", "Delete": "حذف",
    "Help & instructions": "المساعدة والتعليمات", "Language": "اللغة"
  };
  var KEY = 'ht-admin-lang';
  var lang = localStorage.getItem(KEY) || 'en';
  var norm = function (s) { return s.replace(/\s+/g, ' ').trim(); };
  var M = {}; Object.keys(D).forEach(function (k) { M[norm(k)] = D[k]; });
  window.HT_ADMIN_LANG = function () { return lang; };
  window.HT_ADMIN_T = function (s) { if (lang !== 'ar') return s; var v = M[norm(s)]; return v === undefined ? s : v; };
  function trText(n) {
    var cur = n.nodeValue;
    if (lang === 'ar') {
      if (n.__a !== undefined && cur === n.__a) return;
      var v = M[norm(cur)]; if (v === undefined) return;
      n.__e = cur; n.__a = cur.match(/^\s*/)[0] + v + cur.match(/\s*$/)[0]; n.nodeValue = n.__a;
    } else if (n.__a !== undefined) { if (cur === n.__a) n.nodeValue = n.__e; n.__a = undefined; }
  }
  function trEl(el) {
    ['placeholder', 'title'].forEach(function (a) {
      var v = el.getAttribute(a), st = 'data-en-' + a; if (v == null) return;
      if (lang === 'ar') { var t = M[norm(v)]; if (t !== undefined && t !== v) { el.setAttribute(st, v); el.setAttribute(a, t); } }
      else if (el.hasAttribute(st)) { el.setAttribute(a, el.getAttribute(st)); el.removeAttribute(st); }
    });
  }
  var SKIP = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, INPUT: 1 };
  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) { if (!(root.parentNode && SKIP[root.parentNode.tagName])) trText(root); return; }
    if (root.nodeType !== 1 || (SKIP[root.tagName] && root.tagName !== 'INPUT' && root.tagName !== 'TEXTAREA')) return;
    if (root.tagName === 'TEXTAREA') { trEl(root); return; }
    trEl(root);
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, { acceptNode: function (n) { if (n.nodeType === 1 && n.tagName === 'TEXTAREA') { trEl(n); return NodeFilter.FILTER_REJECT; } return n.nodeType === 1 && (n.tagName === 'SCRIPT' || n.tagName === 'STYLE') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; } });
    var n; while ((n = w.nextNode())) { if (n.nodeType === 3) trText(n); else trEl(n); }
  }
  function apply(l) {
    lang = l; localStorage.setItem(KEY, l);
    document.documentElement.lang = l; document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
    walk(document.body);
    window.dispatchEvent(new CustomEvent('ht-admin-lang', { detail: l }));
  }
  window.HT_ADMIN_SETLANG = apply;
  var css = document.createElement('style');
  css.textContent = "html[lang=ar] body, html[lang=ar] body *:not(input):not(textarea):not(svg):not(path){font-family:'Tajawal','Outfit',sans-serif !important}" +
    "html[dir=rtl] input:not([dir=rtl]), html[dir=rtl] textarea:not([dir=rtl]){direction:ltr;text-align:left}" +
    "html[dir=rtl] input[dir=rtl], html[dir=rtl] textarea[dir=rtl]{font-family:'Tajawal','Outfit',sans-serif}";
  document.head.appendChild(css);
  new MutationObserver(function (recs) {
    if (lang !== 'ar') return;
    for (var i = 0; i < recs.length; i++) {
      var r = recs[i];
      if (r.type === 'characterData') { if (!(r.target.parentNode && SKIP[r.target.parentNode.tagName])) trText(r.target); }
      else if (r.type === 'attributes') trEl(r.target);
      else for (var j = 0; j < r.addedNodes.length; j++) walk(r.addedNodes[j]);
    }
  }).observe(document.documentElement, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['placeholder', 'title'] });
  var start = function () { apply(lang); };
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();
