const cliente = {
    nome:"André",
    idade:32,
    cpf:"111222333",
    email:"andre@gmail.com"
};

const chaves = ["nome", "idade", "cpf", "email"];

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`);
console.log(`Cpf do cliente: ${cliente.cpf}`);
console.log(`E-mail do cliente: ${cliente.email}`);

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor${cliente[chave]}`)
});
