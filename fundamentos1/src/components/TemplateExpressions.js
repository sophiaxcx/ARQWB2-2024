const TemplateExpressions = () => {
    const nome ='Ariana Grande'
    const dados = {
        idade: 31,
        profissão: 'Cantora'
    }
    return(
        <div>
            <h2>Olá, {nome}! Seja bem-vinde!</h2>
            <h3>Você é {dados.profissão} e tem {dados.idade} anos.</h3>
            <p>{console.log("Usando o React!")}</p>
        </div>
    );
}

export default TemplateExpressions;