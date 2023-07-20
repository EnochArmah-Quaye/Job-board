

fetch("data.json")
 .then(function(response){
    return response.json();
 })
  .then(function(data){
    document.getElementById("companyI").innerHTML = data[8].company;
    document.getElementById("time8").innerHTML = data[8].postedAt;
    document.getElementById("contra8").innerHTML = data[8].contract;
   document.getElementById("posi8").innerHTML = data[8].position;
   document.getElementById("loca8").innerHTML = data[8].location;
   document.getElementById("desc8").innerHTML = data[8].description;
   document.getElementById("require8").innerHTML = data[8].requirements.content;
   document.getElementById("require-i8").innerHTML = data[8]. requirements.items[0];
   document.getElementById("require-ii8").innerHTML = data[8]. requirements.items[1];
   document.getElementById("require-iii8").innerHTML = data[8].requirements.items[2] ;
   document.getElementById("require-iv8").innerHTML = data[8].requirements.items[3] ; 
   document.getElementById("what8").innerHTML = data[8].role.content;
   document.getElementById("what-i8").innerHTML = data[8].role.items[0];
   document.getElementById("what-ii8").innerHTML = data[8].role.items[1];
   document.getElementById("what-iii8").innerHTML = data[8].role.items[2];
   document.getElementById("what-iv8").innerHTML = data[8].role.items[3];
   document.getElementById("fot8").innerHTML = data[8].position;
  })
  .catch(function(err){
    console.log(err);
  })