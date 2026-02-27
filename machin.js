
function updateBoxCounts(){
  totalCountBox.innerText = jobCardLen(allTabContent);
  interviewCountBox.innerText = jobCardLen(interviewTabContent);
  rejectedCountBox.innerText = jobCardLen(rejectedTabContent);
}

function toggleEmptyState(container, emptyMessage){

  let count = jobCardLen(container);

  if (count == 0){
   // emptyMessage দেখাও
    emptyMessage.classList.remove("hidden");
  }else{
    //emptyMessage লুকাও
    emptyMessage.classList.add("hidden");
  }
      
}


//function getCards(cardsContainerName){
 // return cardsContainerName.querySelectorAll(".job-card");
//}

function jobCardLen(cardsContainerName){
  return cardsContainerName.querySelectorAll(".job-card").length;
}


function setBadge (badge, type){
  badge.classList.remove("badge-interview", "badge-error");
  if(type === "Interview"){
    badge.classList.add("badge-interview");
    badge.innerText = "Interview";
  }else {
    badge.classList.add("badge-error");
    badge.innerText = "Rejected";
  }
}
