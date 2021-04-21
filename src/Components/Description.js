import {React} from 'react';
import {useHistory} from 'react-router-dom';
import ReactPlayer from 'react-player';


function Description (props){
   
    const movieItem = props.movies.filter((movie) => movie.year === props.match.params.year)[0]; 
    
    const history = useHistory();
    
    return (
        <div>
             <h4 style={{marginBottom: "30px", marginTop: "60px", textAlign: "center", color: "#063970"}}>Know More About : "{movieItem.title}"</h4>
             <h6 style={{color: "#1e81b0", marginBottom: "10px"}}> Release Date : {movieItem.year} </h6>
             <h6 style={{color: "#1e81b0", marginBottom: "10px"}}> Story : {movieItem.description} </h6>
             <h6 style={{color: "#1e81b0", marginBottom: "30px"}}> Category : {movieItem.category} </h6>

             <iframe style={{marginBottom: "30px"}} width="560" height="315" src={movieItem.video} title={movieItem.title} frameborder="0" allow="autoplay" allowfullscreen></iframe>

            <button style={{display: "flex", marginLeft: "50px", marginBottom: "50px"}} onClick={()=> history.push('/')}>Go Home</button>
        </div>
    );

}


export default Description









