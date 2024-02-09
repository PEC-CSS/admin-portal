import React from 'react'
import { FiLogOut } from "react-icons/fi";

// Middle Component is SearchBarWithDropdown.
function Navbar( { MiddleComponent } ) {
  return (
    <div className='bg-[#d9d9d9] p-2'>
        <div className='flex items-center pl-3 justify-between'>
            <img src="/assets/acm.png" width={80} height={80} />
            <div>
            {MiddleComponent} 
            </div>
            <button className="acm-button">
                <div className='flex'>
                    Logout
                    <FiLogOut className='pl-2 h-8 w-8' />
                </div>
            </button>
        </div>
    </div>
  )
}

export default Navbar;