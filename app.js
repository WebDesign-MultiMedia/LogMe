


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
    
    if(iconFolder.style.color === "blue"){
        iconFolder.style.color = "red"
    } else {
        iconFolder.style.color = "blue"
    }
    
})

 const startMyCar = document.getElementById("fuseBx");
  startMyCar.addEventListener('mouseenter', () =>{
     if( startMyCar.style.color === "black"){
        startMyCar.style.color = "blue"
     }else {
        startMyCar.style.color = "black"
     }
  })

  const CarCareKiosk = document.getElementById("HowVids");
  CarCareKiosk.addEventListener("mouseenter", () =>{
    if(CarCareKiosk.style.color === "black"){
        CarCareKiosk.style.color = "blue";
    } else{
        CarCareKiosk.style.color = "black"
    }
  })

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

    swal("Successful Submitted !");
    
});