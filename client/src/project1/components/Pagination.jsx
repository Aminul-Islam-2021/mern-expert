import React from 'react'

const Pagination = () => {
  return (
    <div>
       <div className="space-x-2 my-3">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className="border p-2 w-24"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={endIndex >= value.length}
            className="border p-2 w-24"
          >
            Next
          </button>
        </div>
    </div>
  )
}

export default Pagination
