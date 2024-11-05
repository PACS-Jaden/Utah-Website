function CheckEmail(e){
    var emailFieldOne = document.getElementById("email").value;
    var emailFieldTwo = document.getElementById("confirm-email").value;

    if(emailFieldOne.toLocaleLowerCase() !== emailFieldTwo.toLocaleLowerCase()){
        e.preventDefault();
        alert("Please ensure emails are the same!")
    }
}