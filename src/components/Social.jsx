import React from 'react';
//estilos para volverlo mas presentacional
import styled from 'styled-components';

const SocialStyles = styled.div`
    margin: 0 auto;
    display: block;
`;

const Ul = styled.ul`
    list-style-type: none;
    margin: auto;
    padding: 0;
`;

const Li = styled.li`
    display: inline;
    margin: 0 10px  0 0;

`;

const Links = styled.a`
    font-size: 23px;
    color: #212121;
    text-decoration: none;
    
`;
const Icon = styled.i`
    color: #a8324e;
`;


  

const Social = () => (
    <SocialStyles>
        <Ul>
            <Li>
                <Links href="https://www.facebook.com/" target="blanck">
                    
                        <Icon className="fab fa-facebook" />
                   
                </Links>
            </Li>
            <Li>
                <Links href="https://twitter.com/ " target="blanck">
                   
                        <Icon className="fab fa-twitter" />
                   
                </Links>
            </Li>
            <Li>
                <Links href="https://co.linkedin.com/" target="blanck">
                   
                        <Icon className="fab fa-linkedin" />
                 
                </Links>
            </Li>
            <Li>
                <Links href="https://github.com/" target="blanck">
                   
                        <Icon className="fab fa-github" />
                    
                </Links>
            </Li>
        </Ul>
    </SocialStyles>
);

export default Social;