/* EN-only i18n for Myers Plumbing & Heating demo */
const i18n = {
  en: {
    "services.s1t": "Plumbing repairs",
    "services.s1d": "Leaks, clogs and repairs done right.",
    "services.s2t": "Drain cleaning",
    "services.s2d": "Fast, clean drain clearing.",
    "services.s3t": "Water heaters",
    "services.s3d": "Repair and replacement of water heaters.",
    "services.s4t": "Heating service",
    "services.s4d": "Furnace and heating installation &amp; repair.",
    "services.s5t": "Sewer services",
    "services.s5d": "Sewer line repair and service.",
    "services.s6t": "Fixture installation",
    "services.s6d": "Sinks, toilets and faucets installed.",
    "nav.call": "(757) 640-8891",
    "hero.kicker": "Norfolk, Virginia · Plumbing &amp; heating · Mon–Fri 9 AM–6 PM",
    "hero.title": "Plumbing &amp; heating,<br>one trusted team.",
    "hero.sub": "Rated 4.9 out of 5 from 23 reviews: plumbing repairs, water heaters and heating service across Norfolk.",
    "hero.cta1": "Call __PHONE__",
    "trust.t1t": "4.9-star rated",
    "trust.t1d": "23 verified reviews",
    "trust.t2t": "Plumbing + heating",
    "trust.t2d": "Two trades, one call",
    "trust.t3t": "Fair pricing",
    "trust.t3d": "Honest quotes, no surprises",
    "stats.s1n": "4.9\\u2605",
    "stats.s1l": "from 23 reviews",
    "stats.s2n": "Plumbing",
    "stats.s2l": "&amp; heating, one team",
    "stats.s3n": "Norfolk",
    "stats.s3l": "&amp; surrounding areas",
    "stats.s4n": "Mon–Fri",
    "stats.s4l": "9:00 AM – 6:00 PM",
    "services.title": "Plumbing and heating, handled together",
    "why.title": "Why Norfolk calls Myers",
    "why.intro": "Plumbing and heating under one roof — one team, one call, and a 4.9-star record with local homeowners.",
    "why.l1t": "Two trades, one team",
    "why.l1d": "Plumbing and heating handled together.",
    "why.l2t": "4.9-star record",
    "why.l2d": "Rated 4.9 from 23 reviews.",
    "why.l3t": "Straightforward pricing",
    "why.l3d": "Quotes before we start.",
    "why.l4t": "Local &amp; dependable",
    "why.l4d": "Based on Grandy Ave in Norfolk.",
    "gallery.kicker": "On the job",
    "gallery.title": "Real work, real results",
    "gallery.c1": "Water heater installs",
    "gallery.c2": "Heating service you can trust",
    "reviews.title": "Rated 4.9 out of 5 by Norfolk homeowners",
    "reviews.more": "See what customers say about us — 4.9 stars from 23 reviews",
    "faq.q1": "Do you do heating as well as plumbing?",
    "faq.a1": "Yes — heating installation and repair plus full plumbing service.",
    "faq.q2": "Do you install water heaters?",
    "faq.a2": "Yes — we repair and replace water heaters.",
    "faq.q3": "Do you offer emergency service?",
    "faq.a3": "Call (757) 640-8891 during business hours and we&#8217;ll get you scheduled fast.",
    "faq.q4": "What are your hours?",
    "faq.a4": "Monday to Friday, 9:00 AM to 6:00 PM. We&#8217;re closed Saturday and Sunday.",
    "contact.hoursVal": "Mon – Fri: 9:00 AM – 6:00 PM<br>Sat – Sun: Closed",
    "footer.tag": "Plumber · Norfolk, Virginia",
    "nav.services": "Services",
    "nav.why": "Why us",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "hero.cta2": "See services",
    "services.kicker": "What we do",
    "why.kicker": "Why choose us",
    "reviews.kicker": "Word on the street",
    "faq.kicker": "Good to know",
    "faq.title": "Frequently asked questions",
    "contact.kicker": "Come see us",
    "contact.title": "Get in touch",
    "contact.addr": "Address",
    "contact.phone": "Phone",
    "contact.hours": "Hours",
    "contact.cta": "Call now",
  }
};

function applyLang(lang) {
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang("en");

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }, { passive: true });
});
