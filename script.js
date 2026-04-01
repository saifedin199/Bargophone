let container=document.getElementById("phones");

phones.forEach(phone=>{

container.innerHTML+=`

<div class="card">

<img src="${phone.img}">

<h2>${phone.name}</h2>

<p>${phone.processor}</p>

<p>${phone.ram}</p>

<p>${phone.storage}</p>

<p>${phone.battery}</p>

<p>${phone.camera}</p>

</div>

`

})
