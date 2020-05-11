import React, { Component } from 'react';
import './MainPage.css'
import Object from './Object'

export default class MainPage extends Component {
    render () {
        return(
            <div>
                
                <div>
                    <h1 className = 'MainTitle'>заголовок раздела</h1>
                </div>

                <div>
                    <Object></Object>
                </div>
                


            </div>
        )

    }


}