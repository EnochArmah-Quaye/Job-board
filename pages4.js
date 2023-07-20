

fetch('data.json')
.then(function(response){
   return response.json();
})
  .then(function(data){
   document.getElementById("companyE").innerHTML = data[4].company;
   document.getElementById("time4").innerHTML = data[4].postedAt;
   document.getElementById("contra4").innerHTML = data[4].contract;
   document.getElementById("posi4").innerHTML = data[4].position;
   document.getElementById("loca4").innerHTML = data[4].location;
   document.getElementById("desc4").innerHTML = data[4].description;
   document.getElementById("require4").innerHTML = data[4].requirements.content;
   document.getElementById("require-i4").innerHTML = data[4]. requirements.items[0];
   document.getElementById("require-ii4").innerHTML = data[4]. requirements.items[1];
   document.getElementById("require-iii4").innerHTML = data[4].requirements.items[2] ;
   document.getElementById("require-iv4").innerHTML = data[4].requirements.items[3] ; 
   document.getElementById("what4").innerHTML = data[4].role.content;
   document.getElementById("what-i4").innerHTML = data[4].role.items[0];
   document.getElementById("what-ii4").innerHTML = data[4].role.items[1];
   document.getElementById("what-iii4").innerHTML = data[4].role.items[2];
   document.getElementById("what-iv4").innerHTML = data[4].role.items[3];
   document.getElementById("fot4").innerHTML = data[4].position;
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