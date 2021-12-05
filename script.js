let button = document.getElementById("show");
button.addEventListener('click', setFalse);
let allTd = document.querySelectorAll('td');

let periodicTable = [];
let pT =  [];
for(let i=0; i<allTd.length; ++i)
{
    allTd[i].addEventListener('click', setColor);
    if(allTd[i].hasAttribute("id"))
    {
        pT[i] = allTd[i].id;
    }
}

periodicTable = pT.filter(function (el) {
    return el != null;
  });

function setFalse()
{ 
    for(let i=0; i<allTd.length; ++i)
    {
        if(allTd[i].hasAttribute('data-hidden'))
        {
            if((allTd[i].getAttribute('data-hidden'))=="true")
            {
                allTd[i].setAttribute('data-hidden', false);
            }
            else if((allTd[i].getAttribute('data-hidden'))=="false")
            {
                allTd[i].setAttribute('data-hidden', true);
            }
        }
    }
}

let elsoid=0;
let elsoszin = 0;
function setColor()
{
    if(elsoid!=0)
    {
        document.getElementById(elsoid).style.backgroundColor = elsoszin;
        elsoid = this.id;
        document.getElementById("name").innerHTML = this.getAttribute("data-name");
        document.getElementById("symbol").innerHTML = elsoid;
        elsoszin = this.style.backgroundColor;
        this.style.backgroundColor = "red";

        for(let i=0; i<periodicTable.length; ++i)
        {
            if(elsoid==periodicTable[i])
            {
                document.getElementById("number").innerHTML = i+1;
            }
        }
    }else{
        elsoid = this.id;
        document.getElementById("name").innerHTML = this.getAttribute("data-name");
        document.getElementById("symbol").innerHTML = elsoid;
        elsoszin = this.style.backgroundColor;
        this.style.backgroundColor = "red";

        for(let i=0; i<periodicTable.length; ++i)
        {
            if(elsoid==periodicTable[i])
            {
                document.getElementById("number").innerHTML = i+1;
            }
        }
    }
}