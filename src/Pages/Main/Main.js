import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class Main extends Component {
    constructor(props){
        super(props);
      this.state ={
          marcas: [],
          carros: [],
          ano: [],
          propState: ''
      };

      this.handleChangeModel = this.handleChangeModel.bind(this);
      this.handleChangeYear = this.handleChangeYear.bind(this);
      this.getIds = this.getIds.bind(this);
  }

  
  componentDidMount(){
    fetch(`http://fipeapi.appspot.com/api/1/carros/marcas.json`)
    .then(response => response.json())
    .then(data =>  {
      this.setState({ marcas: data })  } )
    .catch(e => {
    return console.log(e)}
    )  
  }

  handleChangeModel(event) {

    this.idCarro = event.target.value

    fetch(`http://fipeapi.appspot.com/api/1/carros/veiculos/${this.idCarro}.json`)
    .then(response => response.json())
    .then(data =>  {
        this.setState({ carros: data })  })
    .catch(e => {
    return console.log(e)}
    )  
  }

  handleChangeYear(event) {

    this.idModelo = event.target.value

    fetch(`http://fipeapi.appspot.com/api/1/carros/veiculo/${this.idCarro}/${this.idModelo}.json`)
    .then(response => response.json())
    .then(data =>  {
        this.setState({ ano: data })  })
    .catch(e => {
    return console.log(e)}
    )  
  }

  getIds(event){

    this.idAno = event.target.value
    this.setState({ propState: this.idAno })
  }
    
  render(){

    const listMarca = this.state.marcas.map((marca) =>
    <option key={marca.id} value={marca.id}>{marca.fipe_name}</option> );

    const listCar = this.state.carros.map((car) =>
    <option key={car.id} value={car.id}>{car.name}</option> );

    const listYear = this.state.ano.map((year) =>
    <option key={year.id} value={year.id}>{year.name}</option> );


    return (

      <div className="App">

      <Form onSubmit={this.handleSubmit}>
        
        <Form.Group bsPrefix={ 'form p-3 mb-2 bg-primary text-white'}>
            <Form.Label>Marca:</Form.Label>
            <Form.Control as="select" onChange={this.handleChangeModel}>
            <option>Selecione a marca</option>
              {listMarca}
            </Form.Control>
        </Form.Group>
        
        <Form.Group bsPrefix={ 'form p-3 mb-2 bg-primary text-white'}>
            <Form.Label>Carro:</Form.Label>
            <Form.Control as="select" onChange={this.handleChangeYear}>
            <option>Selecione o carro</option>
              {listCar}
            </Form.Control>
        </Form.Group>
       
        <Form.Group bsPrefix={ 'form p-3 mb-2 bg-primary text-white'}>
            <Form.Label>Ano:</Form.Label>
            <Form.Control as="select" onChange={this.getIds} >
            <option>Selecione o ano</option>
              {listYear}
            </Form.Control>
        </Form.Group>

        <Button type="submit">
        <Link to={{
          pathname: `/carro/${this.idModelo}`,
          state: { carro: this.idCarro, anoId: this.idAno }}}>Mostrar detalhes</Link>
        </Button>

    </Form>
       
      
  
        
      </div>
    );
  }
  }


  export default Main;