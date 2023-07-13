fetch('data.json')
 .then(function(response){
    return response.json();
 })
  .then(function(product){
    document.getElementById("companyA").innerHTML= product[0].company;
    document.getElementById("time").innerHTML= product[0].postedAt;
    document.getElementById("contra").innerHTML= product[0].contract;
    document.getElementById("posi").innerHTML= product[0].position;
    document.getElementById("loca").innerHTML= product[0].location;
    document.getElementById("desc").innerHTML= product[0].description;
    document.getElementById("require").innerHTML= product[0].requirements.content;
    document.getElementById("require-i").innerHTML= product[0].requirements.items[0];
    document.getElementById("require-ii").innerHTML= product[0].requirements.items[1]
    document.getElementById("require-iii").innerHTML= product[0].requirements.items[2]
    document.getElementById("require-iv").innerHTML= product[0].requirements.items[3]
    document.getElementById("what").innerHTML= product[0].role.content;
    document.getElementById("what-i").innerHTML= product[0].role.items[0];
    document.getElementById("what-ii").innerHTML= product[0].role.items[1];
    document.getElementById("what-iii").innerHTML= product[0].role.items[2];
    document.getElementById("what-iv").innerHTML= product[0].role.items[3];
    document.getElementById("fot").innerHTML= product[0].position;
   

  })