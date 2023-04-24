fetch("tableConvert.com_vz0g0v.json")
.then(function(response){
   return response.json();
})
.then(function(products){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let product of products){
      out += `
         <tr>
            
            <td>${product.Fornavn}</td>
            <td>${product.Etternavn}</td>
            <td>${product.Alder}</td>
           
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});