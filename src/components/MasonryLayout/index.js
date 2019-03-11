import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, auto));
    grid-auto-rows auto;
    padding: 10px;
    min-height: 0;
    min-width: 0;
    .grid-item {
        margin: 10px;
        font-size: 30px;
        text-align: left;
        overflow: hidden;
        min-width: 0; 
      }
`;

class MasonryLayout extends React.Component {
    render() {
        return (
            <Container>
                {this.props.children}
            </Container>
        )
    }
}

export default MasonryLayout;