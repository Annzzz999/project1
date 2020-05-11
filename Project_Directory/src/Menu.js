import React, { Component } from 'react';
import './Menu.css'
import MainPage from './MainPage'

export default class Menu extends Component {
    render () {
        return(
            <div className = 'TopMenu'>

                <div>
                    <ul>
                        <li>Enemies 
                            <ul className = 'SubMenu'>
                            <li>Humans</li>
                            <li>Orcs</li>
                            <li>Goblins</li>
                            </ul>
                        </li>
                        <li>Weapons</li>
                        <li>Armor</li>
                    </ul>    
                </div>

                <div>
                    <MainPage></MainPage>
                </div>

            </div>
        )

    }


}