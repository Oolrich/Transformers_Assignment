function submit(){
    var a=document.getElementById("1").value;
    var b=document.getElementById("2").value;
    var c=document.getElementById("3").value;
    var d=document.getElementById("4").value;
    var e=document.getElementById("5").value;
    var V=document.getElementById("volt").value;

    a=parseFloat(a);
    b=parseFloat(b);
    var R=parseFloat(c);
    var X=parseFloat(d);
    var power_factor=parseFloat(e);

    var cos=power_factor;
    var sin=Math.sqrt(1-cos*cos);

    var Is=a/V;
    var regulation=(Is*(R*cos+X*sin))/b;
    regulation=regulation*100;

    document.getElementById("output").innerHTML=regulation;


}