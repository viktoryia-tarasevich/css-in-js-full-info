import React from 'react';


import { styles } from './style'

export const EmotionText = ({name}) => {
    return <div className={styles}>{name}</div>
}

export const CommonText = ({name}) => {
    return <div style={{
        padding: '32px',
        backgroundColor: 'hotpink',
        fontSize: '24px',
        borderRadius: '4px'
    }}>{name}</div>
}



// const css = style => {
//     const className = hash(style);
//     const styleElement = document.createElement('style');
//     styleElement.textContent = `
//       .${className} {
//         ${style}
//       }
//     `;
//     document.head.appendChild(styleElement);
//     return className;
//   };

//   css`padding: 32px;` // css-beu21s-Text