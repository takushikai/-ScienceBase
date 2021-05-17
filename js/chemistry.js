function clickBtn1(){
	// 値を取得
	const str = document.js.text1.value; 
  const test = document.js.text2.value; 

    // const test = ("36 88");
    let numeral = test.split(" ");
    console.log(numeral);
    // const str = ("H2 O+C O2");//原子を入れる
    let sort = str.split("+");
    console.log(sort);
    let answer0 = 0 ;
for(let o = 0; o < sort.length; o++){
let result;
result = sort[o].split(" ");
let result0 = result;
console.log(result0);

let outcome = 0 ;
let outcome0 = 0;



for(let i = 0 ;i < result.length  ; i++){ 
  let set = 1 ;

    if(result[i].match(/H(?!e)/)){                                               
        if(result[i].match(/\d/)){
        let ture1 = 1;                     
        let number1 = result[i].split("H");                              
        for(let r = 0 ;r < number1.length ; r++ ) {
          if(number1[r].match(/\d/)){
          set = set * number1[r] ;}
        }                            
        outcome0 = ture1 * set ;}
          else {
          outcome0 = 1 ;
          }
    }

    if(result[i].match(/He/)){                                               
      if(result[i].match(/\d/)){
      let ture2 = 4;                     
      let number2 = result[i].split("He");                              
      for(let r = 0 ;r < number2.length ; r++ ) {
        if(number2[r].match(/\d/)){
        set = set * number2[r] ;}
      }                            
      outcome0 = ture2 * set ;}
        else {
        outcome0 = 4 ;
        }
    }

    if(result[i].match(/C(?![a-z])/)&&result[i].match(/C(?![A-Z])/)){
      if(result[i].match(/\d/)){
        let ture6 = 12; 
        let number6 = result[i].split("C");
        for(let r = 0 ;r < number6.length ; r++ ) {
          if(number6[r].match(/\d/)){
          set = set * number6[r] ;}
        }         
        outcome0 = ture6 * set ;}
          else {
          outcome0 = 12 ;
          } 
    }

    if(result[i].match(/N(?![a-z])/)&&result[i].match(/N(?![A-Z])/)){
      if(result[i].match(/\d/)){
        let ture7 = 14; 
        let number7 = result[i].split("N");
        for(let r = 0 ;r < number7.length ; r++ ) {
          if(number7[r].match(/\d/)){
          set = set * number7[r] ;}
        }         
        outcome0 = ture7 * set ;}
          else {
          outcome0 = 14 ;
          } 
    }

    if(result[i].match(/O/)){
      if(result[i].match(/\d/)){
        let ture2 = 16; 
        let number2 = result[i].split("O");
        for(let r = 0 ;r < number2.length ; r++ ) {
          if(number2[r].match(/\d/)){
          set = set * number2[r] ;}
        }         
        outcome0 = ture2 * set ;}
          else {
          outcome0 = 16 ;
          }
    }

    if(result[i].match(/F(?![a-z])/)&&result[i].match(/F(?![A-Z])/)){
      if(result[i].match(/\d/)){
        let ture9 = 19; 
        let number9 = result[i].split("F");
        for(let r = 0 ;r < number9.length ; r++ ) {
          if(number9[r].match(/\d/)){
          set = set * number9[r] ;}
        }         
        outcome0 = ture9 * set ;}
          else {
          outcome0 = 19 ;
          } 
    }

    if(result[i].match(/Ne/)){
      if(result[i].match(/\d/)){
        let ture10 = 20; 
        let number10 = result[i].split("Ne");
        for(let r = 0 ;r < number10.length ; r++ ) {
          if(number10[r].match(/\d/)){
          set = set * number7[r] ;}
        }         
        outcome0 = ture10 * set ;}
          else {
          outcome0 = 20 ;
          } 
    }

    if(result[i].match(/Na/)){
      if(result[i].match(/\d/)){
        let ture11 = 23; 
        let number7 = result[i].split("Na");
        for(let r = 0 ;r < number11.length ; r++ ) {
          if(number11[r].match(/\d/)){
          set = set * number11[r] ;}
        }         
        outcome0 = ture11 * set ;}
          else {
          outcome0 = 23 ;
          } 
    }

    if(result[i].match(/Mg/)){
      if(result[i].match(/\d/)){
        let ture12 = 24; 
        let number12 = result[i].split("Mg");
        for(let r = 0 ;r < number12.length ; r++ ) {
          if(number12[r].match(/\d/)){
          set = set * number12[r] ;}
        }         
        outcome0 = ture12 * set ;}
          else {
          outcome0 = 24 ;
          } 
    }

    if(result[i].match(/Al/)){
      if(result[i].match(/\d/)){
        let ture13 = 27; 
        let number13 = result[i].split("Al");
        for(let r = 0 ;r < number13.length ; r++ ) {
          if(number13[r].match(/\d/)){
          set = set * number7[r] ;}
        }         
        outcome0 = ture13 * set ;}
          else {
          outcome0 = 27 ;
          } 
    }

    if(result[i].match(/P(?![a-z])/)&&result[i].match(/P(?![A-Z])/)){
      if(result[i].match(/\d/)){
        let ture15 = 31; 
        let number15 = result[i].split("P");
        for(let r = 0 ;r < number15.length ; r++ ) {
          if(number15[r].match(/\d/)){
          set = set * number15[r] ;}
        }         
        outcome0 = ture15 * set ;}
          else {
          outcome0 = 31 ;
          } 
    }

    if(result[i].match(/S/)){
      if(result[i].match(/\d/)){
        let ture16 = 32; 
        let number16 = result[i].split("S");
        for(let r = 0 ;r < number16.length ; r++ ) {
          if(number16[r].match(/\d/)){
          set = set * number16[r] ;}
        }         
        outcome0 = ture16 * set ;}
          else {
          outcome0 = 32 ;
          } 
    }

    if(result[i].match(/Cl/)){
      if(result[i].match(/\d/)){
        let ture17 = 35.5; 
        let number17 = result[i].split("Cl");
        for(let r = 0 ;r < number17.length ; r++ ) {
          if(number17[r].match(/\d/)){
          set = set * number17[r] ;}
        }         
        outcome0 = ture17 * set ;}
          else {
          outcome0 = 35.5 ;
          } 
    }

    if(result[i].match(/K/)){
      if(result[i].match(/\d/)){
        let ture19 = 39; 
        let number19 = result[i].split("K");
        for(let r = 0 ;r < number19.length ; r++ ) {
          if(number19[r].match(/\d/)){
          set = set * number19[r] ;}
        }         
        outcome0 = ture19 * set ;}
          else {
          outcome0 = 39 ;
          } 
    }

    if(result[i].match(/Ca/)){
      if(result[i].match(/\d/)){
        let ture20 = 40; 
        let number20 = result[i].split("Ca");
        for(let r = 0 ;r < number20.length ; r++ ) {
          if(number20[r].match(/\d/)){
          set = set * number20[r] ;}
        }         
        outcome0 = ture20 * set ;}
          else {
          outcome0 = 40 ;
          } 
    }

    if(result[i].match(/Fe/)){
      if(result[i].match(/\d/)){
        let ture26 = 56; 
        let number26 = result[i].split("Fe");
        for(let r = 0 ;r < number26.length ; r++ ) {
          if(number26[r].match(/\d/)){
          set = set * number26[r] ;}
        }
        outcome0 = ture26 * set ;}
          else {
          outcome0 = 56 ;
          } 
    }

    if(result[i].match(/Cu/)){
      if(result[i].match(/\d/)){
        let ture29 = 63.5; 
        let number29 = result[i].split("Cu");
        for(let r = 0 ;r < number29.length ; r++ ) {
          if(number29[r].match(/\d/)){
          set = set * number29[r] ;}
        }         
        outcome0 = ture29 * set ;}
          else {
          outcome0 = 63.5 ;
          } 
    }

    if(result[i].match(/Zn/)){
      if(result[i].match(/\d/)){
        let ture30 = 65.4; 
        let number30 = result[i].split("Zn");
        for(let r = 0 ;r < number30.length ; r++ ) {
          if(number30[r].match(/\d/)){
          set = set * number30[r] ;}
        }         
        outcome0 = ture30 * set ;}
          else {
          outcome0 = 65.4 ;
          } 
    }


    if(result[i].match(/Br/)){
      if(result[i].match(/\d/)){
        let ture35 = 80; 
        let number35 = result[i].split("Br");
        for(let r = 0 ;r < number35.length ; r++ ) {
          if(number35[r].match(/\d/)){
          set = set * number35[r] ;}
        }         
        outcome0 = ture35 * set ;}
          else {
          outcome0 = 80 ;
          } 
    }

    if(result[i].match(/Ag/)){
      if(result[i].match(/\d/)){
        let ture47 = 108; 
        let number47 = result[i].split("Ag");
        for(let r = 0 ;r < number47.length ; r++ ) {
          if(number47[r].match(/\d/)){
          set = set * number47[r] ;}
        }         
        outcome0 = ture47 * set ;}
          else {
          outcome0 = 108 ;
          } 
    }


    if(result[i].match(/I/)){
      if(result[i].match(/\d/)){
        let ture53 = 127 
        let number53 = result[i].split("I");
        for(let r = 0 ;r < number53.length ; r++ ) {
          if(number53[r].match(/\d/)){
          set = set * number53[r] ;}
        }         
        outcome0 = ture53 * set ;}
          else {
          outcome0 = 127 ;
          } 
    }

    if(result[i].match(/Ba/)){
      if(result[i].match(/\d/)){
        let ture56 = 137; 
        let number56 = result[i].split("Ba");
        for(let r = 0 ;r < number56.length ; r++ ) {
          if(number56[r].match(/\d/)){
          set = set * number56[r] ;}
          }         
        outcome0 = ture56 * set ;}
          else {
          outcome0 = 137 ;
          } 
    }
    
    if(result[i].match(/Pb/)){
      if(result[i].match(/\d/)){
        let ture82 = 207; 
        let number82 = result[i].split("Pb");
        for(let r = 0 ;r < number82.length ; r++ ) {
          if(number82[r].match(/\d/)){
          set = set * number82[r] ;}
          }         
        outcome0 = ture82 * set ;}
          else {
          outcome0 = 207 ;
          } 
    }

    

        
      
      
    
      outcome = outcome + outcome0 ;
      console.log(outcome);
      
      
}

let answer = numeral[o] / outcome ;
console.log(answer);




answer0 = answer0 + answer ;

}
console.log(answer0);
document.querySelector('.area').innerHTML = answer0 + "mol";

}
function clickBtn2(){
  document.js.text1.value="";
}
function clickBtn3(){
  document.js.text2.value="";
}