
//defining speed limit and demerit points
function checkSpeed(speed){
       const speedLimit = 70;
       const pointsPer5kilometres = 5;

if (speed <speedLimit){
        console.log("all clear")//if speed is less than speed limit,return all CLEAR

}else if(speed===speedLimit){
    console.log("all clear");
}else{
    let excessSpeed = (speed - speedLimit);

    let demeritPoints= (excessSpeed/pointsPer5kilometres);
 
   
    console.log("points"+ demeritPoints);
}

    
}
checkSpeed(70);
checkSpeed(160);


 