# OutdoorLift Funnel — Полный аудит
**Дата:** 20 июня 2026  
**Источники:** index.html · style.css · DESIGN.md · CLAUDE.md · PPTX-презентация · cdc.company/outdoor-lifts/ · outdoorlift.com  
**Метод:** UX/design/conversion critique agent + ручной анализ всех источников

---

## КРИТИЧЕСКИЕ ПРОБЛЕМЫ — исправить в первую очередь

### 🔴 [CRITICAL-1] Герой без CTA кнопки
CSS класс `.btn-hero-fill` полностью прописан в style.css (строки 141–163), но не используется ни в одном месте index.html. Посетитель, готовый к действию, не видит кнопки. Нужно добавить под заголовком:
```html
<a href="#projects" class="btn btn-hero-fill">See the technology →</a>
```

### 🔴 [CRITICAL-2] Неверный год в meta description
Строка 7 index.html: `"since 2010"` — но первая установка была в **2009** (Штутгарт). Trust bar показывает 2009 правильно. Два противоречивых числа на одной странице.  
**Fix:** изменить на `"since 2009"`

### 🔴 [CRITICAL-3] Ноль экономического языка
Страница не говорит о деньгах вообще. ЛПР (отельер, девелопер, муниципалитет) принимает решение о вложении $200k–$2M. Нет ни слова о:
- разблокировке дохода ("доступ к номерам на склоне = доход который иначе недоступен")
- стоимости vs альтернатив (фуникулёр, обычный лифт требует экскавации × N млн)
- Langkawi — 1.2M туристов/год — это денежная машина, а не просто статистика  
**Fix:** 1–2 предложения в Overview или Capacity секции.

### 🔴 [CRITICAL-4] Нет раздела о компании
Нет ни одного слова о самой CDC на странице. Кто строит, сколько установок, в скольких странах. "20+ countries since 2009" (из CLAUDE.md) — полностью отсутствует.  
**Fix:** Добавить 1 строку в финальный CTA или отдельный trust strip:  
*"Cableway Development Company has delivered installations across 20+ countries since 2009."*

### 🔴 [CRITICAL-5] Сертификация без названий
Строка 266: *"Certified to the same standards as conventional passenger lifts"* — юридически бессмысленная фраза. B2B покупатель спросит: EN 81? TÜV? ISO 9386?  
**Fix:** *"Systems installed in EU markets comply with Machinery Directive 2006/42/EC. CDC manages full national certification for each project country."*

---

## ВЫСОКИЙ ПРИОРИТЕТ

### 🟠 [HIGH-1] Белый текст на оранжевой кнопке в мобильном меню
`index.html` строка 47, `style.css` строка 317: `.mobile-nav-cta` имеет `color: var(--white) !important`.  
DESIGN.md прямо запрещает: *"White text on ember fails WCAG AA (2.7:1)."*  
**Fix:** изменить на `color: var(--dark)` как у всех других кнопок.

### 🟠 [HIGH-2] Hero-заголовок слишком мелкий
`style.css` строка 442: `.hero-title { font-size: clamp(40px, 5.2vw, 74px) }`  
DESIGN.md строка 118 задаёт: `clamp(68px, 8vw, 120px)`. Разница в 2× на большом экране.  
**Fix:** `clamp(56px, 8vw, 120px)` — impact, который должен быть у главного заголовка.

### 🟠 [HIGH-3] Два тёмных раздела подряд (нарушение DESIGN.md)
Секция CTA (dark) + Footer (dark) = два тёмных подряд. DESIGN.md: *"Never two dark sections adjacent."*  
**Fix:** Footer → `background: var(--dark)` (оставить), CTA → белый фон с тёмным заголовком, или наоборот.

### 🟠 [HIGH-4] "Ball chain drive" — название технологии нигде не упомянуто
Старый сайт outdoorlift.com: *"innovative ball chain drive enables it to drive tight curves while driving uphill or downhill."* — это патентованный дифференциатор. Наша Tech секция описывает поведение без имени механизма.  
**Fix:** Добавить в overline или первое предложение: *"Driven by CDC's ball-chain servo drive — the mechanism enabling simultaneous direction and incline change."*

### 🟠 [HIGH-5] "certifiable" → "certified" в Pillars
Строка 183: *"certifiable to national passenger transport standards"* означает "может быть сертифицирован если захотите". Это не trust signal.  
**Fix:** *"certified to applicable passenger transport standards for the project country."*

### 🟠 [HIGH-6] OG title слабый
Строка 8: `og:title = "Outdoor Lifts by CDC"` — слабее чем `<title>`.  
**Fix:** Совпасть с `<title>`: `"Outdoor Lifts — Self-Propelled Vertical Transport | CDC"`

### 🟠 [HIGH-7] Нет canonical тега и og:url
Без canonical cdc.company и воронка могут индексироваться как дубликаты.  
**Fix:**
```html
<link rel="canonical" href="https://petrikin83.github.io/outdoorlift/" />
<meta property="og:url" content="https://petrikin83.github.io/outdoorlift/" />
```

### 🟠 [HIGH-8] --orange-deep конфликт между CSS и DESIGN.md
CSS переменная: `#a24d08` (темнее, ~4.8:1 на белом)  
DESIGN.md ember-deep: `#c45a0a` (ярче, ~3.9:1 на белом — не проходит WCAG AA)  
**Решение:** `#a24d08` правильнее для доступности. Обновить DESIGN.md, чтобы зафиксировать `#a24d08` как каноничное значение.

### 🟠 [HIGH-9] Hover scale на project images нарушает DESIGN.md
`style.css` строки 550–553: `transform: scale(1.05)` при ховере.  
DESIGN.md строка 170: *"No hover effects on cards. Images are evidence, not interactive affordances."*  
**Fix:** Удалить `.project-item:hover img { transform: scale(1.05); }`

### 🟠 [HIGH-10] Hero sub-headline отсутствует
После заголовка "Where roads end — lifts begin" посетитель не знает что это за продукт до скролла.  
Meta description (строка 7) уже содержит правильный текст.  
**Fix:** Добавить под H1:
```html
<p class="hero-sub">Self-propelled cabin systems for terrain where conventional infrastructure is not feasible.</p>
```

---

## СРЕДНИЙ ПРИОРИТЕТ

### 🟡 [MED-1] Pillar 3 называется "Reliability" вместо "Safety"
Строка 184: третья колонна называется "Reliability" в HTML. Но раздел ниже (строка 263) "Safety is not a feature" и в PPTX/CDC всегда три колонны: Ecology · Functionality · **Safety**.  
**Fix:** переименовать pillar на "Safety".

### 🟡 [MED-2] tier-desc скрыт на мобильном
`style.css` строка 1099: `.tier-desc { display: none }` на мобильном.  
Пользователь видит "Private homes" / "300 kg" без объяснений.  
**Fix:** Оставить, но сделать меньший шрифт (12px, italic), а не скрывать.

### 🟡 [MED-3] "Fraction of the cost" — неподтверждённое заявление
Строка 244: *"funicular-grade capacity, fraction of the cost"* — без числа это маркетинговый шум.  
**Fix:** *"Funicular-grade capacity, without excavation or fixed-rail infrastructure cost."*

### 🟡 [MED-4] Технические детали отсутствуют (из CDC сайта)
CDC сайт содержит информацию которой нет у нас:
- "two horizontally arranged guide tubes"
- "electrified through sliding powerlines underneath the rails"  
- "floor size can be customized in incremental stages"
- "operates like a normal elevator in automatic mode"
- "Backup power for uninterrupted operation" (в Safety)
- "Integrated emergency communication systems" (в Safety)

**Fix:** Добавить 2–3 из этих деталей в Tech секцию, backup power в Safety.

### 🟡 [MED-5] Langkawi project card без specs
Строки 120–122: первая карточка (герой, full-width) имеет только "1.2M visitors / year" без длины трека и нагрузки.  
**Fix:** Добавить: `850 m · 2×14 P / 2100 kg · 2009` или задокументировать почему пропущено.

### 🟡 [MED-6] FAQ вопрос о стандартах — пустой ответ
Строка 294: *"applicable international passenger transport standards for the project country"* — не говорит ничего конкретного.  
**Fix:** Добавить хотя бы Machinery Directive и процесс CDC.

### 🟡 [MED-7] Нет клиентских логотипов или Named reference
Langkawi Sky Bridge — флагманский кейс, оператор известен. Ни одного имени клиента на странице.  
**Fix:** Хотя бы подпись в проектах: "Langkawi Sky Bridge (Malaysia, Ministry of Tourism)"

### 🟡 [MED-8] Мобильный — нет видимого CTA выше середины страницы
Кнопка в хедере скрыта на мобильном (строка 1067). Первый outbound link — в мобильном меню (нужно открыть навигацию) или mid-page CTA. Для мобильного пользователя нет CTA до скролла вниз.  
**Fix:** Кнопка в герое (CRITICAL-1) закроет эту проблему.

### 🟡 [MED-9] FAQ-CTA дублирует Final CTA слишком близко
Строки 297–301 (FAQ CTA) и 312 (Final CTA) — оба ведут на один URL, расположены рядом.  
**Fix:** Убрать FAQ-CTA, оставить только Final CTA section.

---

## НИЗКИЙ ПРИОРИТЕТ / ПОЛИРОВКА

| # | Проблема | Fix |
|---|----------|-----|
| LOW-1 | "sensoric systems" (строка 291) — не стандартный английский | → "onboard sensor systems" |
| LOW-2 | Favicon с пробелом и скобками в имени файла | Переименовать в `cdc-logo-pictogram.png` |
| LOW-3 | OG image (строка 10) — проверить что файл существует при deploy | Verify |
| LOW-4 | `© 2026 CDC` — hardcoded год | Оставить, но помнить об обновлении |
| LOW-5 | Header 88px/64px vs DESIGN.md 100px/80px | Sync DESIGN.md с реальным CSS |
| LOW-6 | Projects grid gap 3px vs DESIGN.md 4px | Minor |
| LOW-7 | Нет `<meta name="robots">` | Добавить если нужен контроль индексации |
| LOW-8 | Нет og:image:width/height мета тегов | Добавить для правильных social previews |
| LOW-9 | "no pulling rope" — ключевой дифференциатор не упомянут | Добавить в Tech features list |
| LOW-10 | Нет скорости движения ("fast walking pace" из CDC) | Рассмотреть добавление |

---

## КОНТЕНТНЫЕ ПРОБЕЛЫ ИЗ ИСТОЧНИКОВ

### Из PPTX (не на нашем сайте):
- Промо-линия: *"The easy way to access"* — простой месседж для широкой аудитории
- Фрейминг: *"high-value, low-impact"* — хороший B2B positioning
- CTA из PPTX (отличный!): *"Our team is ready to assess your terrain, define the right configuration and provide a preliminary cost model, at no obligation."* — намного сильнее чем наш "Explore at cdc.company"
- Agricultural applications упомянуты в PPTX — полностью отсутствуют на нашем сайте

### Из старого outdoorlift.com (не на нашем сайте):
- "ball chain drive" — patented mechanism name
- "no pulling rope" = endlessly long routes possible  
- SEO термины: off-road lift, inclined lift, slope lift, terrain lift, APM, automatic passenger transporter — возможности для SEO

### Из CDC сайта (не на нашем сайте):
- "Backup power for uninterrupted operation"
- "Integrated emergency communication systems"  
- "Advanced hazard detection and safety controls"
- "two horizontally arranged guide tubes"
- "floor size can be customized in incremental stages"

---

## ОЧИСТКА ПРОЕКТА (выполнено)

Удалено **406 файлов** (87 + 319) — версионные скриншоты v15–v92, design iterations, section screenshots, debug shots.

**Что осталось в корне:**
- `index.html`, `style.css`, `main.js` — production files
- `CLAUDE.md`, `DESIGN.md`, `PRODUCT.md`, `FUNNEL-CHECKLIST.md` — project docs
- `.gitignore`, `skills-lock.json` — config
- 4 × `critique-*.png` — reference screenshots
- `final-review.jpeg` — reference

---

## ИТОГОВЫЙ РЕЙТИНГ ПО СЕКЦИЯМ

| Секция | Оценка | Главная проблема |
|--------|--------|-----------------|
| Hero | 5/10 | Нет CTA, слишком мелкий шрифт, нет sub-headline |
| Trust Bar | 7/10 | Нет страновой охват, "2009" без контекста |
| Overview | 7/10 | Хорошо, но нет экономического фрейминга |
| Projects | 8/10 | Hover effect нарушает правила, Langkawi без specs |
| Pillars | 7/10 | "Reliability" вместо "Safety", нет иконок |
| Technology | 8/10 | Отличный заголовок, но нет ball-chain drive name |
| Applications | 8/10 | Хорошо структурировано |
| Safety | 6/10 | Нет сертификаций, нет backup power / emergency comms |
| FAQ | 7/10 | Ответы вагноые по стандартам |
| CTA Final | 6/10 | Слабый CTA текст vs PPTX "preliminary cost model" |
| Meta/SEO | 5/10 | Год ошибка, нет canonical, слабый OG title |

**Общий приоритетный список исправлений (Top 5 по impact):**
1. Добавить hero CTA кнопку
2. Исправить meta description (2010 → 2009) + OG title
3. Исправить mobile nav CTA цвет (white → dark)
4. Добавить "CDC · 20+ countries · since 2009" trust statement
5. Усилить финальный CTA текст (использовать формулировку из PPTX)
