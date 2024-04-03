//Components
import Button from '../components/Button';

//Styles
import '../styles/about.css';
import '../styles/buttons.css';

//Images
import profileImage from '../images/aofXPBFDtnCRQd4zwLBPKA==.webp';
import frontEndMentor from '../images/frontend-mentor-logo.jpg';
import freeCodeCamp from '../images/freecodecamp-logo.png';
import solydAcademy from '../images/solyd_treinamentos_logo.jpeg';

//Downloads
import cv from '../downloads/cv-dev_frontend_gabriel-rocha-pt.pdf';

function About(){

    const onLink = (link, target) => {
        window.open(link, target);
      };

    return(
        <div className='container-about'>

            <main className='box-about'>
                <section className='about-image'>
                    <img className='image-profile' src={profileImage} alt='Imagem de perfil' />
                </section>

                <section className='about-content'>
                    <article className='content-title'>
                        <span className='tag-title'>about</span>
                        <h2 className='title'>olá pessoal, <em>sejam bem vindos</em></h2>
                    </article>

                    <article className='about-content-text'>
                        <p className='about'>
                            Sou Gabriel Rocha atualmente estudo desenvolvimento de software 
                            no site <em>freecodecamp.org</em>, prático com projetos reais no <em>frontendmentor.io</em> 
                            e com aulas no YouTube.
                        </p>
                        <p className='about'>
                            Como meu objetivo é chegar à área full-stack, 
                            também faço curso de Python na <em>Solyd Academy</em>.
                        </p>
                        <p className='about'>
                            Siga-me no LinkedIn e acompanhe minha jornada como desenvolvedor, 
                            estou disponível para vagas de emprego, <a href={cv}>baixe meu currículo</a>.
                        </p>
                    </article>

                    <article className='content-buttons'>
                        <Button 
                            event={() => onLink('https://www.frontendmentor.io/profile/gabriel-rocha-pimentel', '_blank')} 
                            nameId='btn-frontend-mentor' 
                            nameClass='btn' 
                            img={<img src={frontEndMentor} 
                            alt='logo do front end mentor'/>} 
                        />
                        <Button 
                            event={() => onLink('https://www.freecodecamp.org/gabriel-rocha-pimentel', '_blank')} 
                            nameId='btn-codecamp' 
                            nameClass='btn' 
                            img={<img src={freeCodeCamp} 
                            alt='logo do freecodecamp'/>} 
                        />
                        <Button 
                            event={() => onLink('https://solyd.com.br/verificar/FmPqfEchvD/', '_blank')} 
                            nameId='btn-solyd' 
                            nameClass='btn' 
                            img={<img src={solydAcademy} 
                            alt='logo da solyd academy'/>} 
                        />
                    </article>
                </section>
            </main>
        </div>
    )
}

export default About;