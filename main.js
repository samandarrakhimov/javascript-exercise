let home = document.getElementById(`home`);
let hospitall = document.getElementById(`hospitall`);
let mone = document.getElementById(`mone`);
let hom = document.getElementById(`hom`);
let hos = document.getElementById(`hos`);
let mon = document.getElementById(`mon`);


hom.onclick = function () {
  let homes = prompt(`Nechi honali uy kerak`)
  if (homes == 1) {
    var pr4 = prompt(` qibray chilonzor yunusobod`)

    if (pr4 == 1) {
      home.innerHTML = 'qibray tumani 2- mavze 4- kvartal'
    } else if (pr4 == 2) {
      home.innerHTML = `chilonzor tumani 6- mavze 10- kvartal`
    }

    else if (pr4 == 3) {
      home.innerHTML = `yunusobod tumani 5- mavze 1- kvartal`
    }
  }
  if(homes==2){
    var prr=prompt(`toshkent to'ytepa chorsu`)

  }
  if(prr==1){
    home.innerHTML=`toshkent tumani 2-mavze 4-kvartal 3-do'm`
  }
  else if(prr==2){
    home.innerHTML=`to'ytepa tumani 4-mavze 3-kvartal 1-do'm`
  }
  
  else if(prr==3){
    home.innerHTML=`chorsu tumani 10-mavze 45-kvartal 56-do'm`
  }
if(homes==3){
  var prr2=prompt(`yashnabod parkent qo'yliq`)
}
if(prr2==1){
  home.innerHTML=`yashnabod tumani 3- mavze 12-kvartal 34-do'm`
}

else if(prr2==2){
  home.innerHTML=`Parkent tumani 3- mavze 12-kvartal 34-do'm`
}

else if(prr2==3){
  home.innerHTML=`qo'yliq tumani 3- mavze 12-kvartal 34-do'm`
}

}





hos.onclick = function () {
  let hospital = prompt(`xizmatlar bilan tanishing 
  1.nevrologiya 2.xirurgiya 3.terapevt 4.oldindan yozilish`)
  if (hospital == 1) {
   hospitall.innerHTML=  ` Nevralgiya (qad.yun. — νεῦρον — «nerv, asab» + ἄλγος — «og'riq«)
     — periferik nervlarning shikastlanishi bo'lib, nervlarning innervatsiya 
     zonasida og'riqli xursssujlar bilan xarakterlanadi.
        `
  }
  

   else if (hospital
     == 2) {
    hospitall.innerHTML = `Jarrohlik yoki Xirurgiya (yun. cheir — qo'l va ergon — harakat, ish), jarrohlik — tibbiyotning bir sohasi`
  }

    else  if (hospital == 3) {
    hospitall.innerHTML = `Terapevt — har qanday turdagi terapiyani otkazadigan shaxs.
     Terapevtlar — bu psixologlar, ijtimoiy ishchilar, maslahatchilar, hayot murabbiylari va boshqalar kabi har qanday xizmat turlari
      bo'yicha tayyorlangan mutaxassislar.` 
   }

   else if(hospital==4){
    var pb1=prompt(` 1.nevrologiya 2.xirurgiya 3.terapevt`)
   }
   if(pb1==1){
    hospitall.innerHTML=`siz dushanba kuni soat 10:00 ga
     nevralog qabuliga yozildingiz`
   }
   else if( pb1==2){
    hospitall.innerHTML=`siz payshanba  kuni soat 12:00 ga
    xirurg qabuliga yozildingiz`

   }
   
   else if( pb1==3){
    hospitall.innerHTML=`siz chorshanba  kuni soat 16:00 ga
    terapevt qabuliga yozildingiz`

   }
   






}
mon.onclick = function(){
let money=prompt(`bank cartagizni parolini kiriting`)
if(money==12345){
  var mn=prompt(`1.pul yechish 2.balansi korish 3.informatsiya`)
}
else{
  mone.innerHTML=`parol xato`
}
if( mn==1){
  var mb=prompt(`1. 10 ming so'm  2.50ming so'm 3.100ming so'm
   4.boshqa summa`)
}
else if(mn==2){
  mone.innerHTML=`hisobingizda 150000 so'm bor`
} 
else if (mn==3){
  mone.innerHTML=`
  Lorem ipsum dolor sit amet.`
}
 if( mb==1){
  mone.innerHTML=`hisobingizda 140000 so'm qoldi`
}
else if (mb==2){
  mone.innerHTML=`hisobingizda 100000 so'm qoldi`
}
else if(mb==3){
  mone.innerHTML=`hisobingizda 50000 so'm qoldi`
}
if(mb==4){
   var nm=prompt(`boshqa summa kiriting`)
}
if(nm<150000 ){
  mone.innerHTML=`hisobingizda ${150000-nm} mablag' qoldi `
}


}


