var randomno1,randomno2;
randomno1=Math.floor(Math.random()*6+1);
randomno2=Math.floor(Math.random()*6+1);
document.querySelector(".img1").setAttribute("src","images/dice"+randomno1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomno2+".png");
if(randomno1>randomno2)
{
	document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}
else if(randomno1===randomno2)
{
	document.querySelector("h1").innerHTML="DRAW";
}
else
{
	document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}