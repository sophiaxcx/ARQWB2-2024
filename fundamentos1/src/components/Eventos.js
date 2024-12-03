const Eventos = () => {

    const handleMeuEvento = () => {
        console.log('Ativou o evento moh!')
    };

    return(
        <div>
            <div>
            <button onClick={handleMeuEvento}></button>
            </div>
            <div>
                <button onClick={() => console.log("Botariana Grande!")}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() =>{
                    if(true){
                        console.log('Isso não é corretamente étnico.')
                    }
                }}>Clique aqui</button>
            </div>
        </div>
    );
};

export default Eventos;