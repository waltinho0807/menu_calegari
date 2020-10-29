import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
    return(
        <footer className="page-footer grey darken-4">
	<div className="container">
		<div className="row valign-wrapper">
			<div className="col s12 m4 l4">
				<p className="white-text"><i className="material-icons">Endereço</i>Rua Antonio Duveza, 516</p>	
				<p className="white-text"><i className="material-icons">Fone</i>(18) 3282-3135</p>		
				<p className="white-text"><i className="material-icons">e-mail</i>atendimento@hotmail.com</p>
			</div>
			<div className="col s12 m4 l4 hide-on-med-and-down">
				<div className="logo"></div>
			</div>
			<div className="col s12 m4 l4 ">
			<div className="valign-wrapper">
				<div className="">		
					<ul className="social-medias">
						<li><a className="grey-text text-lighten-3 facebook" href="#!">Facebook</a></li>
						<li><a className="grey-text text-lighten-3 twitter" href="#!">Twitter</a></li>
						<li><a className="grey-text text-lighten-3 instagram" href="#!">Instagram</a></li>
						<li><a className="grey-text text-lighten-3 youtube" href="#!">Youtube</a></li>
					</ul>
				</div>
			</div>
			</div>
		</div>
	</div>
	<div class="footer-copyright black">
		<div class="container">
			© 2016 Copyright Waltinho Calegari
			<a class="grey-text text-lighten-4 right" target="_blank" href="#">calegari</a>
		</div>
	</div>
</footer>
    );
}
  

export default Footer;