$(document).ready(function(){
    $("span").click(function(){
      alert(atob('Q29uZ3JhdHVsYXRpb24s') + "\n" + atob('WW91IGhhdmUgY29tcGxldGVkIHRoZSB0ZXN0Lg==') + "\n" + atob('Zm9sbG93IHlvdXIgbGVhZDogaHR0cHM6Ly9jZW50aXBlZGUtNi5oZXJva3VhcHAuY29tL25vbmJpbmFyeQ=='));
    });
  });

  function doneloading(level){
    console.log("Called");
    var url = "/fetchimages?l=" + level;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => {
      const divcode = document.querySelector("section");
      divcode.style.backgroundImage = "url("+data.img+")";
    });
  }