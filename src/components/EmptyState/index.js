// EmptyState Component
import React from 'react';
import styled from 'styled-components';

const StyledEmptyState = styled.div`
    width: 100wv;
    height: 100vh;
    font-size: 1.7rem;
    color: darkgray;
    text-align: center;
    margin-top: 20%;
`;

const EmptyState = ({text = 'No Results...'}) => {
    return (
        <StyledEmptyState>
            {text}
        </StyledEmptyState>
    );
}

export default EmptyState;