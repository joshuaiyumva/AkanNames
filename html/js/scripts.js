var is_date = is_weekend();
var akanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
var days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
var date1 = getElementById("DOB").value;
var is_weekend = function (date1) {
    var dt = new Date(date1);
    if (dt.getDay() != 0 || dt.getDay() != 7) {
        return "Invalid day";
    }
    else if (dt.getDay() == 0 || dt.getDay() == 7) {
        return dt.getDay();
    }
}
function gender_check(){
    var is_male = document.getElementById("gender_male").value;
    var is_female = document.getElementById("gender_female").value;
    if (is_date == false )
    {
        if(is_male == false && is_female == false){
        alert('Please fill in all elements First');
        return false;
        }
        else if(is_male ==true || is_female == true){
            alert('Something is missing')
            return false;
            }
        else
            return true;
    }
}