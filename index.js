

fetch('data.json')
.then(function(response){
    return response.json();
})
.then(function(data){
    let logo1 = data[0].image;
    document.getElementById("logo").innerHTML= `<img src=${logo1} alt='' />`
    
    document.getElementById("postedAt").innerHTML= data[0].postedAt;
    document.getElementById("contract").innerHTML= data[0].contract;
    document.getElementById("position").innerHTML= data[0].position;
    document.getElementById("company").innerHTML= data[0].company;
    document.getElementById("location").innerHTML= data[0].location;

    document.getElementById("postedAt1").innerHTML= data[1].postedAt;
    document.getElementById("contract1").innerHTML= data[1].contract;
    document.getElementById("position1").innerHTML= data[1].position;
    document.getElementById("company1").innerHTML= data[1].company;
    document.getElementById("location1").innerHTML= data[1].location;

    document.getElementById("postedAt2").innerHTML= data[2].postedAt;
    document.getElementById("contract2").innerHTML= data[2].contract;
    document.getElementById("position2").innerHTML= data[2].position;
    document.getElementById("company2").innerHTML= data[2].company;
    document.getElementById("location2").innerHTML= data[2].location;

    document.getElementById("postedAt3").innerHTML= data[3].postedAt;
    document.getElementById("contract3").innerHTML= data[3].contract;
    document.getElementById("position3").innerHTML= data[3].position;
    document.getElementById("company3").innerHTML= data[3].company;
    document.getElementById("location3").innerHTML= data[3].location;

    document.getElementById("postedAt4").innerHTML= data[4].postedAt;
    document.getElementById("contract4").innerHTML= data[4].contract;
    document.getElementById("position4").innerHTML= data[4].position;
    document.getElementById("company4").innerHTML= data[4].company;
    document.getElementById("location4").innerHTML= data[4].location;

    document.getElementById("postedAt5").innerHTML= data[5].postedAt;
    document.getElementById("contract5").innerHTML= data[5].contract;
    document.getElementById("position5").innerHTML= data[5].position;
    document.getElementById("company5").innerHTML= data[5].company;
    document.getElementById("location5").innerHTML= data[5].location;

    document.getElementById("postedAt6").innerHTML= data[6].postedAt;
    document.getElementById("contract6").innerHTML= data[6].contract;
    document.getElementById("position6").innerHTML= data[6].position;
    document.getElementById("company6").innerHTML= data[6].company;
    document.getElementById("location6").innerHTML= data[6].location;

    document.getElementById("postedAt7").innerHTML= data[7].postedAt;
    document.getElementById("contract7").innerHTML= data[7].contract;
    document.getElementById("position7").innerHTML= data[7].position;
    document.getElementById("company7").innerHTML= data[7].company;
    document.getElementById("location7").innerHTML= data[7].location;

    document.getElementById("postedAt8").innerHTML= data[8].postedAt;
    document.getElementById("contract8").innerHTML= data[8].contract;
    document.getElementById("position8").innerHTML= data[8].position;
    document.getElementById("company8").innerHTML= data[8].company;
    document.getElementById("location8").innerHTML= data[8].location;

    document.getElementById("postedAt9").innerHTML= data[9].postedAt;
    document.getElementById("contract9").innerHTML= data[9].contract;
    document.getElementById("position9").innerHTML= data[9].position;
    document.getElementById("company9").innerHTML= data[9].company;
    document.getElementById("location9").innerHTML= data[9].location;

    document.getElementById("postedAt10").innerHTML= data[10].postedAt;
    document.getElementById("contract10").innerHTML= data[10].contract;
    document.getElementById("position10").innerHTML= data[10].position;
    document.getElementById("company10").innerHTML= data[10].company;
    document.getElementById("location10").innerHTML= data[10].location;

    document.getElementById("postedAt11").innerHTML= data[0].postedAt;
    document.getElementById("contract11").innerHTML= data[0].contract;
    document.getElementById("position11").innerHTML= data[0].position;
    document.getElementById("company11").innerHTML= data[0].company;
    document.getElementById("location11").innerHTML= data[0].location;

})
.catch(function(err){
    console.log(err);
}) 