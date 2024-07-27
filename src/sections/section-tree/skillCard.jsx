import './skillCard.scss'
import PropTypes from 'prop-types'

const skillCard = ({ name, icon }) => {
  return (
    
    <div className="skills-card">
      
      <div className="skill-card-container">
       <div className="skill-card-icon">
       <img src={`${icon}`} alt={`${name} screenshot`} className="skills-image" />

       </div> 
        <div className="skill-card-name">{name}</div>
        
      </div>
    </div>
  )
}
skillCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default skillCard
