/* Renders everything from data.js. Normally you never need to edit this file. */
(function () {
  "use strict";
  var S = SITE;
  var $ = function (id) { return document.getElementById(id); };

  /* tiny element helper: h("div", {class:"x", text:"..."}, [children]) */
  function h(tag, attrs, kids) {
    var el = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v === undefined || v === null || v === false) return;
      if (k === "text") el.textContent = v;
      else if (k === "class") el.className = v;
      else if (k.indexOf("on") === 0) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? "" : v);
    });
    (kids || []).forEach(function (c) { if (c) el.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return el;
  }
  function ext(label, url, cls) {
    return h("a", { class: cls || "link", href: url, target: "_blank", rel: "noopener noreferrer", text: label + " ↗" });
  }
  /* Small tiles use a lighter, sharper copy from img/thumbs/ when one exists, else the full picture. */
  function timg(src, alt, extra) {
    var el = img(src.replace(/^img\//, "img/thumbs/"), alt, extra);
    el.addEventListener("error", function () { if (el.getAttribute("src") !== src) el.setAttribute("src", src); });
    return el;
  }
  function img(src, alt, extra) { return h("img", Object.assign({ src: src, alt: alt || "", loading: "eager", decoding: "async" }, extra || {})); }

  /* ---------- theme ---------- */
  var root = document.documentElement;
  function storeGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function storeSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  var saved = storeGet("theme");
  if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
  function isDark() {
    var t = root.getAttribute("data-theme");
    return t ? t === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  $("themeBtn").addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next); storeSet("theme", next);
  });

  /* ---------- lightbox ---------- */
  var lb = $("lightbox"), lbSet = [], lbIdx = 0;
  function lbShow() {
    var it = lbSet[lbIdx];
    var li = $("lbImg"); li.style.maxWidth = ""; li.onload = function () { li.style.maxWidth = Math.max(320, li.naturalWidth * 1.5) + "px"; }; li.src = it.src; li.alt = it.alt || "";
    $("lbCap").textContent = (it.alt || "") + (lbSet.length > 1 ? "  (" + (lbIdx + 1) + "/" + lbSet.length + ")" : "");
    $("lbPrev").hidden = $("lbNext").hidden = lbSet.length < 2;
  }
  function openLightbox(items, i) { lbSet = items; lbIdx = i || 0; lbShow(); if (!lb.open) lb.showModal(); }
  $("lbClose").addEventListener("click", function () { lb.close(); });
  $("lbPrev").addEventListener("click", function () { lbIdx = (lbIdx - 1 + lbSet.length) % lbSet.length; lbShow(); });
  $("lbNext").addEventListener("click", function () { lbIdx = (lbIdx + 1) % lbSet.length; lbShow(); });
  lb.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft" && lbSet.length > 1) $("lbPrev").click();
    if (e.key === "ArrowRight" && lbSet.length > 1) $("lbNext").click();
  });
  function backdropClose(d) { d.addEventListener("click", function (e) { if (e.target === d) d.close(); }); }
  backdropClose(lb); backdropClose($("projectDialog"));

  function thumbs(list) {
    if (!list || !list.length) return null;
    return h("div", { class: "thumbs" }, list.map(function (p, i) {
      return h("button", { class: "thumb", type: "button", "aria-label": "View larger: " + p.alt, onclick: function () { openLightbox(list, i); } }, [timg(p.src, p.alt, p.focus ? { style: "object-position:" + p.focus } : null)]);
    }));
  }

  /* ---------- header / hero ---------- */
  var P = S.profile, C = S.contact;
  document.title = P.name;
  $("brandMark").textContent = P.initials; $("brandName").textContent = P.name;
  $("heroStatus").textContent = P.status; $("heroName").textContent = P.name;
  (function () {
    var parts = String(P.role).split("|"), el = $("heroRole");
    el.appendChild(h("span", { class: "role-main", text: parts[0].trim() }));
    if (parts[1]) el.appendChild(h("span", { class: "role-sub", text: parts.slice(1).join("|").trim() }));
  })(); $("heroIntro").textContent = P.intro;
  var ph = $("heroPhoto"); ph.src = P.photo; ph.alt = P.photoAlt || "";
  if (P.cv) {
    ["cvTop", "cvHero", "cvView2"].forEach(function (id) { var a = $(id); a.href = P.cv; a.hidden = false; });
    $("cvDownload").href = P.cv; $("cv").hidden = false; $("cvUpdated").textContent = S.updated;
  }
  var li = (C.links || []).filter(function (l) { return /linkedin/i.test(l.label); })[0];
  if (li) { $("liHero").href = li.url; $("liHero").hidden = false; }
  P.titleBlock.forEach(function (r, i, arr) {
    var full = r.value.length > 16;
    $("titleBlock").appendChild(h("div", { class: "cell" + (full ? " full" : "") }, [h("dt", { text: r.label }), h("dd", { text: r.value })]));
  });
  $("footName").textContent = "© " + new Date().getFullYear() + " " + P.name;
  $("footMeta").textContent = "Last updated " + S.updated;

  /* ---------- about ---------- */
  S.about.paragraphs.forEach(function (t) { $("aboutText").appendChild(h("p", { text: t })); });
  S.about.focus.forEach(function (f) { $("focusList").appendChild(h("li", null, [h("b", { text: f.title }), h("span", { text: f.text })])); });

  /* ---------- experience ---------- */
  S.experience.forEach(function (x) {
    var card = h("article", { class: "card" }, [
      h("div", { class: "card-top" }, [h("h3", { text: x.role }), h("span", { class: "meta", text: x.period })]),
      h("p", { class: "org", text: x.org + (x.detail ? " · " + x.detail : "") }),
      h("ul", { class: "points" }, x.points.map(function (t) { return h("li", { text: t }); }))
    ]);
    if (x.flow) card.appendChild(h("div", { class: "flow" }, [
      h("p", { class: "flow-title", text: x.flowTitle || "Process" }),
      h("ol", null, x.flow.map(function (s) { return h("li", { text: s }); }))
    ]));
    var t = thumbs(x.photos); if (t) card.appendChild(t);
    if (x.certificate) card.appendChild(h("button", { class: "link", type: "button", onclick: function () { openLightbox([{ src: x.certificate.image, alt: x.certificate.alt }], 0); }, text: x.certificate.label }));
    $("experienceList").appendChild(card);
  });

  /* ---------- education ---------- */
  S.education.forEach(function (e) {
    $("educationList").appendChild(h("li", null, [
      h("span", { class: "meta", text: e.period }),
      h("div", null, [h("h3", { text: e.degree }), h("p", { text: e.school }), e.note ? h("span", { class: "tag", text: e.note }) : null])
    ]));
  });

  /* ---------- leadership ---------- */
  S.leadership.groups.forEach(function (g) {
    var withImg = g.roles.filter(function (r) { return r.image; });
    var solo = withImg.length === 1 && !(g.photos && g.photos.length);
    var textKids = [h("h3", { text: g.org }), h("p", { class: "org", text: g.summary })];
    textKids.push(h("div", { class: "roles" }, g.roles.map(function (r) {
      return h("div", { class: "role" }, [h("b", { text: r.role }), h("span", { class: "meta", text: r.period })]);
    })));
    if (g.link) textKids.push(ext(g.link.label, g.link.url));
    var card;
    if (solo) {
      var r0 = withImg[0], set0 = [{ src: r0.image, alt: r0.alt || r0.role }];
      card = h("article", { class: "card split" }, [
        h("div", { class: "split-text" }, textKids),
        h("div", { class: "split-media" }, [h("button", { class: "thumb", type: "button", "aria-label": "View larger: " + r0.role, onclick: function () { openLightbox(set0, 0); } }, [timg(r0.image, r0.alt || r0.role)])])
      ]);
    } else {
      card = h("article", { class: "card" }, textKids);
      if (withImg.length) {
        var set = withImg.map(function (r) { return { src: r.image, alt: r.alt || r.role }; });
        card.insertBefore(h("div", { class: "shots" + (withImg.length === 1 ? " one" : "") }, withImg.map(function (r, i) {
          return h("figure", { class: "shot-fig" }, [
            h("button", { class: "thumb", type: "button", "aria-label": "View larger: " + r.role, onclick: function () { openLightbox(set, i); } }, [timg(r.image, r.alt || r.role)]),
            h("figcaption", null, [h("b", { text: r.role }), r.period])
          ]);
        })), g.link ? card.lastChild : null);
      }
      if (g.photos && g.photos.length) {
        var row = h("div", { class: "photo-row" }, g.photos.map(function (p, i) {
          return h("button", { class: "thumb", type: "button", "aria-label": "View larger: " + p.alt, onclick: function () { openLightbox(g.photos, i); } }, [timg(p.src, p.alt)]);
        }));
        card.insertBefore(row, g.link ? card.lastChild : null);
      }
    }
    $("leadershipList").appendChild(card);
  });
  S.leadership.memberships.forEach(function (m) {
    $("membershipList").appendChild(h("li", null, [h("span", null, [h("b", { text: m.name }), " · " + m.role]), h("span", { class: "meta", text: m.period })]));
  });

  /* ---------- skills ---------- */
  var activeSkill = null;
  S.skills.forEach(function (g) {
    $("skillsList").appendChild(h("div", { class: "skill-group" }, [
      h("h3", { text: g.group }),
      h("div", { class: "chips" }, g.items.map(function (it) {
        if (it.projects && it.projects.length) return h("button", { class: "chip", type: "button", title: "Show related projects", onclick: function () { filterBySkill(it); }, text: it.name });
        return h("span", { class: "chip", text: it.name });
      }))
    ]));
  });

  /* ---------- projects ---------- */
  var cats = ["All"];
  S.projects.forEach(function (p) { if (cats.indexOf(p.category) < 0) cats.push(p.category); });
  var currentCat = "All";
  var grid = $("projectGrid"), filters = $("filters"), note = $("filterNote");
  document.querySelector("#projects .section-head p").textContent =
    numberWord(S.projects.length) + " pieces of work. Filter by tool, or open one for the full picture.";
  function numberWord(n) { return ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve"][n] || String(n); }

  function renderFilters() {
    filters.textContent = "";
    cats.forEach(function (c) {
      var n = c === "All" ? S.projects.length : S.projects.filter(function (p) { return p.category === c; }).length;
      filters.appendChild(h("button", { class: "tab", type: "button", "aria-pressed": String(!activeSkill && c === currentCat), onclick: function () { activeSkill = null; currentCat = c; renderProjects(); }, text: c + " (" + n + ")" }));
    });
  }
  function renderProjects() {
    renderFilters(); grid.textContent = "";
    var list = S.projects.filter(function (p) {
      if (activeSkill) return activeSkill.projects.indexOf(p.id) >= 0;
      return currentCat === "All" || p.category === currentCat;
    });
    note.hidden = !activeSkill; note.textContent = "";
    if (activeSkill) {
      note.appendChild(h("span", { text: "Projects using " + activeSkill.name + ":" }));
      note.appendChild(h("button", { class: "btn btn-small", type: "button", text: "Show all projects", onclick: function () { activeSkill = null; currentCat = "All"; renderProjects(); } }));
    }
    list.forEach(function (p) {
      var multi = p.images && p.images.length > 1;
      var shot = h("div", { class: "shot" + (multi ? " multi" : "") }, multi ? p.images.map(function (im, i) {
        var el = timg(im.src, i ? "" : im.alt); if (i === 0) el.className = "on"; return el;
      }) : [timg(p.image, p.alt)]);
      var card = h("button", { class: "pcard", type: "button", "aria-label": p.title + ": view details", onclick: function () { if (swiped) { swiped = false; return; } openProject(p); } }, [
        shot,
        h("div", { class: "body" }, [h("span", { class: "cat", text: p.category }), h("h3", { text: p.title }), h("p", { text: p.summary }), h("span", { class: "more", text: "View details →" })])
      ]);
      if (multi) cycler(card, shot, p.images.length);
      grid.appendChild(card);
    });
  }
  /* Image carousel on a project card: auto-cycles while hovered or focused, resets on leave, swipe on touch screens. */
  var swiped = false, reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
  function cycler(card, shot, n) {
    var imgs = shot.querySelectorAll("img"), cur = 0, timer = null;
    var dots = h("span", { class: "dots", "aria-hidden": "true" }, Array.prototype.map.call(imgs, function () { return h("i"); }));
    shot.appendChild(dots);
    function show(i) {
      cur = (i + n) % n;
      Array.prototype.forEach.call(imgs, function (el, k) { el.classList.toggle("on", k === cur); });
      Array.prototype.forEach.call(dots.children, function (d, k) { d.classList.toggle("on", k === cur); });
    }
    function start() { if (timer || reduceMotion.matches) return; show(cur + 1); timer = setInterval(function () { show(cur + 1); }, 1400); }
    function stop() { clearInterval(timer); timer = null; show(0); }
    show(0);
    card.addEventListener("mouseenter", function (e) { if (e.pointerType !== "touch") start(); });
    card.addEventListener("mouseleave", stop);
    card.addEventListener("focus", function () { if (card.matches(":focus-visible")) start(); });
    card.addEventListener("blur", stop);
    var x0 = null, y0 = 0;
    shot.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    shot.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0; x0 = null;
      if (Math.abs(dx) > 36 && Math.abs(dx) > Math.abs(dy) * 1.5) { show(cur + (dx < 0 ? 1 : -1)); swiped = true; setTimeout(function () { swiped = false; }, 350); }
    }, { passive: true });
  }
  function filterBySkill(it) {
    activeSkill = it; renderProjects();
    document.getElementById("projects").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }

  var dlg = $("projectDialog");
  function openProject(p) {
    dlg.textContent = "";
    var set = (p.images && p.images.length) ? p.images : (p.gallery && p.gallery.length) ? p.gallery : [{ src: p.image, alt: p.alt }];
    var body = h("div", { class: "dlg-body" }, [
      h("span", { class: "cat", text: p.category + (p.tag ? " · " + p.tag : "") }),
      h("h3", { id: "pdTitle", text: p.title }),
      h("p", { class: "lead", text: p.summary })
    ]);
    if (p.stats && p.stats.length) body.appendChild(h("dl", { class: "stats" }, p.stats.map(function (t) { return h("div", {}, [h("dt", { text: t.value }), h("dd", { text: t.label })]); })));
    if (p.sections && p.sections.length) {
      p.sections.forEach(function (sec) {
        body.appendChild(h("h4", { text: sec.title }));
        if (sec.text) body.appendChild(h("p", { class: "sec-text", text: sec.text }));
        if (sec.points) body.appendChild(h("ul", { class: "points" }, sec.points.map(function (t) { return h("li", { text: t }); })));
        if (sec.steps) body.appendChild(h("ol", { class: "steps" }, sec.steps.map(function (t) { return h("li", { text: t }); })));
      });
    } else if (p.highlights && p.highlights.length) {
      body.appendChild(h("h4", { text: "What it shows" }));
      body.appendChild(h("ul", { class: "points" }, p.highlights.map(function (t) { return h("li", { text: t }); })));
    }
    if (p.note) body.appendChild(h("p", { class: "note", text: p.note }));
    if (p.images && p.images.length > 1) { body.appendChild(h("h4", { text: "Gallery" })); body.appendChild(thumbs(p.images)); }
    else if (p.gallery && p.gallery.length > 1) { body.appendChild(h("h4", { text: "More pictures" })); body.appendChild(thumbs(p.gallery)); }
    if (p.skills && p.skills.length) { body.appendChild(h("h4", { text: p.sections ? "Tools" : "Skills used" })); body.appendChild(h("div", { class: "chips" }, p.skills.map(function (s) { return h("span", { class: "chip", text: s }); }))); }
    if (p.links && p.links.length) { var lr = h("div", { class: "link-row" }); p.links.forEach(function (l) { lr.appendChild(ext(l.label, l.url, "btn btn-primary")); }); body.appendChild(lr); }
    dlg.appendChild(h("button", { class: "dlg-close", type: "button", "aria-label": "Close", html: null, onclick: function () { dlg.close(); }, text: "×" }));
    dlg.appendChild(h("button", { class: "dlg-shot", type: "button", "aria-label": "View screenshot larger", onclick: function () { openLightbox(set, 0); } }, [img(p.image, p.alt, { loading: "eager" })]));
    dlg.appendChild(body);
    dlg.showModal();
  }
  renderProjects();

  /* ---------- achievements, certifications ---------- */
  S.achievements.forEach(function (a) {
    var text = [h("span", { class: "meta", text: a.meta }), h("h3", { text: a.title }), h("p", { class: "org", text: a.text })];
    if (a.link) text.push(ext(a.link.label, a.link.url));
    var card;
    if (a.images && a.images.length) {
      var media = h("div", { class: "split-media" + (a.images.length > 1 ? " two" : "") }, a.images.map(function (p, i) {
        return h("button", { class: "thumb", type: "button", "aria-label": "View larger: " + p.alt, onclick: function () { openLightbox(a.images, i); } }, [timg(p.src, p.alt)]);
      }));
      card = a.layout === "wide"
        ? h("article", { class: "card" }, text.concat([h("div", { class: "wide-media" }, [media])]))
        : h("article", { class: "card split" }, [h("div", { class: "split-text" }, text), media]);
    } else {
      card = h("article", { class: "card" }, text);
    }
    $("achievementList").appendChild(card);
  });
  S.certifications.forEach(function (c) {
    var el = h("article", { class: "cert" });
    if (c.image) el.appendChild(h("button", { class: "thumb", type: "button", "aria-label": "View certificate: " + c.name, onclick: function () { openLightbox([{ src: c.image, alt: c.name + " certificate" }], 0); } }, [timg(c.image, c.name + " certificate")]));
    var b = h("div", { class: "cbody" }, [h("h4", { text: c.name }), h("span", { class: "meta", text: c.issuer + " · " + c.date }), c.id ? h("span", { class: "meta", text: "ID " + c.id }) : null, c.summary ? h("p", { class: "cert-sum", text: c.summary }) : null]);
    if (c.url) b.appendChild(ext("Verify", c.url));
    el.appendChild(b); $("certList").appendChild(el);
  });

  /* ---------- visits ---------- */
  S.visits.forEach(function (v) {
    var card = h("article", { class: "card" }, [h("span", { class: "meta", text: v.date }), h("h3", { text: v.place }), h("p", { class: "org", text: v.text })]);
    var t = thumbs(v.photos); if (t) { t.className += " fill" + (v.photos.length === 1 ? " single" : ""); card.appendChild(t); }
    $("visitList").appendChild(card);
  });

  /* ---------- contact ---------- */
  var cl = $("contactList");
  cl.appendChild(h("li", null, [h("span", { class: "k", text: "Email" }), h("span", { class: "v" }, [C.email, h("button", { class: "copy", type: "button", text: "Copy", onclick: function (e) {
    var btn = e.currentTarget;
    function done() { btn.textContent = "Copied"; setTimeout(function () { btn.textContent = "Copy"; }, 1600); }
    try { navigator.clipboard.writeText(C.email).then(done, function () { btn.textContent = "Select it"; }); } catch (err) { btn.textContent = "Select it"; }
  } })])]));
  cl.appendChild(h("li", null, [h("span", { class: "k", text: "Phone" }), h("span", { class: "v" }, [h("a", { href: "tel:" + C.phoneLink, text: C.phone })])]));
  cl.appendChild(h("li", null, [h("span", { class: "k", text: "Location" }), h("span", { class: "v", text: C.location })]));
  C.links.forEach(function (l) { $("contactLinks").appendChild(h("li", null, [ext(l.label, l.url, "btn")])); });

  var form = $("contactForm"), msg = $("formMsg");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var d = { name: $("fName").value.trim(), email: $("fEmail").value.trim(), subject: $("fSubject").value.trim(), message: $("fMessage").value.trim() };
    if (!d.name || !d.email || !d.message || d.email.indexOf("@") < 1) { msg.textContent = "Please fill in name, a valid email and a message."; return; }
    if (C.web3formsKey) {
      msg.textContent = "Sending\u2026";
      fetch("https://api.web3forms.com/submit", { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ access_key: C.web3formsKey, subject: (d.subject || "New message") + " (portfolio)", name: d.name, email: d.email, message: d.message }) })
        .then(function (r) { return r.json(); })
        .then(function (res) { if (!res.success) throw 0; msg.textContent = "Thanks, your message was sent."; form.reset(); })
        .catch(function () { msg.textContent = "Could not send. Please email " + C.email + " directly."; });
    } else if (C.formEndpoint) {
      msg.textContent = "Sending…";
      fetch(C.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(d) })
        .then(function (r) { if (!r.ok) throw 0; msg.textContent = "Thanks, your message was sent."; form.reset(); })
        .catch(function () { msg.textContent = "Could not send. Please email " + C.email + " directly."; });
    } else {
      var href = "mailto:" + C.email + "?subject=" + encodeURIComponent(d.subject || "Message from " + d.name) + "&body=" + encodeURIComponent(d.message + "\n\n" + d.name + " (" + d.email + ")");
      msg.textContent = "Opening your mail app. If nothing opens, write to " + C.email + ".";
      window.location.href = href;
    }
  });

  /* ---------- nav ---------- */
  var navItems = [["about", "About"], ["experience", "Experience"], ["education", "Education"], ["leadership", "Activities"], ["skills", "Skills"], ["projects", "Projects"], ["achievements", "Achievements"], ["visits", "Visits"], ["contact", "Contact"]];
  var nav = $("nav");
  navItems.forEach(function (n) { nav.appendChild(h("a", { href: "#" + n[0], text: n[1] })); });
  var menuBtn = $("menuBtn");
  function setMenu(o) { nav.classList.toggle("open", o); menuBtn.setAttribute("aria-expanded", String(o)); }
  menuBtn.addEventListener("click", function () { setMenu(!nav.classList.contains("open")); });
  nav.addEventListener("click", function (e) { if (e.target.tagName === "A") setMenu(false); });
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href="#top"]');
    if (!a) return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    setMenu(false);
  });

  if ("IntersectionObserver" in window) {
    var links = {}; nav.querySelectorAll("a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { Object.keys(links).forEach(function (k) { links[k].classList.toggle("on", k === en.target.id); }); } });
    }, { rootMargin: "-40% 0px -55% 0px" });
    Object.keys(links).forEach(function (k) { var s = document.getElementById(k); if (s) spy.observe(s); });

    var rv = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); rv.unobserve(en.target); } }); }, { threshold: 0.08 });
    document.querySelectorAll(".section-body > *, .grid, .filters").forEach(function (el) { el.classList.add("reveal"); rv.observe(el); });
  }
})();
