import React, { useEffect } from 'react'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import DarkMode from '@/DarkMode'

import {
  Sheet,
  SheetClose,
  SheetContent,

  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Menu, School } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useLogoutUserMutation } from '@/features/api/authApi'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const { user } = useSelector(store => store.auth);
  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await logoutUser();
  }
  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message || " User LogOut")
      navigate("/login")
    }
  }, [isSuccess])
  console.log(user)
  return (
    <div className='h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10'>
      {/*desktop*/}
      <div className='max-w-7xl mx-auto hidden md:flex justify-between items-center  h-full'>
        <div className='flex items-center gap-2'>
          <School size={"30"} />
          <h1 className='hidden md:block font-extrabold text-2xl'>E-learning</h1>
        </div>
        {/* user icons and dark mode icon */}
        <div className="flex item-center gap-5 mt-4">
          {
            user ? (
              <>
                {/* Container with border */}
                <DropdownMenu>
                  <div className='overflow-hidden object-cover rounded-full h-10 w-10 mb-2 '>
                    <DropdownMenuTrigger asChild>
                      <Avatar>
                        <AvatarImage src={user?.photoUrl || "https://github.com/shadcn.png"} alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                  </div>
                  <DropdownMenuContent
                    className="w-48 mt-2 border border-gray-300 rounded-lg shadow-lg bg-white focus:outline-none">
                    <DropdownMenuItem className='block px-4 py-2 text-gray-950  font-bold hover:bg-gray-300 rounded-t-lg'>
                      <Link>
                        My Account
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className='block px-4 py-1 text-gray-800 hover:bg-gray-300 rounded-t-lg'>
                      <Link to="Mylearning">
                        My learning
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className='block px-4 py-1  text-gray-800 hover:bg-gray-300 rounded-t-lg'>
                      <Link to="Profile"> Edit Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logoutHandler} asChild className='block px-4 py-1  text-gray-800 hover:bg-gray-300 rounded-t-lg'>
                      <Link> Log Out</Link>
                    </DropdownMenuItem>
                    {
                      user.role === "instructor" && (
                        <>
                          <DropdownMenuItem asChild className='block px-4 py-2 text-gray-800 hover:bg-gray-300 rounded-t-lg'>
                            <Link>Dashboard</Link>
                          </DropdownMenuItem>
                        </>
                      )
                    }
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div>
                <Button variant="outline" onClick={() => navigate("/login")}>Login</Button>
                <Button onClick={() => navigate("/login")}>SignUp</Button>
              </div>
            )
          }
          <DarkMode />
        </div>

      </div>
      {/* Mobile device */}
      <div className='flex md:hidden items-center justify-between px-4 h-full'>
        <h1 className='font-extrabold text-2xl'>E-learning</h1>
        <MobileNavbar />
      </div>
    </div >
  )
}
export default Navbar

const MobileNavbar = () => {
  const role = 'instructor';
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size='icon' classnname="rounded-full bg-gray-200 hover:bg-gray-200"  >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex-row">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <SheetTitle>E-learning</SheetTitle>
          <DarkMode />
        </SheetHeader>

        <nav className='flex flex-col space-y-4 mt-4 mb-4'>
          <span>My learning</span>
          <span>Edit Profile</span>
          <span>Log Out</span>
        </nav>
        {
          role === "instructor" && (
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Dashboard</Button>
              </SheetClose>
            </SheetFooter>
          )
        }

      </SheetContent>
    </Sheet>
  )
}


