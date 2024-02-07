import { Dialog } from '@mui/material'
import React from 'react'

function SearchBarDialog({ open, onClose }) {
  return (
    <Dialog
      fullWidth={true}
      maxWidth={'md'}
      open={open}
      sx={{ padding: "0", margin: "0", backdropFilter: "blur(5px)" }}
      PaperProps={{ sx: { borderRadius: "10px" } }}
      onClose={onClose}
    >
      <div className='p-8'>
        Hewwo, I am your cute search bar! Use me later
        <br />
        Do all api calls here onlyy {`>__<`}
      </div>
    </Dialog>
  )
}

export default SearchBarDialog