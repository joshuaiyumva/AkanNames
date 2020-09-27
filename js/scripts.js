var akanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
function openForm(){
    document.getElementById('maleForm').style.display = 'block';
}
function is_date(){
    var days = document.getElementById("bDate").value;
    var inserted_Date = days.split("/");

    var dd = parseInt(inserted_Date[1]);
    var mm = parseInt(inserted_Date[0]);
    var yyyy = parseInt(inserted_Date[2]);

    var cc = ((yyyy-1)/100+1);
    var birthCalc =(cc / 4 - 2 * cc - 1 + 5 * yyyy / 4 + 26 * (mm + 1) / 10 +dd) % 7;

    var gender1 = document.querySelector('input[name="genderMale"]:submit').value;
    var gender2 = document.querySelector('input[name ="genderFemale"]:submit').value;
    if(gender1 == "Male"){
        document.write.innerHTML("isAkan") = akanMale[Math.round(birthCalc)];
    }
    else if(gender2 == "Female"){
        document.write.innerHTML("isAkan") = akanFemale[Math.round(birthCalc)];
    }
    else{
        alert("Invalid");
        document.getElementsByName("mainPage");
    }

}