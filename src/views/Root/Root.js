import React from 'react';
import style from './Root.module.css';
import { Typedy } from '../../components'


function Root() {
    const xStrings = ['Você sabe para que você quer dinheiro?', 'Você sabe o quanto você precisa para conquistar suas metas?'];
    return (
        <div className={style.root}>
            <h1>React Lib</h1>
            <Typedy strings={xStrings}/>
        </div>
    );
}

export default Root;
