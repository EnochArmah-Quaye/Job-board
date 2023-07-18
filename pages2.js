

fetch('data.json')
 .then(function(response){
    return response.json();
 })
   .then(function(data){
    document.getElementById("companyC").innerHTML = data[2].company;
    document.getElementById("time2").innerHTML = data[2].postedAt;
    document.getElementById("contra2").innerHTML = data[2].contract;
    document.getElementById("posi2").innerHTML = data[2].position;
    document.getElementById("loca2").innerHTML = data[2].location;
    document.getElementById("desc2").innerHTML = data[2].description;
    document.getElementById("require2").innerHTML = data[2].requirements.content;
    document.getElementById("require-i2").innerHTML = data[2]. requirements.items[0];
    document.getElementById("require-ii2").innerHTML = data[2]. requirements.items[1];
    document.getElementById("require-iii2").innerHTML = data[2].requirements.items[2] ;
    document.getElementById("require-iv2").innerHTML = data[2].requirements.items[3] ; 
    document.getElementById("what2").innerHTML = data[2].role.content;
    document.getElementById("what-i2").innerHTML = data[2].role.items[0];
    document.getElementById("what-ii2").innerHTML = data[2].role.items[1];
    document.getElementById("what-iii2").innerHTML = data[2].role.items[2];
    document.getElementById("what-iv2").innerHTML = data[2].role.items[3];
    document.getElementById("fot2").innerHTML = data[2].position;
   })