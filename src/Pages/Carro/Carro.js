import React from 'react'
import './Carro.css'

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
        <div className="App-content-car"> 
           <p><b className="bold">Marca :</b>  {this.state.detalhe.marca}</p>
           <p><b className="bold">Modelo :</b>  {this.state.detalhe.name}</p>
           <p><b className="bold">Ano :</b>  {this.state.detalhe.ano_modelo}</p>
           <p><b className="bold">Preço :</b>  {this.state.detalhe.preco}</p>
           <p><b className="bold">Combustível :</b>  {this.state.detalhe.combustivel}</p>

        </div>
        
    )
}

}


export default Carro;