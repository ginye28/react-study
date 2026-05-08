import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 30px;
    width: 100%;
    height: 100%;

    & > header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > h1 {
            display: flex;
            align-items: center;
            gap: 5px;
            margin: 0 0 10px;
            margin: 0;
            font-size: 40px;
            color: transparent;
            -webkit-text-fill-color: transparent;
            background: linear-gradient(90deg,rgba(115, 10, 36, 1) 0%, rgba(131, 166, 109, 1) 100%);
            -webkit-background-clip: text;
            background-clip: text;
            cursor: default;
        }
    }

    & > main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
        box-sizing: border-box;
        margin-top: 20px;
        padding: 20px;
        width: 100%;
        height: 100%;
    }
`;