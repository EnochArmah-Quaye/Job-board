





fetch('data.json')
.then(function(response){
   return response.json();
})
  .then(function(data){
   document.getElementById("companyL").innerHTML = data[11].company;
   document.getElementById("time11").innerHTML = data[11].postedAt;
   document.getElementById("contra11").innerHTML = data[11].contract;
   document.getElementById("posi11").innerHTML = data[11].position;
   document.getElementById("loca11").innerHTML = data[11].location;
   document.getElementById("desc11").innerHTML = data[11].description;
   document.getElementById("require11").innerHTML = data[11].requirements.content;
   document.getElementById("require-i11").innerHTML = data[11]. requirements.items[0];
   document.getElementById("require-ii11").innerHTML = data[11]. requirements.items[1];
   document.getElementById("require-iii11").innerHTML = data[11].requirements.items[2] ;
   document.getElementById("require-iv11").innerHTML = data[11].requirements.items[3] ; 
   document.getElementById("what11").innerHTML = data[11].role.content;
   document.getElementById("what-i11").innerHTML = data[11].role.items[0];
   document.getElementById("what-ii11").innerHTML = data[11].role.items[1];
   document.getElementById("what-iii11").innerHTML = data[11].role.items[2];
   document.getElementById("what-iv11").innerHTML = data[11].role.items[3];
   document.getElementById("fot11").innerHTML = data[11].position;
  })
  .catch(function(err){
   console.log(err);
  })
