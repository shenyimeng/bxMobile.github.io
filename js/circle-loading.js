function circleLoading(process,percent){
    console.log("process="+process);
    var pro = document.getElementById(process);
    console.log("pro="+pro);
    var rightcircle = pro.children[0].children[0];
    var leftcircle = pro.children[1].children[0];
    var num = pro.children[2].children[0];
    console.log("rightcircle="+rightcircle);
    console.log("leftcircle="+leftcircle);
    //var num = document.getElementById('percent-num');
    num.innerHTML = percent;
    if(percent<=50 && percent>=0){
        rightcircle.style.cssText = "transform: rotate("+ (-135+3.6*percent) +"deg)";
        leftcircle.style.cssText = "transform: rotate(-135deg)";
    }else if(percent>=50 && percent<=100){
        rightcircle.style.cssText = "transform: rotate(45deg)";
        leftcircle.style.cssText = "transform: rotate("+ (-135+3.6*(percent-50)) +"deg)";
    }
    else{
        rightcircle.style.cssText = "transform: rotate(-135deg)";
        leftcircle.style.cssText = "transform: rotate(-135deg)";
        num.innerHTML = "0";
       /* throw new Error('percent must be between 0 and 100');
        return;*/
    }
    /*上面的注释掉了，在最后加*/
   /* var num = pro.children[2].children[0];
    num.innerHTML = percent;*/
}