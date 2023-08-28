import { styled } from "styled-components";



export const StyledForm = styled.form`
    width: 80%;
    height: 400px;
    background-color: rgb(198, 138, 219);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    h3{
        position: absolute;
        top: 40px;
        font-size: 1.7rem;
        p{
            font-size: 1.2rem;
        }
    }
    .ContentWrapper{
        margin-top: 60px;
        display: flex;
        gap: 10px;
    }
    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    input{
        width: 70%;
        height: 30px;
        border-radius: 4px;
    }
    label{
        align-self: flex-start;
        margin-left: 15%;
    }
    button{
        margin-top: 10px;
    }
`