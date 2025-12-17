fetch ("sneakers.json")
.then(rep=>rep.json())
.then(data=>{ 
    console.log(data)


    console.log(data.nomCommercial)


    AfficheProduits(data.produits)
    AfficheTemoignages(data.temoignages)
    AfficheServices(data.services)
    
});


// Affiche les baskets dans une section precise (id)
// elle recoit tabsneakers le gtableau des produits
function AfficheProduits(tabsneakers){

    tabsneakers.forEach(sneaker=>{
        console.log(sneaker.nom)

        // construire la petite carte pour une sneaker dans le html
        document.getElementById("sneakers").innerHTML += `
            <div class="card-product">
                <img src="${sneaker.imageUrl}" alt="">
                <h3>${sneaker.nom}</h3>
                <p>${sneaker.description}</p>

            </div>`
    })

};

function AfficheTemoignages(tabtemoignages){


    tabtemoignages.forEach(temoignage=>{
        console.log(temoignage.prenom)

        document.getElementById("temoignages").innerHTML += `
        <div class=" cardTemoignage">
        <h3>${temoignage.prenom}</h3>
        <p>${temoignage.typeExperience}</p>
        <p>${temoignage.commentaire}</p>
        </div>
        `





    })
};


function AfficheServices(tabservices){

    tabservices.forEach(service=>{
        console.log(service.nom)

        document.getElementById("services").innerHTML +=`
        <div class="card-product">
        <img src="${service.image}">
        <h3>${service.nom}</h3>
        <p>${service.description}</p>
        </div>
        `
    })
}




