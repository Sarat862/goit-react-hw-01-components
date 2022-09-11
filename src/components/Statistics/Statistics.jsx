import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export function Statistics({ title, stats }) {
    const elements = stats.map(({ id, label, percentage }) =>
        <li className={css.item} key={id} style={{backgroundColor: generateHEX()}}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>)
    
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.statList}>
                {elements}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })).isRequired
}

function generateHEX() {
  const chart = '0123456789ABCDEF';
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex += chart[Math.floor(Math.random() * 16)];
  }
  return hex;
}