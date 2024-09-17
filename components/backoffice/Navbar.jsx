import Image from 'next/image'
import React from 'react'
Import {
  DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from “@/components/ui/dropdown-menu”



export default function Navbar() {
  return (<div classNameName='flex items-center justify-between
     bg-slate-800 text-slate-50 h-20 py-8 fixed top-0 w-full ml-60 px-8 pr-[20rem]'>
    {/*Icon */}
    <button><menu></button>
    {/* 3 Icons */}
    <div classNameName="flex space-x-3 text-green-600">
      <button ><Sun className="text-green-600" /></button>
      <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center
             text-white bg-transparent ">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Bell className="text-green-600" />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 
  text-xs font-bold text-white bg-red-500 border-2 
  rounded-full -top-0 end-6 dark:border-gray-900">20</div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="px-4 py-2 pr-8">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <div className="flex items-center space-x-">
              <Image src={'/image.JPG'} alt="user profile" width={200}
                height={200} className="w-8 h-8 rounded-full" />
              <div className="flex flex-col space-y-1">
                <p>yellow sweet corn stock out</p>
                <div className="flex item-ceter space-x-2">
                  <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm">stock out</p>
                  <p>dec 12 2021-12:40pm</p>
                </div>
                <button>
                  <x />
                </button>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex items-center space-x-">
              <Image src={'/image.JPG'} alt="user profile" width={200}
                height={200} className="w-8 h-8 rounded-full" />
              <div className="flex flex-col space-y-1">
                <p>yellow sweet corn stock out</p>
                <div className="flex item-ceter space-x-2">
                  <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm">stock out</p>
                  <p>dec 12 2021-12:40pm</p>
                </div>
                <button>
                  <x />
                </button>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex items-center space-x-">
              <Image src={'/image.JPG'} alt="user profile" width={200}
                height={200} className="w-8 h-8 rounded-full" />
              <div className="flex flex-col space-y-1">
                <p>yellow sweet corn stock out</p>
                <div className="flex item-ceter space-x-2">
                  <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm">stock out</p>
                  <p>dec 12 2021-12:40pm</p>
                </div>
                <button>
                  <x />
                </button>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

        </DropdownMenuContent>
      </DropdownMenu>






      <DropdownMenu>
        <DropdownMenuTrigger>
          <button>
            <Image src={'/image.JPG'} alt="user profile" width={200} height={200} className="w-8 h-8 rounded-full" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="px-4 py-2 pr-8">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <button className="flex items-center space-x-">
              <layoutDashboard className="mr-2 h-4 w-4" />
              <span>dashboard</span>
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button className="flex items-center space-x-">
              <setting className="mr-2 h-4 w-4" />
              <span>Edit profile</span>
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button className="flex items-center space-x-2">
              <logout className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </button>
          </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>


    </div>
  </div>

  )
}