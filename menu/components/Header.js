const Header = () => {
    return (
        <div className="navbar-fixed">
            <nav className="">
                <div className="topo-fixo">
                    <a href="index.html#" className="brand-logo">
                        <div className="logo logo-small"></div>
                    </a>
                    <a href="#" data-activates="mobile-demo" className="button-collapse"><i id="main_menu" className="material-icons">menu</i></a>
                </div>

                <ul className="right hide-on-med-and-down brand-logo">
                    <li><a className="scrollSuave" href="index.html#products">Produtos</a></li>
                    <li><a className="scrollSuave" href="cardapio.html#cardapio">Cardápio</a></li>
                    <li><a className="scrollSuave" href="index.html#about">Quem somos</a></li>
                    <li><a className="scrollSuave" href="index.html#contact">Contato</a></li>
                    <li><a className="scrollSuave" href="trabalheconosco.html">Trabalhe conosco</a></li>
                </ul>

                <ul className="side-nav" id="mobile-demo">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="index.html#products">Produtos</a></li>
                    <li><a href="cardapio.html#cardapio">Cardápio</a></li>
                    <li><a href="index.html#about">Quem somos</a></li>
                    <li><a href="index.html#contact">Contato</a></li>
                    <li><a href="trabalheconosco.html">Trabalhe conosco</a></li>
                </ul>
            </nav>
        </div>
        
    );
}

export default Header;