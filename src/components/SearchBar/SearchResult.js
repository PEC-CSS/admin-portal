import React from 'react'
import SearchResultTitle from './SearchResultTitle'
import SearchResultItem from './SearchResultItem'
import { useRouter } from 'next/router'

function SearchResult( { title, data, email } ) {
  const router = useRouter();

  if (!data) {
    return <></>
  }

  return (
    <>
      <SearchResultTitle title={title ? title : "Information"} />
      {
        data?.map((info, id) => {
          return (
            <SearchResultItem key={id} title={info.name} extraInfo={info.extraInfo} onClick={() => router.push(`/user/${info.extraInfo[0]}`)} />
          )
        })
      }
    </>
  )
}

export default SearchResult
