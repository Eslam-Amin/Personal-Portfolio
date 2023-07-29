function leaveRecommend() {
    var name = document.getElementById("txtName").value;
    var recommendation = document.getElementById("txtRecommendation").value;
    var recommendCard = document.getElementById("recommendCard")
    if (recommendation != "") {
        if(name == "")
            name = "Anonymous"
        var node = document.createElement("div");
        var recommendP = document.createElement("p");
        var recommender = document.createElement("h5")

        var textNode = document.createTextNode(recommendation);
        var recommenderText = document.createTextNode(name);

        recommender.appendChild(recommenderText)
        recommendP.appendChild(textNode);
        node.appendChild(recommendP);
        node.appendChild(recommender)
        recommendCard.appendChild(node);

        node.classList.add("recommendCard");
        var alertMsg = "Thank You! " + (name != "Anonymous" ? name : "") + " For Leaving a recommendation";
        alert(alertMsg);
    }
    else
        alert("you have to add a recommendation!!");
    //window.popup("Thank You for Submitting a Recommendation!");
}
const goUp = function () {  
    if (window.scrollY != 0) {
      setTimeout(function () {
        window.scrollTo(0, window.scrollY - 50);
        goUp();
      }, 10);
    }
  };


  window.alert = function(message, timeout = null){
    const alert = document.createElement("div");
    alert.classList.add("alert");
    const alertBtn = document.createElement("button");
    alertBtn.innerText = "OK";
    
    alertBtn.addEventListener('click', (e)=>{
        alert.remove(); 
    })
    if(timeout != null){
        setTimeout(()=>{
            alert.remove();
        },Number(timeout))
    }
    alert.innerHTML = `<span style="padding:10px">${message}</span>`;
    alert.appendChild(alertBtn)

    document.body.appendChild(alert)
  }