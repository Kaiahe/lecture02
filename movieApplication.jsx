
//importer greiene for at det skal funke

const MOVIES = [
    {
        title: "Dont look up",
        plot: "Impending disaster, but will politicians act?",
        year: 2021
    },
    {
        title: "Mulan",
        plot: "Go women",
        year: 2008
    }
]

function MovieCard({movie}) {
    const {title, plot, year} = movie;
    return <div>
        <h1>{title} ({year})</h1>
        <p>{plot}</p>
    </div>;

}

export function ListMovies() {
    return <div>
        <h1>Movies</h1>
        {MOVIES.map(movie => <MovieCard key={movie.title} movie={movie}/>)}
    </div>
}

function CreateMovies() {
    const [title, setTitle] = useState(""); //Lese tilstand, og sette tilstand
    const [year, setYear] = useState("");
    const [plot, setPlot] = useState("");

    const [newMovie, setNewMovie] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        setNewMovie({title, year, plot});
    }, [title, year, plot]);


    function handleSubmit(event){
        event.preventDefault();
        MOVIES.push(newMovie);
        navigate("..");
    }

    return <form onSubmit={handleSubmit}>
        <h1>Create new movie</h1>
        <div>
            Title:
            <input value={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <div>
            Year:
            <input value={year} onChange={e => setYear(e.target.value)}/>
        </div>
        <div>
            <div>Plot:</div>
            <textarea value={plot} onChange={e => setPlot(e.target.value)}/>
        </div>
        <button>Save</button>
        <pre>
            {JSON.stringify([newMovie])}
        </pre>
    </form> ;
}

export function MovieApplication(){
    return <Routes>
        <Route path={"/"} element={<ListMovies/>}/>
        <Route path={"/new"} element={<CreateMovies/>}/>
        <Route path={"*"} element={<h1>Movie not found</h1>}/>

    </Routes>
}