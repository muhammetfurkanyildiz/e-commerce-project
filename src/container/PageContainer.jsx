import React from 'react'
import Container from '@mui/material/Container';

function PageContainer(props) {
    const { children } = props
    return (
        <div>
            <Container>{children}</Container>
        </div>
    )
}

export default PageContainer