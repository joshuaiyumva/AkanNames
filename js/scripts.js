var akanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
function is_date(){
    var days = document.getElementById("bDate").value;
    var inserted_Date = days.split("/");
    var dd = parseInt(inserted_Date[1]);
    var mm = parseInt(inserted_Date[0]);
    var yyyy = parseInt(inserted_Date[2]);

    var cc = ((yyyy-1)/100+1);
    var birthCalc =(cc / 4 - 2 * cc - 1 + 5 * yyyy / 4 + 26 * (mm + 1) / 10 +dd) % 7;

    var gender1 = document.querySelector('input[name="genderMale"]:submit');
    var gender2 = document.querySelector('input[name ="genderFemale"]:submit');
    var result1
    var result2
    if(gender1 == "Male"){
        result1=(document.write.innerHTML("isAkan") = akanMale[Math.round(birthCalc)]);
        alert("Your akan Name is: "+result1);
    }
    else if(gender2 == "Female"){
        result2=(document.write.innerHTML("isAkan") = akanFemale[Math.round(birthCalc)]);
        alert("Your akan Name is: "+result2);
    }
    else{
        alert("Invalid");
        document.getElementsByName("mainPage");
    }

}