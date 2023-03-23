import { FC } from 'react'
import { DashboardCardProps } from '../../helper/interfaces/dashboard'
import { StyledCard } from '../../style/components/dashboard'

const colors = ['#FF6B6B', '#FEB144', '#48BB78', '#4299E1', '#9F7AEA', '#ED64A6'];

const DashboardCard: FC<DashboardCardProps> = ({ type }) => {
    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
        <StyledCard to={`./recipes/${type}`} color={color}>
            <h2>{type}</h2>
        </StyledCard>
    )
}

export default DashboardCard

