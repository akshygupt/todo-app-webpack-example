import React from 'react';
import webpackLogo from '../images
';

export default function LoadImage() {
    return (
        <div>
            <img src={webpackLogo} height={200} width={200} />
        </div>
    );
}