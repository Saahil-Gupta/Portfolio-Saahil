// src/components/Background.jsx
import React from 'react';
import Spline from '@splinetool/react-spline';

const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 w-full h-full">
            <Spline scene="https://prod.spline.design/a-VPqVGLHdEpxlYV/scene.splinecode" />
        </div>
    );
};

export default Background;