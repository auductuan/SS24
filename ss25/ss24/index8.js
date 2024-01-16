let number =+prompt(" nhap so bat ki ");
let sum = 0 ;
if (number < 0 ) {
 console.log(" nhap lai ");   
}else{
    for(let i = 1; i < a ; i++){
  if( i %2===0){
    let j = i**2;
    sum += j ;
   console.log(j);
   if( sum < number ){
    console.log(" tong cac so la : ", +sum);
   }  
   if(j >= number){
    break;
  } 

  }
}
}
