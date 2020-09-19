import React, { useContext } from 'react'
import cx from 'classnames'
import { AppContext } from '../contexts'
import { FILTER } from '../constants'

export default function Filters() {
  const [{ filter }, { setFilter }] = useContext(AppContext)
  return (
    <div className="filters">
      {Object.keys(FILTER).map(key =>
        <span
          key={`visibility-filter-${FILTER[key]}`}
          className={cx(
            'filter',
            FILTER[key] === filter && 'filter--active'
          )}
          onClick={() => setFilter(FILTER[key])}
        >
          {FILTER[key]}
        </span>
      )}
    </div>
  )
}
