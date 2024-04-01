import React, { useState } from 'react';
import Button from '../components/Button';
import '../styles/home.css';
import gitlab from '../images/gitlab.png';
import linkedin from '../images/linkedin.png';
import darkGithub from '../images/github-dark.png';
import lightGithub from '../images/github-light.png';

function Home() {
  const [githubHovered, setGithubHovered] = useState(false);

  const handleGithubHover = () => {
    setGithubHovered(true);
  };

  const handleGithubLeave = () => {
    setGithubHovered(false);
  };

  const onLink = (link, target) => {
    window.open(link, target);
  };

  return (
    <div className="container-home">
      <header className='home-menu'>
        <nav className='menu-links'>
          <ul className='links'>
            <li>home</li>
            <li>projects</li>
            <li>about</li>
          </ul>
        </nav>

        <article className='menu-buttons'>
          <Button
            event={() => onLink('https://gitlab.com/gabrielrochapimentel.dev', '_blank')} 
            nameId='btn-gitlab' 
            nameClass='btn' 
            img={<img src={gitlab} 
            alt='logo do gitlab'/>} 
          />
          <Button 
            event={() => onLink('https://www.linkedin.com/in/gabriel-rocha-pimentel-8501522b7/', '_blank')} 
            nameId='btn-linkedin' 
            nameClass='btn' 
            img={<img src={linkedin} 
            alt='logo do linkedin'/>} 
          />
          <Button
            event={() => onLink('https://github.com/gabriel-rocha-pimentel', '_blank')} 
            nameId='btn-github' 
            nameClass='btn' 
            img={<img 
                  src={githubHovered ? lightGithub : darkGithub} 
                  alt={githubHovered ? 'logo do github claro' : 'logo do github escuro'} 
                />} 
            onMouseEnter={handleGithubHover} 
            onMouseLeave={handleGithubLeave} 
          />
        </article>
      </header>

      <main className='home-content'>
        <section className='content-title'>
          <h1>olá, <em>eu sou gabriel</em></h1>
        </section>

        <section className='content-text'>
          <p>
            Muito prazer eu tenho 22 anos, meu nome é Gabriel Rocha, sou entusiasta na área de desenvolvimento de software. 
            Estudo através do <em>freecodecamp.org</em>, atualmente sou Front-End com React, Sass, CSS3, HTML5 e JavaScript, 
            com o objetivo de avançar para desenvolvedor full-stack estou aprendendo Python avançado 
            e Django na Solyd Academy além de flask e banco de dados no youtube.
          </p>
        </section>
      </main>

      <footer className='home-end'>
        <h2><em>bem vindo ao meu portfólio</em></h2>
      </footer>
    </div>
  );
}

export default Home;
