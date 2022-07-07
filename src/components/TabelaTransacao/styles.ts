import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        overflow-x: auto;
    }

    @media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) {
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 0.5rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 0.5rem 2rem;
            border: 0;
            /*background: var(--shape);*/
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child {
                color: var(--text-title);
            }

            &.colocada {
                color: var(--green);
            }

            &.retirada {
                color: var(--red);
            }
        }

        .product {
            padding: 1rem;
            border-radius: .25rem;
            background-color: #fff;
            transition: all .3s ease;
            cursor: pointer;

            &:hover {
                background-color: #e8e1e1;
                transition: all .3s ease;
            }
        }
    }
`;