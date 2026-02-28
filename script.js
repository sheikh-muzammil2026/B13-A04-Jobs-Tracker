

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
  const jobId = jobCard.dataset.jobId;
    
  let isAllTabContent = jobCard.closest("#all-tab-content");
  let isInterviewTabContent = jobCard.closest("#interview-tab-content");
  let isRejectedTabContent = jobCard.closest("#rejected-tab-content");
    
  jobCard.remove();
    
// Reset original All tab badge if exists
  let originalCard = document.querySelector(`#all-tab-content .job-card[data-job-id="${jobId}"]`);
    if(originalCard){
      let badge = originalCard.querySelector(".badge");
      badge.classList.remove("badge-interview", "badge-error");
      badge.innerText = "Not Applied";
    }
      // update counts and empty msg
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
  let jobId = jobCard.dataset.jobId;

	    // Update original All tab card badge
    let originalCard = document.querySelector(`#all-tab-content .job-card[data-job-id="${jobId}"]`);
    if(originalCard){
      let badge = originalCard.querySelector(".badge");
      badge.classList.remove("badge-error");
      badge.classList.add("badge-interview");
      badge.innerText = "Interview";
    }
    
    
    if(jobCard.closest("#rejected-tab-content")){
      	// check isExists
    	let targetCards = Array.from(interviewTabContent.querySelectorAll(".job-card"));
		let existCard = targetCards.filter(card=> card.dataset.jobId === jobCard.dataset.jobId);
		if(existCard.length >0) return;


      // badge change
      let badge = jobCard.querySelector(".badge");
      setBadge(badge, "Interview");

      // move to interview tab
      interviewTabContent.appendChild(jobCard);

      

      // update counts
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
 	 let jobId = jobCard.dataset.jobId;
     
     // Update original All tab card badge
    let originalCard = document.querySelector(`#all-tab-content .job-card[data-job-id="${jobId}"]`);
    if(originalCard){
      let badge = originalCard.querySelector(".badge");
      badge.classList.remove("badge-interview");
      badge.classList.add("badge-error");
      badge.innerText = "Rejected";
    }
     
     
 	 if (jobCard.closest("#interview-tab-content")){

       // check exist
       let targetCards = Array.from(rejectedTabContent.querySelectorAll(".job-card"));
		let existCard = targetCards.filter(card=> card.dataset.jobId === jobCard.dataset.jobId);
		if(existCard.length >0) return;

       
       let badge = jobCard.querySelector(".badge");
      setBadge(badge, "Rejected");

       // move to rejected tab
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

