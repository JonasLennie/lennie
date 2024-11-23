import React from 'react';
import './App.css';
import palantir from './media/palantir.png';
import rapidx from './media/rapidx.svg';
import valyu from './media/valyu.jpeg';
import ab from './media/ab.png';
import github from './media/github.png';
import linkedin from './media/linkedin.png';
import email from './media/mail.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jonas Lennie</h1>
        <h2>Forward Deployed Software Engineer at <a href={'https://www.palantir.com/uk/'}>Palantir <img className='icon' src={palantir} alt="Palantir Logo" /> <span className={'lighter'}>(2024)</span></a></h2>
        <h2>Platforms Engineer at <a href={'https://rapidx.bio/'}>RapidX Bio <img className='icon' src={rapidx} alt="RapidX Logo" /> <span className={'lighter'}>(2023-2024)</span></a></h2>
        <h2>Infrastructure Engineer at <a href={'https://www.valyu.network/'}>Valyu <img className='icon' src={valyu} alt="Valyu Logo" /> <span className={'lighter'}>(2023-2024)</span></a></h2>
        <h2>Software Engineering Intern at <a href={'https://www.alliancebernstein.com/corporate/en/home.html'}>Alliance Bernstein <img className='icon' src={ab} alt="Alliance Bernstein Logo" /> <span className={'lighter'}>(2023)</span></a></h2>
        <h2>Fisrt Class Honours BSc Computer Science at <a href={'https://www.ucl.ac.uk/'}>University College London 🏛️</a> <span className={'lighter'}>(2021-2024)</span></h2>
        <div className="links-container">
          <a href="https://github.com/jl3nn"><img className='bigicon' src={github} alt="GitHub Logo" /></a> 
          <a href="https://www.linkedin.com/in/jl3nn"><img className='bigicon' src={linkedin} alt="LinkedIn Logo" /></a>
          <a href="mailto:jonas@lenn.ie"><img className='bigicon' src={email} alt="Email" /></a>
        </div>
      </header>
    </div>
  );
}

export default App;
