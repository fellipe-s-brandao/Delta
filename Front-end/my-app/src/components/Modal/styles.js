import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        background-color: #ffff;
        width: 400px;
        height: 300px;
        border-radius: 25px;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .buttonFechar {
        margin-bottom: 1rem;
        background-color: var(--red);
        width: 200px;
        border: none;
        padding: 1rem;
        border-radius: 25px;
        color: #fff;
    }
    }

    
`
