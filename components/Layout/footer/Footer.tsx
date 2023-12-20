import React from 'react';
import styles from '@/styles/Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.footerContainer}>
			<div className={styles.textFooterContainer}>
				<div className={styles.footerText}>
					<img src='images/logoudea.svg' alt='logoudea' width={250}/>
					
				</div>
				<div className={styles.footerText}>
					Laboratorio Integrado de Sistemas <br/>
                    Departamento de Ingeniería de
					Sistemas<br/>
                    Universidad de Antioquia
				</div>
				<div className={styles.footerText}>
					Medellín - Colombia <br/>
                    Dirección: calle 67 No. 53 - 108<br/>
                    Teléfono: [57+604] 219 5532<br/>
                    Oficina: 18-210
				</div>
				<div className={styles.footerText}>
					Recepción de correspondencia:<br/>
                    calle 70 No. 52 - 21<br/>
                    Apartado Aéreo 1226
				</div>
                <div className={styles.footerText}>
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
