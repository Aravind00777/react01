// import { useHistory } from 'react-router-dom';
import Forms from "../components/meetupscontent/Forms";


function Newmeets(){
    // const history = useHistory();
    function onAddmeetupHandler(enteredDate) {
        fetch(
            'https://form-data-5a820-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST', 
                body: JSON.stringify(enteredDate),
                headers:{
                    'Content-Type':'application/json'
                }
            }
        );
        // .then(() => {
        //     history.replace('/');
        // })
    }
    return (
        <div className="container">
        <h2>New meetups</h2>
        <Forms onAddmeetup={onAddmeetupHandler}></Forms>
        </div>
    );

}
export default Newmeets;