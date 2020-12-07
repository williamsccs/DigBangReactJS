import React, { useState , useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../assets/styles/components/Calculadora.css'



// function handleChange(){
//     // console.log('esta cambiando')

// }


// onSliderChange = value => {
//     this.setState(
//       {
//         value
//       },
//       () => {
//         console.log(this.state.value);
//       }
//     );
//   };





const Calculadora = () => {    
    const [monto, setMonto] = useState(5000);
    const [plazo, setPlazo] = useState(3);
    

    const handleChange = (value) => {
        setMonto(value)
        console.log('esta cambiando: ' ,monto)
    };
    const handleInput = value => {
        setMonto(value)
        console.log('esta cambiando: ' ,monto)
    };
    const handleInputPlazo = value => {
        setPlazo(value)
        console.log('esta cambiando: ' ,monto)
    };

    return(
    <>
    <div className= 'Calculadora'>
        <div className='insider'>
        <div className= 'row'>
            <p className ='p'>Monto Total</p>
            <input type="text" className="input" placeholder="$" onChange={handleInput} value={monto}/>
        </div>        
        <Slider className = 'Slider'
            min={5000}
            max= {50000}
            step={1000}
            // value={(monto)}
             value={monto}
            onChange={ val => setMonto(val)}
            
        />
        <div className = 'row'>
        <p className ='p'>$5000</p>
        <p className ='p'>$50.000</p>
        </div>
        <div className= 'row'>
        <p className ='p'>Plazo</p>
        <input type="text" className="input" placeholder="PLAZOS" onChange={handleInputPlazo} value={plazo}/>
        </div>        
        <Slider className = 'Slider'
        min={3}
        max= {24}
        step={1}
        // onChange={handleInputPlazo} 
        // value={(monto)}
         value={plazo}
        onChange={ val2 => setPlazo(val2)}
        ></Slider>
        <div className = 'row'>
        <p className ='p'>3</p>
        <p className ='p'>24</p>
        </div>        
        
        <div className='containerFinal'>
            <div className= 'row2'>
                <p className ='p'>CUOTA FIJA POR MES</p>
                <p className ='p'>${monto/plazo}</p>
            </div>
        </div>
        
        <div className= 'row2'>
            <button className='button1'>OBTENE CREDITO</button>
            <button className='button2'>VER DETALLE CUOTA</button>
        </div>
        
        </div>
    </div>
    </>
    )};
export default Calculadora;