import React, { useCallback, useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { MdKeyboardCommandKey } from "react-icons/md";
import SearchBarDialog from './SearchBarDialog';

function SearchBarWithDialog() {
  const [open, setOpen] = useState(false);
  const openModal = () => { setOpen(true); }
  const closeModal = () => { setOpen(false); }

  const handleKeyPress = useCallback((event) => {
    if ((event.ctrlKey === true || event.metaKey === true) && event.key === 'k') {
      event.preventDefault();
      openModal();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <>
      <button onClick={openModal}>
        <div className={
          `w-[350px] h-[40px] bg-[#EBE9F1] p-[6px]
        border-[1px] border-[#0070c9] 
        hover:shadow-[0px_0px_0px_3px_rgba(131,192,253,.5)]
        hover:bg-slate-300
        rounded-[4px]
        flex text-sm
        justify-between`}
        >
          <div className='flex justify-center align-middle'>
            <IoSearch className='self-center mr-2 mb-[4px] ml-1 text-[16px] font-extrabold' />
            <p>Quick Search ...</p>
          </div>
          <p className='mr-2 flex'>
            <b>Ctrl</b> &nbsp;K /&nbsp;
            <MdKeyboardCommandKey className='self-center mb-[4px] text-[16px]' /> &nbsp;K
          </p>
        </div>
      </button>
      
      <SearchBarDialog open={open} onClose={closeModal} />
    </>
  )
}

export default SearchBarWithDialog