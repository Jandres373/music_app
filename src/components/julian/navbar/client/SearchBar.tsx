'use client'

import Icon from '@/components/ui/icon'
import { Input } from '@/components/ui/input'
import React from 'react'

export const SearchBar = () => {
  return (
    <div className='relative flex items-center'>
      <Input className='bg-secondary border-none pl-10'></Input>
      <Icon iconName="search" color="white" className="absolute p-1  text-white" />
    </div>
  )
}
