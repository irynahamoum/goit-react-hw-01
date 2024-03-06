import PropTypes from 'prop-types';
import css from './profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.profileInfo}>
        <img className={css.avatar} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.details}>@{tag}</p>
        <p className={css.details}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.stats}>
          <span>Followers</span>
          <span className={css.statsNumber}>{stats.followers}</span>
        </li>
        <li className={css.stats}>
          <span>Views</span>
          <span className={css.statsNumber}>{stats.views}</span>
        </li>
        <li className={css.stats}>
          <span>Likes</span>
          <span className={css.statsNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
