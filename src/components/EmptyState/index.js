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

const EmptyState = () => {
    return (
        <StyledEmptyState>
            No Results...
        </StyledEmptyState>
    );
}

export default EmptyState;