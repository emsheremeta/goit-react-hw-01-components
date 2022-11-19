import PropTypes from 'prop-types';
import {
  StatisticsSection,
  Title,
  StatsList,
  StatsListItem,
  Label,
  Percentage,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsListItem key={id} className="item">
            <Label>{label} </Label>
            <Percentage>{percentage}%</Percentage>
          </StatsListItem>
        ))}
      </StatsList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
