


fetch('data.json')
 .then(function(response){
    return response.json();
 })
 .then(function(data){
    document.getElementById("companyB").innerHTML = data[1].company;
    document.getElementById("time1").innerHTML = data[1].postedAt;
    document.getElementById("contra1").innerHTML = data[1].contract;
    document.getElementById("posi1").innerHTML = data[1].position;
    document.getElementById("loca1").innerHTML= data[1].location;
    document.getElementById("desc1").innerHTML= data[1].description;
    document.getElementById("require1").innerHTML= data[1].requirements.content;
    document.getElementById("require-i1").innerHTML= data[1].requirements.items[0];
    document.getElementById("require-ii1").innerHTML= data[1].requirements.items[1]
    document.getElementById("require-iii1").innerHTML= data[1].requirements.items[2]
    document.getElementById("require-iv1").innerHTML= data[1].requirements.items[3]
    document.getElementById("what1").innerHTML= data[1].role.content;
    document.getElementById("what-i1").innerHTML= data[1].role.items[0];
    document.getElementById("what-ii1").innerHTML= data[1].role.items[1];
    document.getElementById("what-iii1").innerHTML= data[1].role.items[2];
    document.getElementById("what-iv1").innerHTML= data[1].role.items[3];
    document.getElementById("fot1").innerHTML= data[1].position;

   })
   .catch(function(err){
      console.log(err);
   })