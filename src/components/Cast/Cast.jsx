import {ClasList} from "./CastStyle"

export const Cast=({item}) =>{
return(
    <>
       {item && (<div>
        {item.length > 0 && (
            <ClasList>
                {item.map(({id,profile_path,name,character}) =>{
                    return(
                        <li key={id}> <div>
                            {profile_path && (
                                <img src ={`https://image.tmdb.org/t/p/w300${profile_path}`} alt={name}/>
                            )}
                            <div>
                                <p>Name: {name}</p>
                                <p>Character: {character}</p>
                            </div>
                        </div>
                        </li>
                    )
                })}
            </ClasList>
        )}
       </div>)}
    </>
)
}