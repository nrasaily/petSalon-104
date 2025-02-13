function saveService(service){
    let data = read();
    data.push(service);
    
    let val = JSON.stringify(data);
    console.log(val);
    localStorage.setItem("services", val);
}

function read(){
    let list=localStorage.getItem("services");
    console.log(list);
    if(!list){
        return[]
    }else{
        let data = JSON.parse(list);
        
        return data;
    }

}