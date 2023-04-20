import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
        padding: 0;
        box-sizing: border-box;
		font-family: 'Overpass', sans-serif;
        font-weight: 200;
        background-color: #101111;
        color: white;
	}

    .clip {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 75% 100%, 70% 97%, 30% 97%, 25% 100%, 0 100%);
    }

    .clip2 {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 91% 100%, 90% 97%, 76% 97%, 75% 100%, 0 100%);
    }
`;
