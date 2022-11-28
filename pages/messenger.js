
import { useState } from 'react';
import { BsMessenger } from 'react-icons/bs';
const messenger = () => {
  let [open,setOpen] = useState(false);
  let handleOpen = ()=>{
    setOpen(!open);
  }
  return (
    <div className='messanger'>
        <div className='mess'>
            <div className='messanger_background_part'>
                <BsMessenger onClick={handleOpen} className='text-white'/>
            </div>
            {/* asdfsdfas */}
            {open && 
            <div  className='model' onClick={()=>setOpen(false)}>
               <div>
                  <div className='mes_img'>
                    <div></div>
                    <div></div>
                  </div>
               </div>
            </div>
            }
            {/* asdfsdfas */}
        </div>
    </div>
  )
}

export default messenger