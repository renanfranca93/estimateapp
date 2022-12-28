import styled from 'styled-components'

export const Container = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    

`;

export const Page = styled.div`

    @media only screen and (max-width: 720px)  {
        width: 100%;
        margin-top:0;
        border-radius: 0;
        min-height: 100vh;
        box-shadow: none;
    }

    .w50{
        width: 50%;
        margin-right: 1rem;

        @media only screen and (max-width: 720px)  {
            width: 100%;
            margin-right: 0;
        }
    }

    .footer{
        margin-top: 1rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

    }

    .buttonDefault{
            margin-top: 1rem;
            width: 10rem;
            height: 3rem;
            border: none;
            border-radius:1.5rem ;
            color:#f5f5f5;
            background: grey;
            cursor: pointer;
            transition: .5s all;

            &:hover{
                
                box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
                transition: .5s all;
            }

            @media only screen and (max-width: 720px)  {
                width: 100%;
                margin-top: .5rem;
                
            }
    }

    width: 75%;
    position: relative;
    min-height: 70vh;
    border-radius: 1rem;
    margin-top:5rem;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
    background: #f5f5f5;
    padding: 1rem;

    div{
        display: flex;

        @media only screen and (max-width: 720px)  {
            flex-direction: column;
        }
    }

    input{
        height: 2rem;
        border-radius: 1rem;
        border: 1px solid #E8E8E8;
        /* width: 50%; */
        /* margin: .5rem; */
        padding-left: 1rem;
        padding-right: 1rem;

        @media only screen and (max-width: 720px)  {
            width: 100%;
            margin-bottom: .2rem;
        }
    }



`;

export const NewItem = styled.div`

    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    

    @media only screen and (max-width: 720px)  {
            align-items: center; 
        }


   

    span{
        width: 30%;

        @media only screen and (max-width: 720px)  {
            width: 100%;
            margin: 0;
            padding: 0;

            display: flex;
            flex-direction: column;
            align-items: center;
            
            
        }


        p{
        font-size: .7rem;
        color: grey;
        width: 100%;

        @media only screen and (max-width: 720px)  {
            text-align: left;
            
            
        }
    }


        input{
            height: 2rem;
            border-radius: 1rem;
            border: 1px solid #E8E8E8;
            /* width: 50%; */
            /* margin: 0 .5rem; */
            padding-left: 1rem;
            padding-right: 1rem;

            @media only screen and (max-width: 720px)  {
                width: 100%;
            }
        }
    }

    button{
            width: 3rem;
            height: 3rem;
            border: none;
            border-radius:1.5rem ;
            color:#f5f5f5;
            background: grey;
            cursor: pointer;
            transition: .5s all;

            &:hover{
                
                box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
                transition: .5s all;
            }

            @media only screen and (max-width: 720px)  {
                width: 100%;
                margin-top: .5rem;
                
            }
        }

    


`

export const ItemOnList = styled.div`


        @media only screen and (max-width: 720px)  {
            height: 3rem;
            border-radius: 1.5rem;
            div{
                width: 100%;
                
                span{
                    display: flex;
                    width: 100%;
                    
                    justify-content: space-between;
                }
            }
        }

        div{
            display: flex;
            width: 80%;
            justify-content: space-between;

            span{
                display: flex;
                width: 50%;
                justify-content: space-between;
            }
        }

        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        padding:.5rem 1rem;
        width: 100%;
        margin-top: .5rem;
        
        height: 2rem;
        border-radius: 1rem;
        border: 1px solid grey;

        p,strong{
            font-size: 1rem;
            margin: 0;
            padding: 0;
            
        }

        svg{
            cursor: pointer;
            position: absolute;
            right: 1rem;
            width: .7rem;
        }


`

export const ItemBox = styled.div`

    display: flex;
    width: 100%;
    position: relative;
    flex-direction: column;

    h5{
        margin: 1rem 0;
    }

`
