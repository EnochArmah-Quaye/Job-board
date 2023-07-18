

fetch('data.json')
.then(function(response){
   return response.json();
})
  .then(function(data){
   document.getElementById("companyF").innerHTML = data[5].company;
   document.getElementById("time5").innerHTML = data[5].postedAt;
   document.getElementById("contra5").innerHTML = data[5].contract;
   document.getElementById("posi5").innerHTML = data[5].position;
   document.getElementById("loca5").innerHTML = data[5].location;
   document.getElementById("desc5").innerHTML = data[5].description;
   document.getElementById("require5").innerHTML = data[5].requirements.content;
   document.getElementById("require-i5").innerHTML = data[5]. requirements.items[0];
   document.getElementById("require-ii5").innerHTML = data[5]. requirements.items[1];
   document.getElementById("require-iii5").innerHTML = data[5].requirements.items[2] ;
   document.getElementById("require-iv5").innerHTML = data[5].requirements.items[3] ; 
   document.getElementById("what5").innerHTML = data[5].role.content;
   document.getElementById("what-i5").innerHTML = data[5].role.items[0];
   document.getElementById("what-ii5").innerHTML = data[5].role.items[1];
   document.getElementById("what-iii5").innerHTML = data[5].role.items[2];
   document.getElementById("what-iv5").innerHTML = data[5].role.items[3];
   document.getElementById("fot5").innerHTML = data[5].position;
  })
  .catch(function(err){
   console.log(err);
  })