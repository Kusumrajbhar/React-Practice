import React from 'react';
import Modal from 'react-modal';

function Child(props) {

    return (
        <>
        <Modal isOpen={props.isOpen}>
        <button onClick={(()=>props.setModel(false))}>x</button>
        <ul className='modalBox'>
                 <h1 className='movieList'>Haunted</h1>
                 <h1 className='movieList'>Roohi</h1>
                 <h1 className='movieList'>Bhoot</h1>
                 <h1 className='movieList'>Ghost Stroies</h1>
                 <h1 className='movieList'>Kanchana-1</h1>
                 <h1 className='movieList'>Kanchana-2</h1>
                 <h1 className='movieList'>Kanchana-3</h1>
                 <h1 className='movieList'>The Nun</h1>   
            </ul>   
            </Modal>  
        </>
    )
}


export default Child