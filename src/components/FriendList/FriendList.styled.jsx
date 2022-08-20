import styled from "@emotion/styled";

export const Friend = styled.ul`
            display: block;
            margin: 0px auto;
            padding: 0px;
            width: 35%;
            min-width: 500px;
            list-style: "→";
            
            font-size: 24px;
            color: black;
            font-weight: bold;
            &:hover,
            &:focus {
                color: tomato;
            }
        
 
`; 
export const Item = styled.li`
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            padding: 10px 15px;
            background-color: rgb(255, 255, 255);
            border-radius: 5px;
            box-shadow: rgb(128 128 128) 0px 5px 10px;
            margin-bottom: 10px;
            margin-left:auto;



`;