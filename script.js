
// script.js
// │
// ├── DOM references
// ├── helper functions
// │     ├── getCount()
// │     ├── updateCounts()
// │     ├── toggleEmptyState()
// │
// ├── event listener
// │     ├── delete logic
// │     ├── interview logic
// │     ├── rejected logic
// │     └── tab switch logic


// Click Interview
//    ↓
// Find job-card
//    ↓
// Move to interview tab
//    ↓
// Hide empty message
//    ↓
// Update counts


// count boxes
const totalCountBox = document.getElementById("total-count-box");
const interviewCountBox = document.getElementById("interview-count-box");
const rejectedCountBox = document.getElementById("rejected-count-box");

// tab contents
const allTabContent = document.getElementById("all-tab-content");
const interviewTabContent = document.getElementById("interview-tab-content");
const rejectedTabContent = document.getElementById("rejected-tab-content");

// avalable jobs count
let availableJobsCount = document.getElementById("available-jobs-count");

// emptyMessage
let interviewEmptyMessage = document.getElementById("interview-empty-content");
let rejectedEmptyMessage = document.getElementById("rejected-empty-content");


// একশন-১
updateBoxCounts();
// একশন-১
availableJobsCount.innerText = jobCardLen(allTabContent);






document.addEventListener('click', function (e){
  
  // delete btn
let btnDelete = e.target.closest(".btn-delete");
  
  if(btnDelete){
  let  jobCard = btnDelete.closest(".job-card");
    
  let isAllTabContent = jobCard.closest("#all-tab-content");
    let isInterviewTabContent = jobCard.closest("#interview-tab-content");
    let isRejectedTabContent = jobCard.closest("#rejected-tab-content");
    
  jobCard.remove();
    updateBoxCounts();
    toggleEmptyState(interviewTabContent,interviewEmptyMessage);
    toggleEmptyState(rejectedTabContent,rejectedEmptyMessage);
    
    
    if(isInterviewTabContent){
      availableJobsCount.innerText = `${jobCardLen(interviewTabContent)} of 8`;
    }
   else if(isRejectedTabContent){
      availableJobsCount.innerText = `${jobCardLen(rejectedTabContent)} of 8`;
    }
    else {
      availableJobsCount.innerText = jobCardLen(allTabContent);
    }
       
  }

  // interview btn
let btnInterview = e.target.closest(".btn-interview");

  if(btnInterview){
  let jobCard = btnInterview.closest(".job-card"); 
    
    if(jobCard.closest("#rejected-tab-content")){
      	// check isExists
    	let targetCards = Array.from(interviewTabContent.querySelectorAll(".job-card"));
		let existCard = targetCards.filter(card=> card.dataset.jobId === jobCard.dataset.jobId);
		if(existCard.length >0) return;


      // badge change
      let badge = jobCard.querySelector(".badge");
      setBadge(badge, "Interview");
      
      interviewTabContent.appendChild(jobCard);
      updateBoxCounts();
      toggleEmptyState(rejectedTabContent,rejectedEmptyMessage);
      // available count update 
       availableJobsCount.innerText = `${jobCardLen(rejectedTabContent)} of 8`;
    
    }else if (jobCard.closest("#all-tab-content")){
          	// check isExists
		let targetCards = Array.from(interviewTabContent.querySelectorAll(".job-card"));
		let existCard = targetCards.filter(card=> card.dataset.jobId === jobCard.dataset.jobId);
		if(existCard.length >0) return;

     let badge = jobCard.querySelector(".badge");
      setBadge(badge, "Interview");
      
 		 let clone = jobCard.cloneNode(true);
      let cloneBadge = clone.querySelector(".badge");
      setBadge(cloneBadge, "Interview");
 		 interviewTabContent.appendChild(clone);
		 updateBoxCounts();

    }else {
      return;
    }
  }
  

  // rejected btn
  let btnRejected = e.target.closest(".btn-rejected");
   if(btnRejected){
     let jobCard = btnRejected.closest(".job-card");

 	 if (jobCard.closest("#interview-tab-content")){

       // check exist
       let targetCards = Array.from(rejectedTabContent.querySelectorAll(".job-card"));
		let existCard = targetCards.filter(card=> card.dataset.jobId === jobCard.dataset.jobId);
		if(existCard.length >0) return;

       
       let badge = jobCard.querySelector(".badge");
      setBadge(badge, "Rejected");
       
      rejectedTabContent.appendChild(jobCard);
      updateBoxCounts();
      toggleEmptyState(interviewTabContent,interviewEmptyMessage);
	  // available count update 
       availableJobsCount.innerText = `${jobCardLen(interviewTabContent)} of 8`;

		 
 	 } else if (jobCard.closest("#all-tab-content")){
       
		let targetCards = Array.from(rejectedTabContent.querySelectorAll(".job-card"));
		let existCard = targetCards.filter(card=> card.dataset.jobId === jobCard.dataset.jobId);
		if(existCard.length >0) return;

       
       let badge = jobCard.querySelector(".badge");
      setBadge(badge, "Rejected");
       
    	 let clone = jobCard.cloneNode(true);
       let cloneBadge = clone.querySelector(".badge");
       setBadge(cloneBadge, "Rejected");
   		 rejectedTabContent.appendChild(clone);
    	 updateBoxCounts();
 	 }else {
    	return;
 		 }
 }

  // tab switch 
  let allTab = e.target.closest(".all-jobs-tab");
  let interviewTab = e.target.closest(".interview-tab");
  let rejectedTab = e.target.closest(".rejected-tab");
  
  if(interviewTab){
    availableJobsCount.innerText = `${jobCardLen(interviewTabContent)} of 8`;
    toggleEmptyState(interviewTabContent,interviewEmptyMessage);
    updateBoxCounts();
  }
  if(rejectedTab){
    availableJobsCount.innerText = `${jobCardLen(rejectedTabContent)} of 8`;
    toggleEmptyState(rejectedTabContent,rejectedEmptyMessage);
    updateBoxCounts();
  }
  if (allTab){
   availableJobsCount.innerText = jobCardLen(allTabContent);
    updateBoxCounts();
  }
});
