const bairro = prompt("Bairro de entrega:")
 .trim()
 .toLowerCase();

let taxa;

switch(bairro) {
    case "colegio":
        taxa = 3;
        break;
    case "iraja":
        taxa = 4;
        break;
    case "vista alegre":
        taxa = 5;
        break;
    case "largo do bicao":
        taxa = 7;
        break;
    default:
        taxa = 10;
}
alert(`Taxa de entrega: R$ ${taxa.toFixed(2)}`)