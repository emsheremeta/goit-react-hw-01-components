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
      <Title>{title}</Title>

      <StatsList>
        {stats.map(element => (
          <StatsListItem id={element.key} class="item">
            <Label>{element.label} </Label>
            <Percentage>{element.percentage}%</Percentage>
          </StatsListItem>
        ))}
      </StatsList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
