
function calculate() {
 var anrede = "Hallo "+document.getElementById("form-name").value+"!";

 document.getElementById("modal-name").innerHTML=anrede;

 var beschreibung = "Hier dein individuelles Angeobt für dein Urlaubsziel " + urlaubszielText() + " für " + anzahlPersonen() + " Personen";

 document.getElementById("modal-description").innerHTML=beschreibung;

 var preis = calculatePrice();

 document.getElementById("modal-price").innerHTML="Preis: " + preis + " €";
}

function calculatePrice(selectedElement){
  var basisPreis = urlaubszielPreis();
  var personen = anzahlPersonen();

  return basisPreis * personen;
}

function isZusatzleistungActive(id)
{
    if(document.getElementById("form-"+id))
     {
    return document.getElementById("form-"+id).checked
     }
    else
    {
    return false;
    }
}

function getZusatzleistungPreis(id)
{
if(document.getElementById("form-"+id))
     {
    return Number(urlaubszielElement().dataset.price)
     }
    else
    {
    return 0;
    }

}

function urlaubszielText()
{
 return urlaubszielElement().value;
}

function urlaubszielPreis()
{
 return Number(urlaubszielElement().dataset.price);
}

function urlaubszielElement()
{
 var urlaubszielElement = document.getElementById("form-ziel");
 return urlaubszielElement.options[urlaubszielElement.selectedIndex];
}

function anzahlPersonen()
{
 var personen = document.getElementById("form-personen");
 return Number(personen.options[personen.selectedIndex].value);
}
