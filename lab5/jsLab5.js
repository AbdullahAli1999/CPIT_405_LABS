function first_name(e){
    
    let firsrN = document.getElementById('firstName');
   
    console.log(firsrN);
    
}

function last_name(){
    let lastN = document.getElementById('lastName').innerText;
}

function getAge(){
    const age = document.getElementById('Birthday').Value;
    const calc = new Date(age);
    if(age == 1){
     return   document.getElementById('msg').innerHTML = "Enter Date" ;
        
    } else{
       let month = Date.now() - calc.getTime()
       let ageDate = new Date(month)
       let year1 = ageDate.getUTCFullYear
      let  age1 = Math.abs(year1 - 1970)
       console.log(age1);

        return document.getElementById('getage1').innerHTML = "Age : " + age1 + " year";
    }


}
