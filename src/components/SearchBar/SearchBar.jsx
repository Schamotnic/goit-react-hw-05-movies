import { useState } from "react";
import {ImSearch} from 'react-icons/im';
import {SearchForm,InputForm,ButtonForm} from "./SearchBarStyle";
import PropTypes from 'prop-types';


export const SearchBar =({onSubmit}) =>{
const [searchQuery, setSearchQuery] = useState('');

const handleQueryChange = (e) =>{
    setSearchQuery(e.currentTarget.value.toLowerCase()); 
   }
    
   const handelSubmit = (e) =>{
        e.preventDefault()
        if(searchQuery.trim() === '')
        return
        onSubmit(searchQuery)
        setSearchQuery('')
    }

return (
    <>
        <SearchForm onSubmit={handelSubmit}>
            <InputForm
                name ='query'
                type ="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                onChange={handleQueryChange}
            />
            <ButtonForm type='submit'>Search<ImSearch/></ButtonForm>
        </SearchForm>
    </>
)
};
SearchBar.propTypes ={
    onSubmit:PropTypes.func.isRequired 
}





