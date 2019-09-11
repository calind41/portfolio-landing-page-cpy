

    var hamburgerElem = document.getElementsByClassName("container")[0];
    var fullWLinks = document.getElementById("fwl");
    var textElem = document.getElementById("text");
    var clicked = 0;
    hamburgerElem.onclick = function(){
        
        if (clicked == 0 || clicked == -1){
            textElem.style.top = "32%";
            fullWLinks.style.display = "block";
            clicked = 1;
        }
        else{
            textElem.style.top = "8%";
            fullWLinks.style.display = "none";
            clicked = -1;
        }
    };
    window.onresize = function(){ 
        textElem.style.top = "8%";
        fullWLinks.style.display = "none";

    }
