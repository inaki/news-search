import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const StyledLoading = styled.div`
    background: rgba(0,0,0,0.2);
    width: 100wv;
    height: 100vh;
    margin-top: -12px;
`;

const Loading = () => {
    return (
        <StyledLoading>
            <CircularProgress
                style={{position: 'absolute', top: '50%',left: '47%'}}
                disableShrink
                />
        </StyledLoading>
    );
}

export default Loading;