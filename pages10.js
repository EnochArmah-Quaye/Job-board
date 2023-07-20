





fetch('data.json')
.then(function(response){
   return response.json();
})
  .then(function(data){
   document.getElementById("companyK").innerHTML = data[10].company;
   document.getElementById("time10").innerHTML = data[10].postedAt;
   document.getElementById("contra10").innerHTML = data[10].contract;
   document.getElementById("posi10").innerHTML = data[10].position;
   document.getElementById("loca10").innerHTML = data[10].location;
   document.getElementById("desc10").innerHTML = data[10].description;
   document.getElementById("require10").innerHTML = data[10].requirements.content;
   document.getElementById("require-i10").innerHTML = data[10]. requirements.items[0];
   document.getElementById("require-ii10").innerHTML = data[10]. requirements.items[1];
   document.getElementById("require-iii10").innerHTML = data[10].requirements.items[2] ;
   document.getElementById("require-iv10").innerHTML = data[10].requirements.items[3] ; 
   document.getElementById("what10").innerHTML = data[10].role.content;
   document.getElementById("what-i10").innerHTML = data[10].role.items[0];
   document.getElementById("what-ii10").innerHTML = data[10].role.items[1];
   document.getElementById("what-iii10").innerHTML = data[10].role.items[2];
   document.getElementById("what-iv10").innerHTML = data[10].role.items[3];
   document.getElementById("fot10").innerHTML = data[10].position;
  })
  .catch(function(err){
   console.log(err);
  })


  let moon = document.getElementById("icona");
   moon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
      moon.src= "images/Group 15 (1).svg";
    }else{
      moon.src= "images/Group 15.svg";
    }
   }