'use client'

import { useState } from 'react'
import {
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import {
 ArrowPathIcon,
 ChartPieIcon,
 CursorArrowRaysIcon,
 FingerPrintIcon,
 SquaresPlusIcon,
 PlayCircleIcon,
 PhoneIcon,
 ChevronDownIcon,
} from '@heroicons/react/24/outline'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Example() {
  const [isPopoverOpen, ] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Functions to handle hover events
  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <header className="sticky ms-[200px] mt-3 bg-white dark:border-b-slate-700 dark:bg-background">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between lg:px-8">
        <Popover
          as="div"
          className="relative"
          onMouseEnter={handleMouseEnter} // Trigger hover when mouse enters
          onMouseLeave={handleMouseLeave} // Trigger hover end when mouse leaves
        >
          <PopoverButton
            className="flex focus:outline-none items-center gap-x-1 text-sm font-semibold"
          >
            Product
            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </PopoverButton>

          {/* Popover panel visibility logic */}
          {(isHovered || isPopoverOpen) && (
            <PopoverPanel
              className="absolute left-0 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
              onMouseEnter={handleMouseEnter} // Keep open if mouse is over the panel
              onMouseLeave={handleMouseLeave} // Hide if mouse leaves the panel
            >
              <div className="p-4">
                {products.map((item) => (
                  <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 font-bold text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          )}
        </Popover>
      </nav>
    </header>
  )
}
