import React from 'react';

const Footer = () => {
	return (
		<footer className='container-footer'>
			<div className='container-footer--text'>
				<div className='text-center'>
					<img src='images/logoudea.svg' alt='logoudea' width={250}/>
					
				</div>
				<div className='text-center'>
					Laboratorio Integrado de Sistemas <br/>
                    Departamento de Ingeniería de
					Sistemas<br/>
                    Universidad de Antioquia
				</div>
				<div className='text-center'>
					Medellín - Colombia <br/>
                    Dirección: calle 67 No. 53 - 108<br/>
                    Teléfono: [57+604] 219 5532<br/>
                    Oficina: 18-210
				</div>
				<div className='text-center'>
					Recepción de correspondencia:<br/>
                    calle 70 No. 52 - 21<br/>
                    Apartado Aéreo 1226
				</div>
                <div className='text-center'>
                <span>
						©2023 Laboratorio Integrado de Sistemas
                        <br/>Departamento de
						Ingeniería de Sistemas
					</span>
                </div>
			</div>
			<div></div>
		</footer>
	);
};

export { Footer };
