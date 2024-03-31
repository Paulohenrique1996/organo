import './Footer.css';

const Footer = () =>{
    return(
        <footer>
            <div className='footer__conteudo'>
                <div>
                    <img src='/img/fb.png' alt='FaceBook' className='footer__social-img'></img>
                    <img src='/img/tw.png' alt='Twitter' className='footer__social-img'></img>
                    <img src='/img/ig.png' alt='Instagram' className='footer__social-img'></img>
                    
                    
                </div>
                <img className='footer__organo' src='/img/logo.png' alt=''></img>
                <h5 className='footer__text'>Desenvolvido por PauloH</h5>
            </div>
        </footer>
    )
    
}
export default Footer;
