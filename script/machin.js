

let jobCardLen = document.querySelectorAll(".job-card");
document.getElementById("available-count").innerText = jobCardLen.length;
document.getElementById("job-count").innerText = jobCardLen.length;



// machin to get value of any id

function getValueFromInput(id){
   return document.getElementById(id).value;
}

function getBalance(){
    return Number(document.getElementById("balance").innerText);
}

function setBalance(newBalance){
    document.getElementById("balance").innerText = newBalance;
}

function showOnly(id){
    document.getElementById("add-money").classList.add("hidden");
    document.getElementById("cashout").classList.add("hidden");
    document.getElementById("send-money").classList.add("hidden");
    document.getElementById("get-bonus").classList.add("hidden");
    document.getElementById("pay-bill").classList.add("hidden");
    document.getElementById("transactions").classList.add("hidden");

    document.getElementById(id).classList.remove("hidden");
}