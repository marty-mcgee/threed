import Instructions from 'src/components/dom/Instructions'
import dynamic from 'next/dynamic'

const Box = dynamic(() => import('src/components/canvas/Box'), {
  ssr: false,
})

// Step 5 - delete Instructions components
const Page = (props) => {
  return (
    <>
      <Instructions />
    </>
  )
}

Page.r3f = (props) => (
  <>
    <Box route='/' />
  </>
)

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Box',
    },
  }
}
