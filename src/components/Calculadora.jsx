import React from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../assets/styles/components/Calculadora.css'



const Calculadora = () => (
    <>
    <div className= 'Calculadora'>
        <div className='insider'>
        <div className= 'row'>
            <p>Monto Total</p>
            <input type="text" className="input" placeholder="$" />
        </div>        
        <Slider className = 'Slider'></Slider>

        <div className = 'row'>
        <p>$5000</p>
        <p>$50.000</p>
        </div>
        <div className= 'row'>
        <p>Plazo</p>
        <input type="text" className="input" placeholder="PLAZOS" />
        </div>        
        <Slider className = 'Slider'></Slider>
        <div className = 'row'>
        <p>3</p>
        <p>24</p>
        </div>        
        
        <div className= 'row'>
        <p>CUOTA FIJA POR MES</p>
        <p>$2,412.91</p>
        </div>
        
        <div className= 'row'>
            <button>Calcular</button>
            <button>VER DETALLE CUOTA</button>
        </div>
        
        </div>
    </div>
    </>
)
export default Calculadora;