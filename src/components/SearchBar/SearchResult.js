import React from 'react'
import SearchResultTitle from './SearchResultTitle'
import SearchResultItem from './SearchResultItem'

function SearchResult( { title, data } ) {
  if (!data) {
    return <></>
  }

  return (
    <div className="cursor-pointer">
      <SearchResultTitle title={title ? title : "Information"} />
      {
        data?.map((info, id) => {
          return (
            <SearchResultItem key={id} title={info.name} extraInfo={info.extraInfo} />
          )
        })
      }
    </div>
  )
}

export default SearchResult
