import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';
const Experience = () => (
    <div className="Experience">
        <H2Styled name="Experiencia" />
        <div className="Experiencie-container">
            <div className="Experience-item">
                <H3Styled>Desarrollo de apliaciones basadas en CRUD's, autenticacion de usuarios y accaso por roles.</H3Styled>
                <PStyled name="Imperdiet sem dapibus faucibus nam a posuere."/>
            </div>
        </div>
    </div>
);

export default Experience;