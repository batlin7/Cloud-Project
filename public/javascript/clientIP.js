async function getip(){
    const addip = "https://api.ipify.org/?format=json";
    const res = await fetch(addip);
    const names = await res.json();

    var input = document.getElementById("CIP");
    var UserDate = document.getElementById("day");
    UserDate.value = Date();
    var vaild = JSON.stringify(names.ip);
    input.value = vaild.replace(/^"(.*)"$/, '$1');
    console.log(names.ip);
}
window.onload = getip();