import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Piece']);

    // const handleAdd = () => {
    // //   setcategories( [ 'Naruto', ...categories ] );
    //     setcategories( cats => [ ...cats, 'Naruto' ] );
    // }

    return (
    <>
        <h2>Gif Expert App</h2>
        <AddCategory setCategories= { setcategories } />
        <hr />

        <ol>
            {
                categories.map( category => (
                    <GifGrid
                    key={ category }
                    category= { category }
                    />
                ))
            }
        </ol>
    </>
    )
}
