$(document).ready(function(){
    $("span").click(function(){
      alert(atob('Q29uZ3JhdHVsYXRpb24s') + "\n" + atob('WW91IGhhdmUgY29tcGxldGVkIHRoZSB0ZXN0Lg==') + "\n" + atob('Zm9sbG93IHlvdXIgbGVhZDogaHR0cHM6Ly9jZW50aXBlZGUtNi5oZXJva3VhcHAuY29tL25vbmJpbmFyeQ=='));
    });
  });

  async function changebg(){
    const images = ['url(/img/C.png)',
                    'url(/img/O.png)',
                    'url(/img/D.png)',
                    'url(/img/E.png)',
                    'url(/img/S.png)'];
    const section = document.getElementsByTagName('section');
    const bg = images[Math.floor(Math.random() * images.length)];
    console.log(bg);
    section[0].style.backgroundImage = bg;
    }