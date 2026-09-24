// =============================================
// script.js — Interactions & Animations
// =============================================

// --- Waitlist forms (hero + final CTA) ---

const waitlistForms = document.querySelectorAll('.waitlist-form');

waitlistForms.forEach(function (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = form.querySelector('input[type="email"]').value.trim();

    const subject = encodeURIComponent('GuidePost waitlist request');
    const body = encodeURIComponent(
      'Hi GuidePost,\n\nI want to join the waitlist.\nMy email is:\n' + email
    );

    window.location.href = 'mailto:hello@guidepost.example?subject=' + subject + '&body=' + body;

    const note = form.querySelector('.waitlist-note');
    note.hidden = false;
  });
});

// --- Guide data ---

const guides = [
  // Elden Ring
  { game: 'Elden Ring', category: 'Bosses', title: 'Margit & Godrick — best order to fight them', difficulty: 'Intermediate', rating: 4.8, minutes: 8 },
  { game: 'Elden Ring', category: 'Builds', title: 'A calm beginner build that survives Limgrave', difficulty: 'Beginner', rating: 4.9, minutes: 7 },
  { game: 'Elden Ring', category: 'Walkthroughs', title: 'Everything to do in Limgrave before the castle', difficulty: 'Beginner', rating: 4.7, minutes: 12 },
  { game: 'Elden Ring', category: 'Quests', title: "Ranni's quest line — when to start it (and not miss it)", difficulty: 'Intermediate', rating: 4.7, minutes: 14 },
  { game: 'Elden Ring', category: 'Weapons', title: 'Best early weapons and where to grab them', difficulty: 'Beginner', rating: 4.6, minutes: 6 },
  { game: 'Elden Ring', category: 'Tips', title: 'Small tips beginner guides skip', difficulty: 'Beginner', rating: 4.8, minutes: 5 },
  // Baldur's Gate 3
  { game: "Baldur's Gate 3", category: 'Bosses', title: 'Act 1 boss fights, in the best order', difficulty: 'Intermediate', rating: 4.6, minutes: 11 },
  { game: "Baldur's Gate 3", category: 'Builds', title: 'A simple Strength fighter for Act 1', difficulty: 'Beginner', rating: 4.8, minutes: 9 },
  { game: "Baldur's Gate 3", category: 'Walkthroughs', title: 'The Grove, solved without the heartache', difficulty: 'Beginner', rating: 4.7, minutes: 10 },
  { game: "Baldur's Gate 3", category: 'Quests', title: 'Act 1 quest order that avoids locking you out', difficulty: 'Intermediate', rating: 4.7, minutes: 10 },
  { game: "Baldur's Gate 3", category: 'Weapons', title: 'Early gear worth grabbing before Act 2', difficulty: 'Beginner', rating: 4.5, minutes: 7 },
  { game: "Baldur's Gate 3", category: 'Tips', title: 'Before you camp, do these 5 things', difficulty: 'Beginner', rating: 4.6, minutes: 6 },
  // Minecraft
  { game: 'Minecraft', category: 'Bosses', title: 'Ender Dragon, calmly explained', difficulty: 'Intermediate', rating: 4.5, minutes: 10 },
  { game: 'Minecraft', category: 'Builds', title: 'Simple starter base designs that look great', difficulty: 'Beginner', rating: 4.5, minutes: 6 },
  { game: 'Minecraft', category: 'Walkthroughs', title: 'Your first week — build the right things first', difficulty: 'Beginner', rating: 4.6, minutes: 8 },
  { game: 'Minecraft', category: 'Quests', title: 'Goals to chase when you\u2019ve \u201Cfinished\u201D exploring', difficulty: 'Beginner', rating: 4.4, minutes: 9 },
  { game: 'Minecraft', category: 'Weapons', title: 'Simple gear plan for the Nether', difficulty: 'Beginner', rating: 4.5, minutes: 7 },
  { game: 'Minecraft', category: 'Tips', title: 'Your first night — a calm, no-panic plan', difficulty: 'Beginner', rating: 4.9, minutes: 5 },
  // Terraria
  { game: 'Terraria', category: 'Bosses', title: 'Boss order explained simply for new players', difficulty: 'Beginner', rating: 4.7, minutes: 7 },
  { game: 'Terraria', category: 'Builds', title: 'Starter bases that actually keep you alive', difficulty: 'Beginner', rating: 4.4, minutes: 8 },
  { game: 'Terraria', category: 'Walkthroughs', title: 'Night one to your first boss, step by step', difficulty: 'Beginner', rating: 4.6, minutes: 9 },
  { game: 'Terraria', category: 'Quests', title: 'NPC goals that unlock useful things', difficulty: 'Beginner', rating: 4.5, minutes: 7 },
  { game: 'Terraria', category: 'Weapons', title: 'Best early weapons before the Eye of Cthulhu', difficulty: 'Beginner', rating: 4.6, minutes: 6 },
  { game: 'Terraria', category: 'Tips', title: 'Beginner mistakes everyone makes', difficulty: 'Beginner', rating: 4.8, minutes: 6 },
  // Cyberpunk 2077
  { game: 'Cyberpunk 2077', category: 'Bosses', title: 'Nasty fights in Act 1, and how to beat them', difficulty: 'Intermediate', rating: 4.4, minutes: 10 },
  { game: 'Cyberpunk 2077', category: 'Builds', title: 'A calm netrunner build for beginners', difficulty: 'Intermediate', rating: 4.7, minutes: 8 },
  { game: 'Cyberpunk 2077', category: 'Walkthroughs', title: 'First district quests in the best order', difficulty: 'Beginner', rating: 4.6, minutes: 9 },
  { game: 'Cyberpunk 2077', category: 'Quests', title: 'Side quests worth doing before the end', difficulty: 'Beginner', rating: 4.7, minutes: 9 },
  { game: 'Cyberpunk 2077', category: 'Weapons', title: 'Best early weapons you can grab in Act 1', difficulty: 'Beginner', rating: 4.4, minutes: 7 },
  { game: 'Cyberpunk 2077', category: 'Tips', title: 'Habits that make Night City friendlier', difficulty: 'Beginner', rating: 4.6, minutes: 6 },
];

const trendingTitles = [
  "A calm beginner build that survives Limgrave",
  "Your first night — a calm, no-panic plan",
  "Margit & Godrick — best order to fight them",
];

const gameChips = document.querySelectorAll('.game-picker .chip');
const categoryChips = document.querySelectorAll('#game-categories .chip');
const pickerHint = document.getElementById('picker-hint');
const guideList = document.getElementById('guide-list');
const trendingList = document.getElementById('trending-list');

let activeGame = null;
let activeCategory = null;

function buildGuideCard(guide) {
  const article = document.createElement('article');
  article.className = 'guide-item';

  const gam = document.createElement('span');
  gam.className = 'guide-game';
  gam.textContent = guide.game;

  const title = document.createElement('h3');
  title.textContent = guide.title;

  const meta = document.createElement('div');
  meta.className = 'guide-meta';

  const diff = document.createElement('span');
  diff.className = 'tag tag-difficulty';
  diff.textContent = guide.difficulty;

  const rating = document.createElement('span');
  rating.className = 'rating';
  rating.textContent = '★ ' + guide.rating.toFixed(1);

  const time = document.createElement('span');
  time.textContent = guide.minutes + ' min read';

  meta.append(diff, rating, time);
  article.append(gam, title, meta);
  return article;
}

function renderGuides() {
  guideList.innerHTML = '';

  const filtered = guides.filter(function (guide) {
    const gameMatch = activeGame === null || guide.game === activeGame;
    const categoryMatch = activeCategory === null || guide.category === activeCategory;
    return gameMatch && categoryMatch;
  });

  if (filtered.length === 0) {
    pickerHint.textContent = 'No guides yet for that combination — try another game or category.';
    return;
  }

  filtered.forEach(function (guide) {
    guideList.appendChild(buildGuideCard(guide));
  });
}

function renderTrending() {
  trendingList.innerHTML = '';

  trendingTitles.forEach(function (title) {
    const guide = guides.find(function (g) { return g.title === title; });
    if (guide) {
      trendingList.appendChild(buildGuideCard(guide));
    }
  });
}

gameChips.forEach(function (chip) {
  chip.addEventListener('click', function () {
    activeGame = chip.dataset.game;
    gameChips.forEach(function (c) { c.classList.remove('chip-active'); c.setAttribute('aria-pressed', 'false'); });
    chip.classList.add('chip-active');
    chip.setAttribute('aria-pressed', 'true');
    updateHint();
    renderGuides();
  });
});

categoryChips.forEach(function (chip) {
  chip.addEventListener('click', function () {
    activeCategory = chip.dataset.category;
    categoryChips.forEach(function (c) { c.classList.remove('chip-active'); c.setAttribute('aria-pressed', 'false'); });
    chip.classList.add('chip-active');
    chip.setAttribute('aria-pressed', 'true');
    updateHint();
    renderGuides();
  });
});

function updateHint() {
  const game = activeGame === null ? 'All games' : activeGame;
  const category = activeCategory === null ? 'all categories' : activeCategory;
  pickerHint.textContent = 'Showing ' + category + ' guides for ' + game + '.';
}

renderGuides();
renderTrending();

// --- Scroll reveal (motion budget #2) ---

const revealElements = document.querySelectorAll('.section-head, .pain-card, .flow-step, .feature-card, .testimonial, .final-cta, .game-picker, .category-picker, .guide-item');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach(function (el) {
    el.classList.add('reveal');
    observer.observe(el);
  });
} else {
  revealElements.forEach(function (el) {
    el.classList.add('reveal-visible');
  });
}