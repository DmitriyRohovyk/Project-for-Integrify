import React, { FC } from 'react';
import * as Styled from './styles';

type Props = {
    setSearchValue: (value: string) => void;
    value: string;
};
export const Input: FC<Props> = ({ value, setSearchValue }) => {

 return(
    <Styled.InputArea>
       <input
            type="text"
            placeholder='Search By Country'
            value={value}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    </Styled.InputArea>
 )
}