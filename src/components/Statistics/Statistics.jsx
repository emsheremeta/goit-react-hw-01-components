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
          <StatsListItem key={element.id} id={element.key} className="item">
            <Label>{element.label} </Label>
            <Percentage>{element.percentage}%</Percentage>
          </StatsListItem>
        ))}
      </StatsList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};