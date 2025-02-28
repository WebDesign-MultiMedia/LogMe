
// LOADING

// setInterval(() => {
    
//     let reload = document.getElementById('preloader');

//     reload.style.display = 'none';


// }, 2500);





// FORM & LOGS

let carOp = document.querySelectorAll("p");
 carOp.forEach(el => {
    el.style.fontSize = '1.5em'
    el.style.textAlign = 'center'
 });


 let carOption = document.getElementById('carOp');
 let partsOption = document.getElementById('partOp');

 let formCarLog = document.getElementById('formLayer')
 let formPartsLog = document.getElementById('formLayer2')

 partsOption.addEventListener('click', () =>{
        formCarLog.style.display = 'none';
        formPartsLog.style.display = 'block';
        formPartsLog.style.position = 'absolute';
        formPartsLog.style.zIndex= '1';

 })

 carOption.addEventListener('click', () =>{
        formPartsLog.style.display = 'none';
        formCarLog.style.display = 'block';
        formCarLog.style.zIndex= '1';

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
            Notes_Issues : document.getElementById("Notes_Issues").value,
        }
    
        try{
            const res = await fetch(url,{
                method: "POST",
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

    swal.fire({
      title: "Log Successfully",
      icon: "success",
      draggable: true,
      timer: 2000,
      backdrop: "rgba(68, 63, 63, 0.466)",
      showConfirmButton: false,
      background: "lightseagreen",
      color: "white",
    });

    setTimeout(() => {
       location.reload();
    }, 2000);
    
});


 let partsBtn = document.getElementById('btnParts');

 partsBtn.addEventListener('click', () =>{
    async function logToGSheets() {
        const urlParts = "https://sheetdb.io/api/v1/f85paemez3pqc?sheet=Sheet2";
        const dataParts = {
            Date_Purchased : document.getElementById("Date_Purchased").value,
            Parts_Name : document.getElementById("Parts_Name").value,
            Parts_Location : document.getElementById("Parts_Location").value,
            Parts_Brand : document.getElementById("Parts_Brand").value,
            Price : document.getElementById("Price").value,
            Purchased : document.getElementById("Purchased").value,
        }

        try {
            const resParts = await fetch(urlParts, {
                method: "POST",
                body: JSON.stringify(dataParts),
                headers:{
                    "Content-Type" : "application/json",
                },
            });
            if(!resParts.ok){
                throw new Error(`Response Status: ${resParts.status}`);
            }

            const json = await resParts.json();
            console.log(json);
        } catch (error) {
            console.error(error.message);
        }
    }

    logToGSheets()

    swal.fire({
        title: "Parts are Tracked",
        icon: "success",
        draggable: true,
        timer: 2000,
        backdrop: "rgba(68, 63, 63, 0.466)",
        showConfirmButton: false,
        background: "lightseagreen",
        color: "white",
      });
  
      setTimeout(() => {
         location.reload();
      }, 2000);
      
 });


//  VIN AND PLATE SECTION

let searchIcon = document.querySelector('.fa-magnifying-glass');

searchIcon.addEventListener('click', () =>{
    let searchPopup = document.getElementById('plateAndVinLookUp');
    searchPopup.style.display = 'inline';
    setInterval(() => {
        searchPopup.style.display = 'none';
    }, 10000);
})

let closeVinPlateCon = document.querySelector('.fa-x');
closeVinPlateCon.addEventListener('click', () =>{
    let closeBinPLateSear = document.getElementById('plateAndVinLookUp');

    closeBinPLateSear.style.display = 'none';
})


