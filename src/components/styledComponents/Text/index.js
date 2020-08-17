import styled from "styled-components";

const Text = styled.span`
${({ width }) => (width ? `width:${width};` : "")}
${({ height }) => (height ? ` height:${height};` : "")}
${({ color }) => (color ? ` color : ${color};` : "")}
${({ size }) => (size ? `font-size : ${size};` : "")}
${({ weight }) => (weight ? ` font-weight : ${weight};` : "")}
${({ decoration }) => (decoration ? `text-decoration : ${decoration};` : "")}
${({ shadow }) => (shadow ? ` text-shadow : ${shadow};` : "")}
${({ list }) => (list ? `list-style : ${list};` : "")}
${({ alignItems }) => (alignItems ? ` align-items: ${alignItems}; ` : "")}
${({ margin }) => (margin ? ` margin: ${margin}; ` : "")}
${({ padding }) => (padding ? ` padding: ${padding}; ` : "")}
${({ align }) => (align ? ` text-align: ${align}; ` : "")}
${({ flex }) => (flex ? ` display:flex; ` : "")}
${({ direction }) => (direction ? ` flex-direction: ${direction}; ` : "")}
${({ justifyContent }) =>
  justifyContent ? ` justify-content: ${justifyContent}; ` : ""}
${({ alignItems }) => (alignItems ? ` align-items: ${alignItems}; ` : "")}
${({ shadow }) => (shadow ? ` box-shadow: ${shadow}; ` : "")}
${({ position }) => (position ? ` position: ${position}; ` : "")}
${({ align }) => (align ? ` text-align: ${align}; ` : "")}

`;

export default Text;
