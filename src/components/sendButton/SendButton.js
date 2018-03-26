/**
 * Created by Алексей on 20.03.2018.
 */

import React from 'react';
import styled from 'styled-components';

const FormSendButton = styled.button`
    background-color: white;
    color: black; 
    border: 2px solid #008CBA;
    padding: 7px 17px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
    
    &:hover {
      background-color: #008CBA;
      color: white;
    }
`;

const SendButton = () => (
    <div>
      <FormSendButton>Sent question</FormSendButton>
    </div>
);

export default SendButton;
