// src/components/Background.jsx
import React from 'react';
import Spline from '@splinetool/react-spline';
// https://prod.spline.design/a-VPqVGLHdEpxlYV/scene.splinecode
export default function Background ({ scale = 1.2, offset = 0.1 }) {
  // offset as fraction: positive shifts scene up/left
  const offsetPct = offset * 100;
  const sizePct = scale * 100;

    return (
        <div
        className="fixed -z-10"
        style={{
            top: `-${offsetPct}%`,
            left: `-${offsetPct}%`,
            width: `${sizePct}%`,
            height: `${sizePct}%`,
        }}
        >
        <Spline
            scene="https://prod.spline.design/a-VPqVGLHdEpxlYV/scene.splinecode"
            style={{
            width: '100%',
            height: '100%',
            transform: `scale(${scale})`,
            transformOrigin: 'center',
            }}
        />
        </div>
    );
};