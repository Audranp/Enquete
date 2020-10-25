page1 = document.getElementById("page1");
page2 = document.getElementById("page2");

suivant = document.getElementById("suivant");
precedent = document.getElementById("precedent");

document.getElementById("suivant").addEventListener("click", function(e){
    page1.style.display = "none";
    page2.style.display = "block";

    suivant.style.display = "none";
    precedent.style.display = "inline-block";
});

document.getElementById("precedent").addEventListener("click", function(e){
    page1.style.display = "block";
    page2.style.display = "none";

    suivant.style.display = "inline-block";
    precedent.style.display = "none";
});
