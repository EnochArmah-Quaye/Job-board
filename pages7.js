

fetch('data.json')
.then(function(response){
   return response.json();
})
  .then(function(data){
   document.getElementById("companyH").innerHTML = data[7].company;
   document.getElementById("time7").innerHTML = data[7].postedAt;
   document.getElementById("contra7").innerHTML = data[7].contract;
   document.getElementById("posi7").innerHTML = data[7].position;
   document.getElementById("loca7").innerHTML = data[7].location;
   document.getElementById("desc7").innerHTML = data[7].description;
   document.getElementById("require7").innerHTML = data[7].requirements.content;
   document.getElementById("require-i7").innerHTML = data[7]. requirements.items[0];
   document.getElementById("require-ii7").innerHTML = data[7]. requirements.items[1];
   document.getElementById("require-iii7").innerHTML = data[7].requirements.items[2] ;
   document.getElementById("require-iv7").innerHTML = data[7].requirements.items[3] ; 
   document.getElementById("what7").innerHTML = data[7].role.content;
   document.getElementById("what-i7").innerHTML = data[7].role.items[0];
   document.getElementById("what-ii7").innerHTML = data[7].role.items[1];
   document.getElementById("what-iii7").innerHTML = data[7].role.items[2];
   document.getElementById("what-iv7").innerHTML = data[7].role.items[3];
   document.getElementById("fot7").innerHTML = data[7].position;
  })
  .catch(function(err){
   console.log(err);
  })
