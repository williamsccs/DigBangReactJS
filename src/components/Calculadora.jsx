import React from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../assets/styles/components/Calculadora.css'



const Calculadora = () => (
    <>
    <div className= 'Calculadora'>
        <div className='insider'>
        <div className= 'row'>
            <p className ='p'>Monto Total</p>
            <input type="text" className="input" placeholder="$" />
        </div>        
        <Slider className = 'Slider'></Slider>

        <div className = 'row'>
        <p className ='p'>$5000</p>
        <p className ='p'>$50.000</p>
        </div>
        <div className= 'row'>
        <p className ='p'>Plazo</p>
        <input type="text" className="input" placeholder="PLAZOS" />
        </div>        
        <Slider className = 'Slider'></Slider>
        <div className = 'row'>
        <p className ='p'>3</p>
        <p className ='p'>24</p>
        </div>        
        
        <div className='containerFinal'>
            <div className= 'row2'>
                <p className ='p'>CUOTA FIJA POR MES</p>
                <p className ='p'>$2,412.91</p>
            </div>
        </div>
        
        <div className= 'row2'>
            <button className='button1'>OBTENE CREDITO</button>
            <button className='button2'>VER DETALLE CUOTA</button>
        </div>
        
        </div>
    </div>
    </>
)
export default Calculadora;