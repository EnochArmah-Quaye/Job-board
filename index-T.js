

fetch('data.json')
 .then(function(response){
    return response.json();
 })
  .then(function(data){
    document.getElementById("postedAts").innerHTML = data[0].postedAt;
    document.getElementById("contracts").innerHTML= data[0].contract;
    document.getElementById("positions").innerHTML= data[0].position;
    document.getElementById("companys").innerHTML= data[0].company;
    document.getElementById("locations").innerHTML= data[0].location;

    document.getElementById("postedAt1b").innerHTML = data[1].postedAt;
    document.getElementById("contract1b").innerHTML= data[1].contract;
    document.getElementById("position1b").innerHTML= data[1].position;
    document.getElementById("company1b").innerHTML= data[1].company;
    document.getElementById("location1b").innerHTML= data[1].location;

    document.getElementById("postedAt2v").innerHTML = data[2].postedAt;
    document.getElementById("contract2v").innerHTML= data[2].contract;
    document.getElementById("position2v").innerHTML= data[2].position;
    document.getElementById("company2v").innerHTML= data[2].company;
    document.getElementById("location2v").innerHTML= data[2].location;

    document.getElementById("postedAt3o").innerHTML = data[3].postedAt;
    document.getElementById("contract3o").innerHTML= data[3].contract;
    document.getElementById("position3o").innerHTML= data[3].position;
    document.getElementById("company3o").innerHTML= data[3].company;
    document.getElementById("location3o").innerHTML= data[3].location;

    document.getElementById("postedAt4p").innerHTML = data[4].postedAt;
    document.getElementById("contract4p").innerHTML= data[4].contract;
    document.getElementById("position4p").innerHTML= data[4].position;
    document.getElementById("company4p").innerHTML= data[4].company;
    document.getElementById("location4p").innerHTML= data[4].location;

    document.getElementById("postedAt5c").innerHTML = data[5].postedAt;
    document.getElementById("contract5c").innerHTML= data[5].contract;
    document.getElementById("position5c").innerHTML= data[5].position;
    document.getElementById("company5c").innerHTML= data[5].company;
    document.getElementById("location5c").innerHTML= data[5].location;

    document.getElementById("postedAt6p").innerHTML = data[6].postedAt;
    document.getElementById("contract6p").innerHTML= data[6].contract;
    document.getElementById("position6p").innerHTML= data[6].position;
    document.getElementById("company6p").innerHTML= data[6].company;
    document.getElementById("location6p").innerHTML= data[6].location;

    document.getElementById("postedAt7m").innerHTML = data[7].postedAt;
    document.getElementById("contract7m").innerHTML= data[7].contract;
    document.getElementById("position7m").innerHTML= data[7].position;
    document.getElementById("company7m").innerHTML= data[7].company;
    document.getElementById("location7m").innerHTML= data[7].location;

    document.getElementById("postedAt8c").innerHTML = data[8].postedAt;
    document.getElementById("contract8c").innerHTML= data[8].contract;
    document.getElementById("position8c").innerHTML= data[8].position;
    document.getElementById("company8c").innerHTML= data[8].company;
    document.getElementById("location8c").innerHTML= data[8].location;

    document.getElementById("postedAt9m").innerHTML = data[9].postedAt;
    document.getElementById("contract9m").innerHTML= data[9].contract;
    document.getElementById("position9m").innerHTML= data[9].position;
    document.getElementById("company9m").innerHTML= data[9].company;
    document.getElementById("location9m").innerHTML= data[9].location;

    document.getElementById("postedAt10c").innerHTML = data[10].postedAt;
    document.getElementById("contract10c").innerHTML= data[10].contract;
    document.getElementById("position10c").innerHTML= data[10].position;
    document.getElementById("company10c").innerHTML= data[10].company;
    document.getElementById("location10c").innerHTML= data[10].location;

    document.getElementById("postedAt11t").innerHTML = data[11].postedAt;
    document.getElementById("contract11t").innerHTML= data[11].contract;
    document.getElementById("position11t").innerHTML= data[11].position;
    document.getElementById("company11t").innerHTML= data[11].company;
    document.getElementById("location11t").innerHTML= data[11].location;
  })