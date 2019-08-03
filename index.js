// require elements of DOM
const $Infomation = document.querySelector(".works");
const $filter = document.querySelector(".filter")
// end -> require elements of DOM


// my array of data
const peoples = [{
        name: "Marcos Paulo",
        age: 18,
        state: "SP",
        office: "production feeder",
        companie: "Flex"
    },
    {
        name: "João Pedro",
        age: 19,
        state: "PA",
        office: "production feeder",
        companie: "Flex"
    },
    {
        name: "joviane bruna",
        age: 22,
        state: "PA",
        office: "Enginner",
        companie: "Petrobras"
    },
    {
        name: "Bernado",
        age: 28,
        state: "MG",
        office: "front End",
        companie: "Bello Monte"
    }
];

const filterDefaut = {C: "all", A: "all", S:"all"};
// End -> my array of data

// declaration of variables
var filtered;
// End -> declaration of variables

// method of filter an array of data
function filter(f, o){

    // control the parameters received from the component and assign the control variable 
    if(o === "companie"){
        filterDefaut.C = f;
    }
    else if(o === "state"){
        filterDefaut.S = f;
    }
    else if(o === "age"){
        filterDefaut.A = f;
    }
    else{
        console.log("information out of default")        
    }

    if(filterDefaut.A === "all" && filterDefaut.C === "all" && filterDefaut.S === "all"){
        filtered = peoples.filter( ()=> true); // filter all
    }

    if(filterDefaut.C != "all" && filterDefaut.S === "all" && filterDefaut.A === "all"){
        filtered = peoples.filter( item => filterDefaut.C === item.companie);
    }
    else if(filterDefaut.S != "all" && filterDefaut.C === "all" && filterDefaut.A === "all"){
        filtered = peoples.filter( item => filterDefaut.S === item.state);   
    }
    else if(filterDefaut.A != "all" && filterDefaut.C === "all" && filterDefaut.S === "all"){
        range = filterDefaut.A.split("-");
        filtered = peoples.filter( item => {
            if( item.age >= range[0] && item.age <= range[1]){
                return true;
            }
        })
    }
    else if(filterDefaut.S != "all" && filterDefaut.C != "all" && filterDefaut.A === "all"){
        
        filtered = peoples.filter( item => {
            if(filterDefaut.S === item.state && filterDefaut.C === item.companie){
                return true;
            }
        });   
    }
    else if(filterDefaut.S != "all" && filterDefaut.C != "all" && filterDefaut.A === "all"){
        
        filtered = peoples.filter( item => {
            if(filterDefaut.S === item.state && filterDefaut.C === item.companie){
                return true;
            }
        });   
    }
    else if(filterDefaut.S != "all" && filterDefaut.C != "all" && filterDefaut.A != "all"){
        range = filterDefaut.A.split("-");
        filtered = peoples.filter( item => {
        if(filterDefaut.S === item.state && filterDefaut.C === item.companie && item.age >= range[0] && item.age <= range[1]){
            return true;
        }
        });   
    }
    else{
        // console.log("information out of default")
    }


    let data = filtered.map( item =>
        `<tr>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.state}</td>
            <td>${item.office}</td>
            <td>${item.companie}</td>
            </tr>
        `
    )
    
    tableInfo.innerHTML = data.join("");
    
    $Infomation.insertBefore(tableInfo, null);
};

$filter.addEventListener('change', event =>{
    $target = event.target;
    if($target.classList.contains("-companie")){
        filter($target.value, "companie");

    }
    if($target.classList.contains("-age")){
        filter($target.value, "age");
    }
    if($target.classList.contains("-state")){
        filter($target.value, "state"); 

    }
})

// End -> method of filter an array of data


const tableInfo = document.createElement("tbody");

const data = peoples.map( item =>
    `<tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.state}</td>
        <td>${item.office}</td>
        <td>${item.companie}</td>
        </tr>
    `
)

tableInfo.innerHTML = data.join("");

$Infomation.insertBefore(tableInfo, null);

