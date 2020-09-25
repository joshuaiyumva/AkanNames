var is_date = document.getElementById("DoB");
var akanMale = new Array("Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame");
var akanFemale = new Array("Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama");
document.write("your AKAN name is, " + akanMale);
function gender_check(){
    var is_male = document.getElementById("gender_male").value;
    var is_female = document.getElementById("gender_female").value;
    if (is_date == false )
    {
        if(is_male == false && is_female == false)
        alert('Please fill in all elements First');
        return false;
    }
        else if(is_male ==true || is_female == true){

        }
    }
    else if(is_date == false && is_male){
        return true;
    }

}