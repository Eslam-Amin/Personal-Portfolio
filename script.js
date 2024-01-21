let recommendationArr = [];

const saveToLocalStorage = () => {
    console.log(recommendationArr);
    localStorage.setItem("recommendationArr", JSON.stringify(recommendationArr));
}

function retrieveDataFromLocalStorage() {
    let arr = JSON.parse(localStorage.getItem("recommendationArr"));
    recommendationArr = recommendationArr.concat(...arr);

}

retrieveDataFromLocalStorage();


function createRecommendationCardsBasedOnData() {
    recommendationArr.map((r) => {
        createRecommendationCardElements(r.recommendationText, r.name);
    })
};
createRecommendationCardsBasedOnData();


function createRecommendationCardElements(recommendation, name) {
    var recommendCard = document.getElementById("recommendCard")
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
}


function popUpAlert(name) {
    var alertMsg = "Thank You! " + (name != "Anonymous" ? name : "") + " For Leaving a recommendation";
    alert(alertMsg);

}

function leaveRecommend() {
    var name = document.getElementById("txtName").value;
    var recommendation = document.getElementById("txtRecommendation").value;
    if (recommendation != "") {
        if (name == "")
            name = "Anonymous"
        createRecommendationCardElements(recommendation, name)
        popUpAlert(name, recommendation);
        recommendationArr.push({ id: recommendationArr.length + 1, name: name, recommendationText: recommendation });
        saveToLocalStorage();
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


window.alert = function (message, timeout = null) {
    const alert = document.createElement("div");
    alert.classList.add("alert");
    const alertBtn = document.createElement("button");
    alertBtn.innerText = "OK";

    alertBtn.addEventListener('click', (e) => {
        alert.remove();
    })
    if (timeout != null) {
        setTimeout(() => {
            alert.remove();
        }, Number(timeout))
    }
    alert.innerHTML = `<span style="padding:10px">${message}</span>`;
    alert.appendChild(alertBtn)

    document.body.appendChild(alert)
    document.getElementById("txtName").value = "";

    document.getElementById("txtRecommendation").value = "";
}

