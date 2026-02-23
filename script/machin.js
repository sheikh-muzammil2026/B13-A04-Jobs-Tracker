
function updateAllCounts(){
  // function to calculate total and available jobs
  let jobCardLen = document.querySelectorAll(".job-card");
document.getElementById("available-count").innerText = jobCardLen.length;
document.getElementById("total-job-count").innerText = jobCardLen.length;

}


updateAllCounts();

// when all jobs tab clicked, available jobs count will update.

document.addEventListener('click', function (e){
  if(e.target.closest(".all-jobs-tab")){
  let cards =  document.querySelectorAll("#all-tab-content .job-card");
    document.getElementById("available-count").innerText = cards.length ;
  }
});


// when interview tab clicked, available jobs count will update.
document.addEventListener('click', function (e){
  if(e.target.closest(".interview-tab")){
  let cards =  document.querySelectorAll("#interview-tab-content .job-card");
    document.getElementById("available-count").innerText = `${cards.length} of 8`;
  }
});

// when rejected  tab clicked, available jobs count will update.
document.addEventListener('click', function (e){
  if(e.target.closest(".rejected-tab")){
  let cards =  document.querySelectorAll("#rejected-tab-content .job-card");
    document.getElementById("available-count").innerText = `${cards.length} of 8`;
  }
});



//  function to calculate tabs child
function updateCounts(tabId,countId){
  let jobCard = document.querySelectorAll(`#${tabId} .job-card`);
  document.getElementById(countId).innerText = jobCard.length;
  
}



// multiple parent element  delete with btn-delete

document.addEventListener('click', function (e) {
let btn = e.target.closest(".btn-delete");
  if(btn){
    btn.parentElement.remove();
    updateAllCounts();
  }
});




document.addEventListener('click', function (e) {
 let btn = e.target.closest(".btn-interview");
  if(btn){
  let clone =  btn.parentElement.parentElement.cloneNode(true); // copied

    // set badge 
  let cloneBadge = clone.querySelector(".badge");
  let orginalbadge = btn.closest(".job-card").querySelector(".badge");
    

  cloneBadge.classList.add("badge-interview");
  cloneBadge.innerText ="Interview";


  orginalbadge.classList.add("badge-interview");
  orginalbadge.innerText ="Interview";
    
 
    
  document.getElementById("interview-tab-content").appendChild(clone); // pasted
  let empty = document.getElementById("interview-empty-content"); // old content deleted
if(empty){
  empty.remove();
}
  updateCounts("interview-tab-content","interview-count")
    
  }
});


// copy to rejected tab 

document.addEventListener('click', function (e) {
let btn = e.target.closest(".btn-rejected");
  if(btn){
  let clone =  btn.parentElement.parentElement.cloneNode(true);

// set badge 
    
   let orginalBadge2 = btn.closest(".job-card").querySelector(".badge");
   let cloneBadge2 = clone.querySelector(".badge");

  orginalBadge2.classList.add("badge-error");
  orginalBadge2.innerText ="Rejected";
  
  cloneBadge2.classList.add("badge-error");
  cloneBadge2.innerText ="Rejected";


    
    document.getElementById("rejected-tab-content").appendChild(clone);
  
 let empty2 = document.getElementById("rejected-empty-content");
    if(empty2){
      empty2.remove();
    }

    updateCounts("rejected-tab-content", "rejected-count")
    
  }
});




