import React, { useState } from "react";
import PropTypes from 'prop-types';

const AppLayout = ({ children }) => {
    return (
        <>
            <div>Hello Groovee</div>
            { children }
        </>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;