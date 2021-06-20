import styled, {createGlobalStyle} from "styled-components"

export const VehicleDistanceStyle = styled.div`
order: 0;
width: 20%;
height: 20%;

`

export const SpeedselectStyle = styled.div`
order: 1;
width: 40%;
min-width: 40%;
margin: 10px;

`
export const Speed2Style = styled.div`
width: 40%;
order: 2;
margin: 20px;
`

export const ComparisonStyle = styled.div`
order:3;
width: 50%;
height: 20%;
margin: 10px;

`

export const Flex1 = styled.div`
display: flex;
margin: 20px;
`
export const Flex2 = styled.div`
width: 100%;
display: flex;
flex-flow: row wrap;
margin: 20px;

`

export const MainContainer = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `

export const Button = styled.button`
background: grey;
border-radius: 5px;
border: 0px;
border-color: black;
color: whitesmoke;
padding: 10px;
margin: 4px;
`
export const Slider = styled.input`
-webkit-appearance: none;
    width: 100%;
    height: 15px;
    outline-width: 2px;
    outline: black;
    outline-style: double;
    opacity: 0.7;
    margin: 10px;
    
    

::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 7px;
  height: 25px;
  border-radius: 10%; 
  background: #111111;
  cursor: pointer;
}
`

export const DistanceInput = styled.input`
margin: 3px;
`

export const CssReset = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`