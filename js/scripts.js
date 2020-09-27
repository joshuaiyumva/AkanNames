
var male = document.getElementById('maleForm');
var female = document.getElementById('femaleForm');
var akanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

/*window.onclick = function (event) {
    if ((event.target == male) || (event.target == female)) {
        male.style.display = "none";
    }
}*/
function is_date(){
    var days = document.getElementById("bDate").value;
    var inserted_Date = days.split("/");
    var dd = parseInt(inserted_Date[1]);
    var mm = parseInt(inserted_Date[0]);
    var yyyy = parseInt(inserted_Date[2]);

    var cc = ((yyyy-1)/100+1);
    var birthCalc =(cc / 4 - 2 * cc - 1 + 5 * yyyy / 4 + 26 * (mm + 1) / 10 +dd) % 7;
    document.getElementById("display").innerHTML = Math.round(birthCalc);
    var gender = document.querySelector('input[name="genderBtn"]:submit').value;;
    if(gender === "Male"){
        /*console.log(akanMale[Math.round(birthCalc)]);*/
        document.write.innerHTML("isAkan") = akanMale[Math.round(birthCalc)];
    }
    else if(gender === "Female"){
        /*console.log(akanFemale[Math.round(birthCalc)]);*/
        document.write.innerHTML("isAkan") = akanFemale[Math.round(birthCalc)];
    }
    else{
        alert("Invalid");
        document.getElementsByName("mainPage");
    }

}