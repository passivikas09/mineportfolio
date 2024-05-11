import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import apiservice from '../apiservice/apiservice';

export default function AdminModal(props){
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [name,setname]=useState()
    const [email,setemail]=useState()
    const [phone,setphone]=useState()
    const [msg,setmsg]=useState()
    
    useEffect(()=>{
      let data={
        _id:props.id
      }
      apiservice.contactSingle(data).then((res)=>{
        setemail(res.data.data.email)
        setmsg(res.data.data.message)
        setname(res.data.data.name)
        setphone(res.data.data.phone)
      }).catch(()=>{

      })
    },[])

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      subtitle.style.color = '#000000';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    return(
        <>
        <div>
      <button className='btn btn-primary' onClick={openModal}>view</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className='text-center' ref={(_subtitle) => (subtitle = _subtitle)}>{name}<span className='float-end' ><i className="bi bi-x-circle" onClick={closeModal}></i></span></h2>
        <form>
          <input value={email} className='form-control mb-2'  />
          <input value={phone}  className='form-control mb-2'  />
          <textarea value={msg} rows={5} className='form-control mb-2 '  />
        </form>
      </Modal>
    </div>
        </>
    )
}