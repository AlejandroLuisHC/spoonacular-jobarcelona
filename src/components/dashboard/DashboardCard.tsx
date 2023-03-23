import { FC } from 'react'
import { IDashboardCardProps } from '../../helper/interfaces/dashboard'
import { StyledCard } from '../../style/components/dashboard'
import { generateRandomColor } from '../../helper/utils'

const DashboardCard: FC<IDashboardCardProps> = ({ type }) => {
    return (
        <StyledCard to={`./recipes/${type}`} color={generateRandomColor()}>
            <h2>{type}</h2>
        </StyledCard>
    )
}

export default DashboardCard

