// klik teller
var telkliks = 42068;

function getRandomColor()
{
    let letters = "0123456789ABCDEF";
    let color = "#";

    for ( let n = 0; n < 6; n++ )
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function kleuraanpassen()
{
    const AllePs = document.getElementsByTagName("p");


    for (let i = 0; i < AllePs.length; i++)
    {
        AllePs[i].style.color = getRandomColor();
    }

    telkliks++;
    document.getElementById("teller").innerHTML = "Aantal keer geklikt: " + telkliks;
}