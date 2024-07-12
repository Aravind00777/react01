
import AllmeetupList from "../components/meetupscontent/AllmeetupList"

const DUMMY_DATA = [{
  id:"m1",
  image:"https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg ",
  title:"First meetsups",
  description:'This is a paragraph loaded'

  },
  {
    id:"m2",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjrCdY7vbLNb3uuqCixRviazh7zdc0yUSB3Ou2w27iCQRKN6T1ylCGuCs1YXkTOQBTjzM&usqp=CAU",
    title:"second meetsups",
    description:'This is a paragraph loaded now',
  
    }]
function Allmeetuppage() {
  return (
    <section className="allmeetsup">
        <div className="container">
        <h1>All pages are loaded</h1>
            <AllmeetupList  meetups={ DUMMY_DATA}/>
        </div>
        
    </section>
  )
}
export default Allmeetuppage
