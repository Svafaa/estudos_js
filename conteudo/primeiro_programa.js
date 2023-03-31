console.log(`Trabalhando com listas`);
const destinos= new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`, `Juiz de Fora`);
const idade=17;
const acompanhada=true;
const dest=`Rio de Janeiro`;
let i=0;

if(idade>=18 || acompanhada==true)
{
    console.log("Compra aceita. Comprador maior de idade");
}
else
{
    console.log("Compra barrada.");
}
for(i=0; i<4; i++)
{
    if(destinos[i]==dest)
    {
        console.log("Destino existe");
        destinos.splice(2,1);
        break;
    }
    
}

console.log(destinos);
