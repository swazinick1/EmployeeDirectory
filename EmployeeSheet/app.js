const render = function () {
    $('.content').empty();

    for (let i = 0; i < employeeList.length; i++) {
        $('.content').append(`<div class="tab"><p>${employeeList[i].name}</p><br><p>${employeeList[i].officeNum}</p><br><p>${employeeList[i].phoneNum}</p></div>`);
    }
}

render();

const view = function (content) {
    $(".content").empty();
    for (let i = 0; i < employeeList.length; i++) {
        $(".content").append("<div>" + "<p>" + employeeList[i].name + "</p>" + "<p>" + employeeList[i].
            officeNum + "</p>" + "<p>" + employeeList[i].phoneNum + "</p>" + "</div>");
            
    }
}
$("#view").on("click", view);

const newInfo = function(){
    //variables for new values to be held and validated
    const newName = $('#name').val();
    const newOffice = $('#office').val(); //newOffice num getting pushed as string instead of number
    const newPhone = $('#phone').val();

    //confirm screen to verify newInfo before saving
    if(confirm("Please verify all of the following information is correct before continuing:\n\nName: " + newName + "\nOffice Number: " + newOffice + "\nPhone Number: " + newPhone + "\n\nPress OK to save or Cancel to go back")){
    //pushing new values to list in an object
   
    employeeList.push({
        name: newName, 
        officeNum: newOffice, 
        phoneNum: newPhone
    });
    //clear input fields
    
    $('#name').val(''); 
    $('#office').val(''); 
    $('#phone').val('');
    alert("Thank you! " + newName + " has been added to the Employee Directory");
    //show updated employee list
    showAll();
} else { //option to cancel newInfo
    $('#name').val(''); 
    $('#office').val(''); 
    $('#phone').val('');
};
};



