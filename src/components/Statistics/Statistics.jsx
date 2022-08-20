import PropTypes from 'prop-types';
import {StatisticsSection,Title,StatsList,StatsListItem,Label,Percentage} from './Statistics.styled';

export default function Statistics ({title, stats}) {
    return <StatisticsSection>
    <Title>{title && title}</Title>
  
    <StatsList>
      {stats.map(element => ( 
      <StatsListItem
        id = {element.key}
        class="item">
        <Label>{element.label} </Label>
        <Percentage>{element.percentage}%</Percentage>
      </StatsListItem>))}
    </StatsList>
  </StatisticsSection>
}

Statistics.propTypes = {
    stats: PropTypes.array
}