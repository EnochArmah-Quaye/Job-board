



fetch('data.json')
.then(function(response){
   return response.json();
})
  .then(function(data){
   document.getElementById("companyJ").innerHTML = data[9].company;
   document.getElementById("time9").innerHTML = data[9].postedAt;
   document.getElementById("contra9").innerHTML = data[9].contract;
   document.getElementById("posi9").innerHTML = data[9].position;
   document.getElementById("loca9").innerHTML = data[9].location;
   document.getElementById("desc9").innerHTML = data[9].description;
   document.getElementById("require9").innerHTML = data[9].requirements.content;
   document.getElementById("require-i9").innerHTML = data[9]. requirements.items[0];
   document.getElementById("require-ii9").innerHTML = data[9]. requirements.items[1];
   document.getElementById("require-iii9").innerHTML = data[9].requirements.items[2] ;
   document.getElementById("require-iv9").innerHTML = data[9].requirements.items[3] ; 
   document.getElementById("what9").innerHTML = data[9].role.content;
   document.getElementById("what-i9").innerHTML = data[9].role.items[0];
   document.getElementById("what-ii9").innerHTML = data[9].role.items[1];
   document.getElementById("what-iii9").innerHTML = data[9].role.items[2];
   document.getElementById("what-iv9").innerHTML = data[9].role.items[3];
   document.getElementById("fot9").innerHTML = data[9].position;
  })
  .catch(function(err){
   console.log(err);
  })
