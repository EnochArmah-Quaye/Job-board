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
    document.getElementById("require-1").innerHTML= product[0].requirements.items;
    document.getElementById("what").innerHTML= product[0].role.content;
    document.getElementById("what-1").innerHTML= product[0].role.items;
    document.getElementById("fot").innerHTML= product[0].position;
   

  })