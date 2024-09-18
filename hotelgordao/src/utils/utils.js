export function formatarNome(nome) {
    const partes = nome.split(' ');
    const primeiroNome = partes[0];
    const segundoNome = partes[1] || '';
    return `${primeiroNome} ${segundoNome}`;
} 

export function formatarCPF(cpf) {
    const numeros = cpf.replace(/\D/g, '');

    const regexCPF = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
    const cpfFormatado = numeros.replace(regexCPF, '$1.$2.$3-$4');

    return cpfFormatado;
};

export function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11) {
      return false;
    }
    if (/^(\d)\1{10}$/.test(cpf)) {
      return false;
    }
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let rest = sum % 11;
    let digit1 = (rest < 2) ? 0 : 11 - rest;
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rest = sum % 11;
    let digit2 = (rest < 2) ? 0 : 11 - rest;
    if (parseInt(cpf.charAt(9)) !== digit1 || parseInt(cpf.charAt(10)) !== digit2) {
      return false;
    }
    return true;
}