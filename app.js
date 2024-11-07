
// DOM

const button = document.getElementById("btn");
button.addEventListener("mouseenter", t =>{

    if(button.style.color === 'blue'){
         button.style.color = "red";}
         else {
            button.style.color = "blue";}
})
button.addEventListener("mouseleave", t =>{
    button.style.background = "white";
    button.style.color = "blue";
});

const iconFolder = document.getElementById("folder-open");
iconFolder.addEventListener('mouseenter', ()=>{
    
    if(iconFolder.style.color === "red"){
        iconFolder.style.color = "green"
    } else {
        iconFolder.style.color = "red"
    }
    
})

//  const startMyCar = document.getElementById("fuseBx");
//   startMyCar.addEventListener('mouseenter', () =>{
//      if( startMyCar.style.color === "black"){
//         startMyCar.style.color = "blue"
//      }else {
//         startMyCar.style.color = "black"
//      }
//   })

//   const CarCareKiosk = document.getElementById("HowVids");
//   CarCareKiosk.addEventListener("mouseenter", () =>{
//     if(CarCareKiosk.style.color === "black"){
//         CarCareKiosk.style.color = "blue";
//     } else{
//         CarCareKiosk.style.color = "black"
//     }
//   })





  // LOG TO GOOGLE SPREADSHEET API


const submitBtn = document.getElementById("btn");
submitBtn.addEventListener("click", ()=>{
   
    
    async function gSheets() {
        const url = "https://sheetdb.io/api/v1/f85paemez3pqc";
        const data = {
            Date: document.getElementById("Date").value,
            Mileage: document.getElementById("Mileage").value,
            MainenanceRepairs: document.getElementById("MainenanceRepairs").value,
            Parts : document.getElementById("Parts").value,
            VehicleSide: document.getElementById("VehicleSide").value,
            Service_Provider : document.getElementById("Service_Provider").value,
            SPLocation : document.getElementById("SPLocation").value ,
            Cost : document.getElementById("Cost").value,
            Notes_Issues : document.getElementById("Notes_Issues").value 
        }
    
        try{
            const res = await fetch(url,{
                method: "POST",
                // mode: "no-cors",
                body: JSON.stringify(data),
                headers:{
                    "Content-Type" : "application/json",
                },
            });
            if(!res.ok){
                throw new Error(`Response status: ${res.status}` );
            }
            const json = await res.json();
            console.log(json);
        } catch(err){
            console.error(err.message);
            
        }
        
    }

    gSheets()

    swal("Successfully Submitted !", "", "success");

    setTimeout(() => {
       location.reload();
    }, 3000);
    
});


// 
// RESOURCE SECTION
// 
// 
// 

const infoOne =  document.getElementById("info1");

infoOne.addEventListener('click', ()=>{
    const exListOne = document.getElementById("examList");
    const colorChan = document.getElementById("info1");

    if (exListOne.style.display == 'none' && colorChan.style.color == '') {
        exListOne.style.display = "block"    
        colorChan.style.color = 'red';    
    } else {
        exListOne.style.display = "none"
        colorChan.style.color = '';
    }


})

const infoTwo = document.getElementById("info2");
infoTwo.addEventListener('click', ()=>{
    const exListTwo = document.getElementById("examList2");
    const colorChanTwo = document.getElementById("info2");

    if (exListTwo.style.display == 'none' && colorChanTwo.style.color == '') {
        exListTwo.style.display = 'block';
        colorChanTwo.style.color = 'red';
    } else {
        exListTwo.style.display = 'none';
        colorChanTwo.style.color = '';
    }
})
// 
// 
// 
 

// 
// 
// 
// 
// 

