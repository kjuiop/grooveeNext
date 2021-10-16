import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

const Groovee = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>스터디그룹을 구하고 싶다면?</title>
            </Head>
            <Component />
        </>
    )
};

Groovee.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default Groovee;