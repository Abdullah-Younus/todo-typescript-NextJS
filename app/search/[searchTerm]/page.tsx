import React from 'react';
type PageProps = {
    params: {
        searchTerm: string
    };
};

const search = async (searchTerm: string) => {
    
}


async function SearchResults({ params: { searchTerm } }: PageProps) {
    const searchResults = await search(searchTerm)
    return (
        <div>SearchResults</div>
    )
}

export default SearchResults;