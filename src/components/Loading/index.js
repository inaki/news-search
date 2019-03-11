import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const StyledLoading = styled.div`
    background: rgba(0,0,0,0.2);
    width: 100wv;
    height: 90vh;
    margin-top: -10px;
`;

const StyledCircularProgress = styled(CircularProgress)`
    position: absolute;
    top: 50%;
    left: 47%; 
`;

const Loading = () => {
    return (
        <StyledLoading>
            <StyledCircularProgress disableShrink/>
        </StyledLoading>
    );
}

export default Loading;