// Code your solution in this file!
// HQ = 42
// BLOCK = 264
function distanceFromHqInBlocks(num){
    return Math.abs(num - 42)
}
function distanceFromHqInFeet(num){
    return distanceFromHqInBlocks(num) * 264
}
function distanceTravelledInFeet(start, end){
    return Math.abs(end-start)*264
}  
function calculatesFarePrice(start, end){
    let feet = distanceTravelledInFeet(start, end);
    if(feet <= 400){
        return 0
    } else if(feet >= 2500){
        return 'cannot travel that far'
    } else if(feet >= 2000){
       return 25
    }    
    else{
        let price = (feet - 400) * 0.02
        return price 
    }
}
