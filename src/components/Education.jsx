import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Education = () => (
    <div className="Education">
        <H2Styled name="Estudios" />
        <div className="Education-container">
            <div className="Education-item">
                <H3Styled>Egresado de AcademiaGeek
                    <span>Jun - Ago 2021</span>
                </H3Styled>
                <PStyled name="Lorem ipsum dolor sit amet consectetur."/>
            </div>
        </div>
    </div>
);

export default Education;