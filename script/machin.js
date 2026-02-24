// ===============================
// 📦 DATA STORAGE
// ===============================
let allJobs = [];
let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

// ===============================
// 📊 ELEMENTS
// ===============================
const totalCount = document.getElementById('total-job-count');
const availableCount = document.getElementById('available-count');
const interviewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('rejected-count');

const allSection = document.getElementById('all-tab-content');
const interviewSection = document.getElementById('interview-tab-content');
const rejectedSection = document.getElementById('rejected-tab-content');

const mainContainer = document.querySelector('main');

// ===============================
// 🚀 LOAD INITIAL JOBS
// ===============================
function loadInitialJobs() {
  const cards = document.querySelectorAll('#all-tab-content .job-card');

  cards.forEach(card => {
    const title = card.querySelector('.job-title').innerText;
    const company = card.querySelector('.company').innerText;

    allJobs.push({ title, company, status: 'All' });
  });

  updateAvailableCount();
  calculateCount();
}

loadInitialJobs();

// ===============================
// 🔢 COUNT FUNCTIONS
// ===============================
function calculateCount() {
  totalCount.innerText = allJobs.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}

function updateAvailableCount() {
  const cards = document.querySelectorAll('#all-tab-content .job-card');
  availableCount.innerText = cards.length;
}

// ===============================
// 🎯 BADGE UPDATE
// ===============================
function updateBadge(card, status) {
  const badge = card.querySelector('.badge');

  badge.classList.remove('badge-interview', 'badge-error');

  if (status === 'Interview') {
    badge.classList.add('badge-interview');
    badge.innerText = 'Interview';
  }

  if (status === 'Rejected') {
    badge.classList.add('badge-error');
    badge.innerText = 'Rejected';
  }
}

// ===============================
// 🧠 MOVE CARD FUNCTION
// ===============================
function moveCard(card, targetSection) {
  const clone = card.cloneNode(true);
  targetSection.appendChild(clone);
}

// ===============================
// 🖱 EVENT DELEGATION
// ===============================
mainContainer.addEventListener('click', function (e) {

  const card = e.target.closest('.job-card');
  if (!card) return;

  const title = card.querySelector('.job-title').innerText;

  // 🟢 INTERVIEW
  if (e.target.closest('.btn-interview')) {

    const job = allJobs.find(j => j.title === title);
    job.status = 'Interview';

    if (!interviewList.find(j => j.title === title)) {
      interviewList.push(job);
    }

    rejectedList = rejectedList.filter(j => j.title !== title);

    updateBadge(card, 'Interview');
    moveCard(card, interviewSection);

    calculateCount();
    updateAvailableCount();
  }

  // 🔴 REJECTED
  if (e.target.closest('.btn-rejected')) {

    const job = allJobs.find(j => j.title === title);
    job.status = 'Rejected';

    if (!rejectedList.find(j => j.title === title)) {
      rejectedList.push(job);
    }

    interviewList = interviewList.filter(j => j.title !== title);

    updateBadge(card, 'Rejected');
    moveCard(card, rejectedSection);

    calculateCount();
    updateAvailableCount();
  }

  // 🗑 DELETE
  if (e.target.closest('.btn-delete')) {

    card.remove();

    allJobs = allJobs.filter(j => j.title !== title);
    interviewList = interviewList.filter(j => j.title !== title);
    rejectedList = rejectedList.filter(j => j.title !== title);

    calculateCount();
    updateAvailableCount();
  }

});
