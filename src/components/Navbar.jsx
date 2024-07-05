import { useState } from 'react'
import images from '../constants/image'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'



function Navbar() {

    const [dropDownStates, setDropDownStates] = useState([false, false, false]);

    const handleDropdown = (index) => {
        setDropDownStates((prevState) =>
            prevState.map((isOpen, i) => (i === index ? !isOpen: false))
        );

        console.log(index);
    };

    const Bundles = [
        {
            name: 'The Hall of Gems',
            options: ['Mana Bundle', 'Money Bundle', 'Golden Bunlde', 'Bars Bundle', 'Gems Bundle', 'Nel`Vari Mines Bundle', 'Withergate Mines Bundle'],
        },
        {
            name: 'The Hall of Culture',
            options: ['Spring Crops Bundle', 'Summer Crops Bundle', 'Fall Crops Bunlde', 'Winter Crops Bundle', 'Nel`Vari Crops Bundle', 'Withergate Crops Bundle', 'Flowers Bundle', 'Foraging Bundle', 'Exploration Bundle', 'Alchemy Bundle', 'Combat Bundle', 'Nel`Vari Temple Bundle'],
        },
        {
            name: 'Aquarium',
            options: ['Fishing Bundle', 'Srping Tank', 'Summer Tank', 'Fall Tank', 'Winter Tank', 'Nel`Vari Tank', 'Withergate Tank', 'Large Tank'],
        },

    ]

  return (
    <div className='flex h-[60px] bg-primary text-secondary '>
        <div className='w-full py-1 px-[200px] flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <img className='h-12 w-12' src={images.logo} alt='Sun Haven Logo' />
                <p className='font-semibold'>Museum Companion</p>
            </div>
            <div className='flex gap-5' id='navbarlink'>
                {/* This is The Hall of Gems Section */}
                    {Bundles.map((bundle, index) => (
                        <div className='relative flex items-center gap-8 cursor-pointer' key={index} >
                            <p className='flex items-center hover:scale-110' onClick={()=> handleDropdown(index)}>{bundle.name}</p>

                            { dropDownStates[index] && (
                                <div className='absolute top-8 text-primary bg-secondary min-w-[100px] rounded-sm py-2 z-20'>
                                    {bundle.options.map((option, optIndex) => (
                                        <a href="#"
                                        key={optIndex}
                                        className="block w-full px-4 py-2 text-xs text-primary hover:text-secondary hover:bg-primary ">
                                            {option}
                                        </a>
                                        
                                    ))}
                                
                                </div>
                                
                            )}
                        </div>
                    ))}


            </div>
        </div>
    </div>
  )
}

export default Navbar