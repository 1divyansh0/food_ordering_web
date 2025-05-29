import { TiThSmallOutline } from "react-icons/ti";
import { MdBreakfastDining } from "react-icons/md";
import { MdSoupKitchen } from "react-icons/md";
import { MdOutlineDinnerDining } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa6";
import { GiCoffeeCup } from "react-icons/gi";
import { FaBurger } from "react-icons/fa6";
import { CiBowlNoodles } from "react-icons/ci";
const categories = [
    { id: 1,
      name: 'All',
      icon: <TiThSmallOutline className="w-25 h-25 md:h-15 md:w-15 text-green-500"/>

    },
    { id: 2,
      name: 'breakfast',
      icon: <MdBreakfastDining className="w-25 h-25 md:h-15 md:w-15 text-green-500"/>


    },
  
    { id: 4,
      name: 'main_course',
      icon: <MdOutlineDinnerDining className="w-25 h-25 md:h-15 md:w-15 text-green-500"/>

    },
    { id: 5,
      name: 'pizza',
      icon: <FaPizzaSlice className="w-25 h-25 md:h-15 md:w-15 text-green-500"/>

    },
    { id: 6,
      name: 'pasta',
      icon: <CiBowlNoodles className="w-25 h-25 md:h-15 md:w-15 text-green-500"/>


    },
    { id: 7,
      name: 'burger',
      icon: <FaBurger className="w-25 h-25 md:h-15 md:w-15 text-green-500"/>

    },



]

export default categories