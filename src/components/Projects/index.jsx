import React from 'react'
import styled from 'styled-components'
import { projects } from '../../data/constants'

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
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`

const Project = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }

`

const ProjectTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 10px;
  font-weight: 200;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 20px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

export const ProjectCode = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 65%;
    
    max-width: 100px;
    text-align: center;
    padding: 10px 0;
    color:${({ theme }) => theme.text_primary};
    border-radius: 40px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(150deg, hsla(220, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(125deg, hsla(220, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(125deg, hsla(220, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    
    filter: brightness(1);
    }    
    
    
    @media (max-width: 768px) {
        font-size: 14px;
        padding: 8px 12px;
      }
      @media (max-width: 500px) {
        font-size: 14px;
        padding: 6px 12px;
      }

`;






const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Here are some of my Projects
        </Desc>
        <ProjectContainer>
          {projects.map((project) => (
            <Project>
              <ProjectTitle>{project.title}</ProjectTitle>
              <SkillList>
                {project.tags.map((item) => (
                  <SkillItem>
                    {item}
                  </SkillItem>
                ))}
              </SkillList>

              <Desc>{project.description}</Desc>

              <div align = 'center'>
              <ProjectCode target='display' href={project.github} > github  </ProjectCode>
              </div>

            </Project>
          ))}

        </ProjectContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects