import React from 'react'

class Carro extends React.Component{
    constructor(props){
        super(props);
        this.state = { detalhe: [] }

        this.idCarro = this.props.location.state.carro
        this.idAno = this.props.location.state.anoId
        this.idModelo = this.props.match.params.name
}
componentDidMount(){
    fetch(`http://fipeapi.appspot.com/api/1/carros/veiculo/${this.idCarro}/${this.idModelo}/${this.idAno}.json`)
    .then(response => response.json())
    .then(data =>  {
        this.setState({ detalhe: data })
    })
    .catch(e => {
    return console.log(e)}
    )  
}


render(){
    
    return(
        <div> 
           <p> Marca: {this.state.detalhe.marca}</p>
           <p>Modelo: {this.state.detalhe.name}</p>
           <p>Ano: {this.state.detalhe.ano_modelo}</p>
           <p>Preço: {this.state.detalhe.preco}</p>
           <p>Combustível: {this.state.detalhe.combustivel}</p>

        </div>
        
    )
}

}


export default Carro;