import React from 'react'
import SearchResultTitle from './SearchResultTitle'
import SearchResultItem from './SearchResultItem'

function SearchResult( { title, data } ) {
  if (!data) {
    return <></>
  }

  return (
    <>
      <SearchResultTitle title={title ? title : "Information"} />
      {
        data?.map((info, id) => {
          return (
            <SearchResultItem key={id} title={info.name} extraInfo={info.extraInfo} />
          )
        })
      }
    </>
  )
}

export default SearchResult
