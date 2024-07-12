import {useRef} from 'react';
import Card from "../Ui/Card";
import styles from './forms.module.scss';
function Forms(props) {

    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const emailInputRef = useRef();
    const numberInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const firstName = firstNameInputRef.current.value;
        const lastName = lastNameInputRef.current.value;
        const email = emailInputRef.current.value;
        const number = numberInputRef.current.value;
        
        const enteredDate ={
            firstName:firstName,
            lastName:lastName,
            email:email,
            number:number,
        };
        
        props.onAddmeetup(enteredDate);
        
    }
return <div className={styles.cardborder}>
    <Card>
    <form className={styles.forms} onSubmit={submitHandler}>
        <div className={styles.control}>
            <label htmlFor="name" className={styles.label}>First name</label>
            <input type="text" className={styles.input} ref={firstNameInputRef}></input>
            <label htmlFor="name" className={styles.label}>Last name</label>
            <input type="text" className={styles.input} ref={lastNameInputRef}></input>
            <label htmlFor="name" className={styles.label}>Email</label>
            <input type="email" className={styles.input} ref={emailInputRef}></input>
            <label htmlFor="name" className={styles.label}>mobile number</label>
            <input type="number" className={styles.input} ref={numberInputRef}></input>
            <button className={styles.submits}>submit</button>
        </div>
    </form>
</Card>
</div>
}
export default Forms;