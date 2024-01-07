import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`
const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 650px;
gap: 12px;
margin-bottom: 100px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const LogoButton = ({ icon, text, link }) => {
  return (
    <a href={link} className={`logo-button ${icon}-icon`} target="_blank" rel="noopener noreferrer">
      {icon === 'mail' ? (
        <span className="icon" role="img" aria-label="Mail Icon" >
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Circle-icons-mail.svg" alt="Mail Logo" style={{ width: '2em', height: '2em' }} />

        </span>
      ) : (
        <span className="icon" role="img" aria-label="LinkedIn Logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn Logo" style={{ width: '2em', height: '2em' }} />
        </span>
      )}
    </a>
  );
};

const Contact = () => {
  return (
    <Container id = "contact">
        <Wrapper>
    <div className="Contact">
      <span style={{ margin: '0 5px' }}></span>
      <LogoButton icon="mail"  link="mailto:sravanimalla1999@gmail.com" />
      <span style={{ margin: '0 5px' }}></span>
      <LogoButton icon="linkedin"  link="https://www.linkedin.com/in/sravani-malla-1b1497189/" />
    </div>
        </Wrapper>
    </Container>
  );
};

























export default Contact;