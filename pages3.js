

fetch('data.json')
.then(function(response){
   return response.json();
})
  .then(function(data){
   document.getElementById("companyD").innerHTML = data[3].company;
   document.getElementById("time3").innerHTML = data[3].postedAt;
   document.getElementById("contra3").innerHTML = data[3].contract;
   document.getElementById("posi3").innerHTML = data[3].position;
   document.getElementById("loca3").innerHTML = data[3].location;
   document.getElementById("desc3").innerHTML = data[3].description;
   document.getElementById("require3").innerHTML = data[3].requirements.content;
   document.getElementById("require-i3").innerHTML = data[3]. requirements.items[0];
   document.getElementById("require-ii3").innerHTML = data[3]. requirements.items[1];
   document.getElementById("require-iii3").innerHTML = data[3].requirements.items[2] ;
   document.getElementById("require-iv3").innerHTML = data[3].requirements.items[3] ; 
   document.getElementById("what3").innerHTML = data[3].role.content;
   document.getElementById("what-i3").innerHTML = data[3].role.items[0];
   document.getElementById("what-ii3").innerHTML = data[3].role.items[1];
   document.getElementById("what-iii3").innerHTML = data[3].role.items[2];
   document.getElementById("what-iv3").innerHTML = data[3].role.items[3];
   document.getElementById("fot3").innerHTML = data[3].position;
  })
  .catch(function(err){
   console.log(err);
  })