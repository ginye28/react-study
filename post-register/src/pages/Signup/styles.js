import { css } from "@emotion/react";
import bg from "../../assets/sign_background.webp"

export const layout = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const header = css`
    margin-bottom: 40px;

    & > h2 {
        margin: 30px 0 10px;
        font-weight: 500;
    }

    & > p {
        margin: 0;
        font-size: 14px;

        & > a {
            text-decoration: none;
            color: #34c767;
        }
    }
`;