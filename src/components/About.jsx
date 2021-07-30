import React from 'react';
import styled from 'styled-components';

import Social from '../components/Social'
const Styles = styled.div`
    text-align: center;
`;

const Profile = styled.div`
    padding: 2em 0 0 0;
`;

const Img = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid #470a14;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0,0.6);
`;

const Name = styled.div`
    text-align: center;
`;

const H2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #470a14;
`;

const Profession = styled.p`
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #a8324e;
`;

const Bio = styled.p`
    color: #a8324e;
    font-size: 1em;
    font-weight: 300;
`;

const Location = styled.p`
    color: #a8324e;
    font-size: 1em;
    font-weight: 400;
`;

const About = () => (
    <Styles>
        <div className="Container">
            <Profile>
                <figure>
                    <Img src="https://avatars.githubusercontent.com/u/86790583?v=4" alt="Mi avatar" />
                </figure>
            </Profile>
            <Name>
                <H2>Jose Zapata</H2>
            </Name>
            <div className="Profession">
                <Profession>Geek Academy, FrontEnd Student </Profession>
            </div>
            <div className="Bio">
                <Bio>Soy Estudiante Front-End</Bio>
            </div>
            <div className="location">
                <Location>Arauca, Colombia</Location>
            </div>
            <div className="Social">
                <Social />
            </div>
        </div>
    </Styles>
); 

export default About;