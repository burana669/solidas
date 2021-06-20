import styled, {createGlobalStyle} from "styled-components"

export const VehicleDistanceStyle = styled.div`
order: 0;
width: 50%;
height: 20%;
margin: 1rem;

`
export const DistanceInputStyle = styled.div`
margin-left: 2rem;
`

export const SpeedselectStyle = styled.div`
order: 1;
width: 40%;
min-width: 40%;
margin: 2rem;

`
export const Speed2Style = styled.div`
width: 40%;
order: 2;
margin: 3rem;
`

export const ComparisonStyle = styled.div`
order:3;
width: 50%;
height: 20%;
margin: 2rem;

`

export const Flex1 = styled.div`
display: flex;
margin: 3rem;
`
export const Flex2 = styled.div`
width: 100%;
display: flex;
flex-flow: row wrap;
margin: 3rem;

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
border-radius: 1rem;
border: 1rem;
border-color: black;
color: whitesmoke;
padding: 1rem;
margin: 1rem;
`
export const Slider = styled.input`
-webkit-appearance: none;
    width: 100%;
    height: 15px;
    outline-width: 1rem;
    outline: black;
    outline-style: double;
    opacity: 0.7;
    margin: 2rem;
    
    

::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 1rem;
  height: 3rem;
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