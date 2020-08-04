

document.getElementById("button1").addEventListener("click",function(){

        document.querySelector(".item1").style.display = "block";
        document.querySelector(".item2").style.display = "none";
        document.querySelector(".item3").style.display = "none";


});

document.getElementById("button2").addEventListener("click",function(){

    document.querySelector(".item2").style.display = "block";
    document.querySelector(".item1").style.display = "none";
    document.querySelector(".item3").style.display = "none";


});

document.getElementById("button3").addEventListener("click",function(){

    document.querySelector(".item3").style.display = "block";
    document.querySelector(".item1").style.display = "none";
    document.querySelector(".item2").style.display = "none";


});