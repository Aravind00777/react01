import classes from './Allmeetuplist.module.scss'
import Allmeetupcontent from './Allmeetupscontent'
function AllmeetupList(props) {
    return (
        <ul className={classes.meetuplist}>
        {props.meetups.map((meetup) => (
            <Allmeetupcontent
                key={meetup.id}
                id={meetup.id}
                image={meetup.image}
                title={meetup.title}
                description={meetup.description}
            />
        ))}
        </ul>
    )
}
export default AllmeetupList
