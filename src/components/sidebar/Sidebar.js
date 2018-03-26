/**
 * Created by Алексей on 23.03.2018.
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkText = styled.span`
    padding: 6px 8px 6px 8px;
    text-decoration: none;
    font-size: 12px;
    color: #818181;
    display: block;
`;
const SideNav = styled.div`
    height: 100%;
    width: 170px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 20px;
`;


class Sidebar extends Component {

    render() {
        return (
            <SideNav>
                <ul>
                    <li>
                        <Link to="/sent-application">
                            <LinkText>Sent application (user)</LinkText>
                        </Link>
                    </li>

                    <li>
                        <Link to="/change-user-data">
                            <LinkText>Change user data (admin)</LinkText>
                        </Link>
                    </li>

                    <li>
                        <Link to="/received-applications">
                            <LinkText>Received applications (admin)</LinkText>
                        </Link>
                    </li>
                </ul>
            </SideNav>
        );
    }
}

export default Sidebar;
