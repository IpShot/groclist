import React from 'react'
import AddEntry from '../components/AddEntry'
import EntriesList from '../components/EntriesList'
import Filters from '../components/Filters'

export default function ListPage() {
  return (
    <>
      <h1>Groclist</h1>
      <AddEntry />
      <Filters />
      <EntriesList />
    </>
  )
}
