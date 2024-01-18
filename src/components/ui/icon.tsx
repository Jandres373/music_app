import React from 'react'
import { Badge } from './badge'
import Link from 'next/link'

type BoxIconType = 'regular' | 'solid' | 'logo'
type BoxIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'cssSize'
type BoxIconRotate = 90 | 180 | 270
type BoxIconFlip = 'horizontal' | 'vertical'
type BoxIconBorder = 'square' | 'circle'
type BoxIconAnimation = 'spin' | 'tada'
type BoxIconPull = 'left' | 'right'

interface BoxIconProps {
  type?: BoxIconType
  name: string
  color?: string
  size?: BoxIconSize
  rotate?: BoxIconRotate
  flip?: BoxIconFlip
  border?: BoxIconBorder
  animation?: BoxIconAnimation
  pull?: BoxIconPull
  hasBadge?: boolean
}

const Icon: React.FC<BoxIconProps> = ({
  type,
  name,
  color,
  size,
  rotate,
  flip,
  border,
  animation,
  pull,
  hasBadge,
}) => {
  const props: BoxIconProps = {
    type,
    name,
    color,
    size,
    rotate,
    flip,
    border,
    animation,
    pull,
  }

  return (
    <div className='relative'>
      <box-icon {...props}></box-icon>
      {hasBadge && (
        <Badge className='absolute bottom-0 left-4'  color="white" variant={'secondary'}>
          5
        </Badge>
      )}
    </div>
  )
}

export default Icon
