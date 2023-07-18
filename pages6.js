

fetch('data.json')
.then(function(response){
   return response.json();
})
  .then(function(data){
   document.getElementById("companyG").innerHTML = data[6].company;
   document.getElementById("time6").innerHTML = data[6].postedAt;
   document.getElementById("contra6").innerHTML = data[6].contract;
   document.getElementById("posi6").innerHTML = data[6].position;
   document.getElementById("loca6").innerHTML = data[6].location;
   document.getElementById("desc6").innerHTML = data[6].description;
   document.getElementById("require6").innerHTML = data[6].requirements.content;
   document.getElementById("require-i6").innerHTML = data[6]. requirements.items[0];
   document.getElementById("require-ii6").innerHTML = data[6]. requirements.items[1];
   document.getElementById("require-iii6").innerHTML = data[6].requirements.items[2] ;
   document.getElementById("require-iv6").innerHTML = data[6].requirements.items[3] ; 
   document.getElementById("what6").innerHTML = data[6].role.content;
   document.getElementById("what-i6").innerHTML = data[6].role.items[0];
   document.getElementById("what-ii6").innerHTML = data[6].role.items[1];
   document.getElementById("what-iii6").innerHTML = data[6].role.items[2];
   document.getElementById("what-iv6").innerHTML = data[6].role.items[3];
   document.getElementById("fot6").innerHTML = data[6].position;
  })
  .catch(function(err){
   console.log(err);
  })