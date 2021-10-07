
function AddAttributeModifier(attribute, attributeString) 
{
    var attributeValue = attribute.value;
    var attributemod = 0;

if(attributeValue>11 && attributeValue < 14)
{
    attributemod = 1;
}
else if(attributeValue>13 && attributeValue <16)
{
    attributemod = 2;

}
else if(attributeValue>15 && attributeValue<18)
{
    attributemod = 3;
}else if(attributeValue>17 && attributeValue<20)
{
    attributemod = 4;
}else if(attributeValue>19 && attributeValue<22)
{
    attributemod = 5;
}else if(attributeValue>21 && attributeValue<24)
{
    attributemod = 6;
}else if(attributeValue>23 && attributeValue<26)
{
    attributemod = 7;
}else if(attributeValue>25 && attributeValue<28)
{
    attributemod = 8;
}else if(attributeValue>27 && attributeValue<30)
{
    attributemod = 9;
}else if(attributeValue>30)
{
    attributemod = 10;
}
else
{
    attributemod = 0;
}
console.log(attributeString +": "+ attributeValue +"\n"+attributeString+"Modifier: "+ attributemod);
console.log();
document.getElementById(attributeString + "Modifier").innerHTML = attributeString +"<br>+" + attributemod;
}