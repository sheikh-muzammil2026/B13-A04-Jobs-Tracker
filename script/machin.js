

  
  let jobCardLen = document.querySelectorAll(".job-card");
document.getElementById("available-count").innerText = jobCardLen.length;
document.getElementById("job-count").innerText = jobCardLen.length;



// interview

document.getElementById("btn-interview").addEventListener('click', function () {

  // set badge 
  let badge = document.getElementById("badge");
  badge.classList.add("badge");
  badge.innerText ="Interview";

  // interview count ++

 let count = parseInt(document.getElementById("interview-count").innerText);
  
  document.getElementById("interview-count").innerText = count + 1;

  // copy to interview tab div

  let jobCard = document.getElementById("card-1");
  let clone = jobCard.cloneNode(true);
 document.getElementById("tab-content").appendChild(clone);
  
  document.getElementById("interview-tab").remove();
 
});


// btn delete 
// document.querySelector(".btn-delete").addEventListener('click', function () {

//  let btnParent = this.parentElement;
//   btnParent.remove();


// });

// multiple parent element  delete with btn-delete
document.addEventListener('click', function (e) {
let btn = e.target.closest(".btn-delete");
  if(btn){
    btn.parentElement.remove();
  }
});




