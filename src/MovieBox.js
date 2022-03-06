import { Modal,Button} from 'react-bootstrap';
import React, {useState} from 'react';

const MovieBox =({movieReq})=>{

    
    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    
    return(
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
                    <div className="d-flex align-items-center"> 
              <img className="card-img-top" src={movieReq.show.image.original} alt={movieReq.show.image.original} />
                     </div>
              <h3 className="card-text">{movieReq.show.name}</h3>
    
              <div className="card-body">

                  <button  type="button" className="btn btn-success" onClick={handleShow} >View More</button>
                  <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <img className="card-img-top" style={{width:'14rem'}}src={movieReq.show.image.original} alt={movieReq.show.image.original}/>
                      <h3>{movieReq.show.name}</h3>
                      <h4>IMDb: {movieReq.show.rating.average}</h4>
                      <h5>Release Date: {movieReq.show.premiered}</h5>
                      <br></br>
                      <h6>Overview</h6>
                      <h6>{movieReq.show.summary.replace('<p>','').replace('</p>', '').replace('<b>','').replace('</b>', '')}</h6>
                      Link:<a href={movieReq.show.url}>{movieReq.show.url}</a>
                      </Modal.Body>
                      <Modal.Footer >
                          <Button variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                  </Modal>
              </div>
            </div>
        </div>
    )
}

export default MovieBox;