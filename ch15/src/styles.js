import { css } from "@emotion/react";

export const card = css`
    box-sizing: border-box;
    border-radius: 4px;
    padding: 10px;
    width: 340px;
    box-shadow: 0 0 5px #00000044;
`;

export const inputBox = css`
    margin-bottom: 10px;
    &>input{
        box-sizing: border-box;
        outline: none;
        border: 1px solid #dbdbdb;
        border-radius: 4px;
        padding: 0 10px;
        width: 100%;
        height: 40px;
        cursor: pointer;

        &:hover {
            box-shadow: 0 0 3px #00000033;
        }

        &:active {
            box-shadow: 0 0 3px #00000033 inset;
        }

        &:focus {
            box-shadow: 0 0 3px #0d2db933 inset;
        }
    }
`;
export const buttonBox = css`

    &>button{
        border: 1px solid #dbdbdb;
        box-sizing: border-box;
        outline: none;
        border-radius: 4px;
        width: 100%;
        height: 30px;
        background-color: #2463d6;
        color: #ffffff;
        cursor: pointer;
        
        &:hover {
            background-color: #1445a0;
        }
    
        &:active {
            background-color: #0d3070;
        }
    
        &:disabled {
            background-color: #dbdbdb63;
            cursor: default;
        }
    }

`;