import styled from "styled-components";

const Block = styled.div`
${({ width }) => (width ? `width:${width};` : "")}
${({ height }) => (height ? ` height:${height};` : "")}
${({ MinHeight }) => (MinHeight ? `min-height:${MinHeight};` : "")}

${({ border }) => (border ? ` border: ${border};` : "")}
${({ background }) => (background ? ` background: ${background}; ` : "")}
${({ BImage }) => (BImage ? ` background-image: ${BImage}; ` : "")}
${({ BSize }) => (BSize ? ` background-size: ${BSize}; ` : "")}
${({ BAttachment }) =>
  BAttachment ? ` background-attachment: ${BAttachment}; ` : ""}
${({ BImageRepeat }) => (BImageRepeat ? ` background-repeat:no-repeat; ` : "")}

${({ margin }) => (margin ? ` margin: ${margin}; ` : "")}
${({ padding }) => (padding ? ` padding: ${padding}; ` : "")}
${({ radius }) => (radius ? ` border-radius: ${radius}; ` : "")}
${({ flex }) => (flex ? ` display:flex; ` : "")}
${({ direction }) => (direction ? ` flex-direction: ${direction}; ` : "")}
${({ justifyContent }) =>
  justifyContent ? ` justify-content: ${justifyContent}; ` : ""}
${({ alignItems }) => (alignItems ? ` align-items: ${alignItems}; ` : "")}
${({ shadow }) => (shadow ? ` box-shadow: ${shadow}; ` : "")}
${({ position }) => (position ? ` position: ${position}; ` : "")}
${({ top }) => (top ? ` top: ${top}; ` : "")}
${({ left }) => (left ? ` left: ${left}; ` : "")}
${({ right }) => (right ? ` right: ${right}; ` : "")}
${({ zIndex }) => (zIndex ? ` z-index: ${zIndex}; ` : "")}
${({ overflow }) => (overflow ? ` overflow: ${overflow}; ` : "")}
${({ size }) => (size ? ` font-size: ${size}; ` : "")}
${({ cursor }) => (cursor ? ` cursor: ${cursor}; ` : "")}
${({ transform }) => (transform ? ` transform: ${transform}; ` : "")}
${({ color }) => (color ? ` color: ${color}; ` : "")}



${({ wrap }) => (wrap ? `flex-wrap: ${wrap}; ` : "")}





`;

export default Block;
