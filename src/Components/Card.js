import React from 'react';
import {Link} from 'react-router-dom';


const Card = ({movie}) => {
    return (
        <div style={{width : "200px" , height : "400px", marginTop: "100px"}}>
            <div class="card">
            <img src={movie.image} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h6 class="card-title">{movie.title} ({movie.year})</h6>
                <p class="card-text" style={{fontSize: "15px"}}>{movie.description}</p>

                <div>
                {[1,2,3,4,5].map (el => (
                    el<= movie.rating ?
                    <i key={el} style={{color:"red"}} class="fas fa-star"></i> : <i key={el} class="fas fa-star"></i>))
                }
                </div>

                <Link to={`/Description/${movie.year}`} class="btn btn-primary">Description</Link>
                
            </div>
            </div>
        </div>
    )
}

export default Card;
 