import {React, useState} from 'react'
import Child from './Child'


function Home () {

    const [modalOpen, setModalOpen] = useState(false);

    // const setModalOpenToTrue = () => {
    //     setModalOpen(true)
    // }

    // const setModalOpenToFalse =()=>{
    //     setModalOpen(false)
    // }

    const setModal = (isOpen) => {
        setModalOpen(isOpen)
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={()=>setModal(true)}>Click to View My Favourite Movies</button>
               
                {/* <Child isOpen={modalOpen} setModel={setModalOpenToFalse}/> */}
                <Child isOpen={modalOpen} setModel={setModal}/>
        </div>
    )
}

export default Home