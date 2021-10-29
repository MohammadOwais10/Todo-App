/*************checked-box-function*************/
function myFunction() {
    // Get the checkbox
    var checkBox = event.target;
    console.log(event.target);
    // Get the output text
    
    var displayID = checkBox.getAttribute("data-id");
    // console.log("displ\\", displayID);

    var text = document.getElementById(displayID);
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
      text.style.backgroundColor="black";
    } else {
      text.style.display = "none";
    }
  } 