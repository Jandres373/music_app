import {Poppins} from 'next/font/google'

const pop_title = Poppins({weight:"800", subsets: ["latin"]})
const pop_subtitle = Poppins({weight:"700", subsets: ["latin"]})
const pop_regular = Poppins({weight:"500", subsets: ["latin"]})
const pop_thin = Poppins({weight:"400", subsets: ["latin"]})

export const poppins = {
  title: pop_title,
  subtitle: pop_subtitle,
  regular: pop_regular,
  thin: pop_thin
}