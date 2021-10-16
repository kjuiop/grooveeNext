import React from 'react';
import App from 'next/app'
import Head from 'next/head';

import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components'

import 'antd/dist/antd.css';

import GlobalStyle from '../components/GlobalStyle';
import theme from '../components/theme';

const Groovee = ({ Component }) => {

    return (
        <>
            <GlobalStyle>
                <ThemeProvider theme={theme}>
                    <Component />
                </ThemeProvider>
            </GlobalStyle>
        </>
    )
};

Groovee.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default Groovee;