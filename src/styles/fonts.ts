import { Poppins } from 'next/font/google'

//?  Poppins 
const poppinsThin = Poppins({ subsets: ['latin'], weight: '400' })
const poppinsRegular = Poppins({ subsets: ['latin'], weight: '500' })
const poppinsBold = Poppins({ subsets: ['latin'], weight: '600' })
const poppinsExtraBold = Poppins({ subsets: ['latin'], weight: '800' }) 

export const poppins = {
  thin: poppinsThin,
  regular: poppinsRegular,
  subtitle: poppinsBold,
  title: poppinsExtraBold
}

