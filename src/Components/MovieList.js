import React , {useState}  from 'react'
import Card from './Card';
import data from '../moviesData';
import AddModal from './AddModal';


const MovieList = () =>{

    const [isOpen, setIsOpen] = useState(false)
    const [movies, setMovies] = useState(data)

    const [inputFilter, setInputFilter] = useState("")
    const [ratingFilter, setRating] = useState(0)

    const closeModal= () => setIsOpen(false)

    const addMovie = (newMovie) => setMovies([...movies, newMovie])

    const filteredList = movies.filter (el =>  ratingFilter !==0 ? el.title.toLowerCase().includes(inputFilter.toLowerCase()) && el.rating == ratingFilter : el.title.toLowerCase().includes(inputFilter.toLowerCase()) )

    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <form class="d-flex">
                        <input class="form-control me-2" onChange= {(e)=> setInputFilter(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-primary" type="submit">Search</button> 
                    </form>

                    <div>
                        <button class="btn btn-primary" style={{marginRight: "40px"}} onClick= {()=> setIsOpen(true)}>Add Movie</button>

                    {[1,2,3,4,5].map(el =><i key= {el} style={{color: el <= ratingFilter ? "red" : "black",  cursor: "pointer" }} onClick= {(e)=> ratingFilter == el ? setRating(el-1)  :   setRating(el)} class="fas fa-star"></i>)}
                    </div>

                </div>

            </nav>

                <AddModal isOpen={isOpen} closeModal={closeModal} addMovie={addMovie}/>
                 
                <div style={{display: "flex" ,flexWrap:"wrap", justifyContent: "space-around"}}>
                    { filteredList.map((el,i)=>(
                    <Card key={i} movie={el}/>))
                    }  
                </div>
            
        </div>
        
    )
}

export default MovieList;
