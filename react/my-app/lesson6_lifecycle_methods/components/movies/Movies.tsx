import { useEffect, useState } from "react";

const Movies = () => {
    const [movies, setMovies] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    // const [counter, setCounter] = useState<number>(0);
    // const [likes, setLikes] = useState<number>(0);

    // useEffect(() => {
    //     console.log('Did Mount');

    //     return () => {
    //         console.log('will unmount');
    //     }
    // }, []);

    useEffect(() => {
        getMovies();
        // try {    
        //     const responseData = getMovies();
        // } catch(e) {
        //     console.log(e);
        // }
    }, []);

    const createMovies = (movie: any) => {
        setMovies([...movies, movie]);
    };

    const getMovies = async () => {
        const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=ab1f95bf';

        try {
            setLoading(true);

            const response = await fetch(url, {
                method: 'GET'
            });
            
            const data = await response.json();
            console.log(data);
            
            setMovies([data]);

            return data;
        } catch(e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    // useEffect(() => {
    //     console.log('Did Update');
    // });

    // useEffect(() => {
    //     console.log('Did Counter Updated');
    // }, [counter]);

    // useEffect(() => {
    //     setCounter(counter + 1);
    // });

    useEffect(() => {
        try {
            fetch('url', {
                method: 'POST',
                body: JSON.stringify(movies)
            })
        } catch(e) {
            console.log(e);           
        }
    }, [movies]);

    console.log('render');

    return (
        <div>
            {loading ?
                <div>Loading...</div>
                :
                <ul>
                    {!!movies.length ? movies.map((movie: any) => {
                        return <li>
                            {movie.Title}
                        </li>
                    })
                        :
                        <h1>No data</h1>
                    }
                </ul>
            }
        </div>
    )
    // return (
    //     <div>
    //         Movies Page
    //         <h1>Counter: <span>{counter}</span></h1>
    //         <button onClick={() => setCounter(counter + 1)}>Add Count</button>
    //         <button onClick={() => setLikes(likes + 1)}>Add Like</button>
    //     </div>
    // )
};

export default Movies;