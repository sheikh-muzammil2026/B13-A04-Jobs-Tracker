
function updateAllCounts(){
  let jobCardLen = document.querySelectorAll(".job-card");
  document.getElementById("available-count").innerText = jobCardLen.length;
  document.getElementById("total-job-count").innerText = jobCardLen.length;
}

function updateCounts(tabId,countId){
  let jobCard = document.querySelectorAll(`#${tabId} .job-card`);
  document.getElementById(countId).innerText = jobCard.length;
}

function updateAvailableCount(){
  let allCount = document.querySelectorAll("#all-tab-content .job-card").length;
  let interviewCount = document.querySelectorAll("#interview-tab-content .job-card").length;
  let rejectedCount = document.querySelectorAll("#rejected-tab-content .job-card").length;

  // Determine which tab is active
  if(document.querySelector(".all-jobs-tab.active")){
    document.getElementById("available-count").innerText = allCount;
  } else if(document.querySelector(".interview-tab.active")){
    document.getElementById("available-count").innerText = `${interviewCount} of 8`;
  } else if(document.querySelector(".rejected-tab.active")){
    document.getElementById("available-count").innerText = `${rejectedCount} of 8`;
  }
}

// Single event listener for delegation
document.addEventListener('click', function(e){
  let btn;

  // 🔹 Delete
  btn = e.target.closest(".btn-delete");
  if(btn){
    let card = btn.closest(".job-card");
    let jobId = card.dataset.jobId;

    // Remove card from current tab
    card.remove();

    // Reset original All tab badge if exists
    let originalCard = document.querySelector(`#all-tab-content .job-card[data-job-id="${jobId}"]`);
    if(originalCard){
      let badge = originalCard.querySelector(".badge");
      badge.classList.remove("badge-interview", "badge-error");
      badge.innerText = "New";
    }

    updateAllCounts();
    updateCounts("interview-tab-content","interview-count");
    updateCounts("rejected-tab-content","rejected-count");
    updateAvailableCount();
    return;
  }

  // 🔹 Move to Interview
  btn = e.target.closest(".btn-interview");
  if(btn){
    let card = btn.closest(".job-card");
    let jobId = card.dataset.jobId;

    // Update original All tab card badge
    let originalCard = document.querySelector(`#all-tab-content .job-card[data-job-id="${jobId}"]`);
    if(originalCard){
      let badge = originalCard.querySelector(".badge");
      badge.classList.remove("badge-error");
      badge.classList.add("badge-interview");
      badge.innerText = "Interview";
    }

    // Clone if coming from All tab
    let fromAllTab = card.closest("#all-tab-content");
    let item = fromAllTab ? card.cloneNode(true) : card;

    if(fromAllTab){
      let badgeClone = item.querySelector(".badge");
      badgeClone.classList.remove("badge-error");
      badgeClone.classList.add("badge-interview");
      badgeClone.innerText ="Interview";
    }

    document.getElementById("interview-tab-content").appendChild(item);
    document.getElementById("interview-empty-content")?.remove();

    updateCounts("interview-tab-content","interview-count");
    updateAvailableCount();
    return;
  }

  // 🔹 Move to Rejected
  btn = e.target.closest(".btn-rejected");
  if(btn){
    let card = btn.closest(".job-card");
    let jobId = card.dataset.jobId;

    // Update original All tab card badge
    let originalCard = document.querySelector(`#all-tab-content .job-card[data-job-id="${jobId}"]`);
    if(originalCard){
      let badge = originalCard.querySelector(".badge");
      badge.classList.remove("badge-interview");
      badge.classList.add("badge-error");
      badge.innerText = "Rejected";
    }

    // Clone if coming from All tab
    let fromAllTab = card.closest("#all-tab-content");
    let item = fromAllTab ? card.cloneNode(true) : card;

    if(fromAllTab){
      let badgeClone = item.querySelector(".badge");
      badgeClone.classList.remove("badge-interview");
      badgeClone.classList.add("badge-error");
      badgeClone.innerText ="Rejected";
    }

    document.getElementById("rejected-tab-content").appendChild(item);
    document.getElementById("rejected-empty-content")?.remove();

    updateCounts("rejected-tab-content","rejected-count");
    updateAvailableCount();
    return;
  }

  // 🔹 Tab click update available-count
  if(e.target.closest(".all-jobs-tab")){
    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    e.target.closest(".all-jobs-tab").classList.add("active");
    updateAvailableCount();
  }
  if(e.target.closest(".interview-tab")){
    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    e.target.closest(".interview-tab").classList.add("active");
    updateAvailableCount();
  }
  if(e.target.closest(".rejected-tab")){
    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    e.target.closest(".rejected-tab").classList.add("active");
    updateAvailableCount();
  }

});