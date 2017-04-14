var guitar = [
{name:"Jimmy Hendrix",color:"Brown",description:"Electric",price:"2300.00", img:"images/guitar1.jpg"},
{name:"Eric Clapton",color:"Amber",description:"Electric",price:"1700.00", img:"images/guitar2.jpg"},
{name:"Led Zeppelin",color:"Purple",description:"Electric",price:"1900.00", img:"images/guitar3.jpg"},
{name:"Ozzy Osbourne",color:"Green",description:"Electric",price:"1200.00", img:"images/guitar4.jpg"},
{name:"Chuck Barry",color:"Natural",description:"Acoustic",price:"1900.00", img:"images/guitar5.jpg"},
{name:"Kurt Cobain",color:"Dark Wood",description:"Acoustic",price:"1450.00", img:"images/guitar6.jpg"},
{name:"Carlos Santana",color:"Black",description:"Electric",price:"1750.00", img:"images/guitar7.jpg"},
{name:"Bob Dylan",color:"Gold",description:"Electric",price:"1900.00", img:"images/guitar8.jpg"}
]

 guitar.forEach(function(gtr, index) {
   var x = "guitar" + (index + 1);
   console.log(x)
   var make = document.getElementById(x);

make.innerHTML = `<article class="card-article">

               <section class="card-image-container">
                   <img class="card-img" src="${gtr.img}">
                </section>

				<header class="card-header">
                   <h2>${gtr.name} </h2>
               </header>

                <section>
                   <p>${gtr.description} | ${gtr.color}</p>
               </section>


               <section>
                   <header class="card-header">
                       <h3>Pricing</h3>
                   </header>
                   <p>${gtr.price}</p>
               </section>

           		</article>`;

});



