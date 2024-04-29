let server = {
    "clients": [   //array
      {    //array[0]
        "id": "59761c23b30d971669fb42ff",
        "isActive": true,
        "age": 36,
        "name": "Dunlap Hubbard",
        "gender": "male",
        "company": "CEDWARD",
        "email": "dunlaphubbard@cedward.com",
        "phone": "+1 (890) 543-2508",
        "address": "169 Rutledge Street, Konterra, Northern Mariana Islands, 8551"
      },
      {    //array[1]
        "id": "59761c233d8d0f92a6b0570d",
        "isActive": true,
        "age": 24,
        "name": "Kirsten Sellers",
        "gender": "female",
        "company": "EMERGENT",
        "email": "kirstensellers@emergent.com",
        "phone": "+1 (831) 564-2190",
        "address": "886 Gallatin Place, Fannett, Arkansas, 4656"
      },
      {    //array[2]
        "id": "59761c23fcb6254b1a06dad5",
        "isActive": true,
        "age": 30,
        "name": "Acosta Robbins",
        "gender": "male",
        "company": "ORGANICA",
        "email": "acostarobbins@organica.com",
        "phone": "+1 (882) 441-3367",
        "address": "697 Linden Boulevard, Sattley, Idaho, 1035"
      }
    ]
}

// console.log(server.clients[0].id);
// console.log(server.clients[1].isActive);
// console.log(server.clients[2].age);
// console.log(server.clients[2].address);


for (const prop of server.clients) {
  console.log(prop);
}