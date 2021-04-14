import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 

function AddModal({isOpen, closeModal, addMovie}){


  const [title, setTitle] = useState('')

  const [year, setYear] = useState(null)

  const [category, setCategory] = useState('')

  const [rating, setRating] = useState(0)

  const [image, setImage] = useState('')



  return (
    <div>
      <Modal
        isOpen={isOpen}

        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={(e) => {
          e.preventDefault();
          addMovie({title, year, category, image, rating})

        }}>
          <div class="mb-3">
            <label class="form-label">Title</label>
            <input type="text" class="form-control" onChange= {(e) => {setTitle(e.target.value)} } id="exampleInputEmail1"/>
          </div>

          <div class="mb-3">
            <label class="form-label">Year</label>
            <input type="number" min="1900" max="2021" class="form-control" onChange= {(e) => {setYear(e.target.value)} } id="exampleInputEmail1"/>
          </div>

          <div class="mb-3">
            <label class="form-label">Rating</label>
            <input type="number" min="1" max="5" class="form-control" onChange= {(e) => {setRating(e.target.value)} } id="exampleInputPassword1"/>
          </div>

          <div class="mb-3">
            <label class="form-label">Category</label>
            <input type="text" class="form-control" onChange= {(e) => {setCategory(e.target.value)} } id="exampleCheck1"/>
          </div>

          <div class="mb-3">
            <label class="form-label">Image URL</label>
            <input type="text" class="form-control" onChange= {(e) => {setImage(e.target.value)} }id="exampleCheck1"/>
          </div>

          <button  style={{marginBottom: "10px"}} type="submit" class="btn btn-primary">Submit</button>
        </form>

        <button style={{marginBottom: "10px"}} class="btn btn-primary" onClick={closeModal}>close</button>

      </Modal>
    </div>
  );
}
 
export default AddModal;