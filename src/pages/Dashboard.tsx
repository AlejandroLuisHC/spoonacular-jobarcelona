import { FC } from 'react';
import { StyledDashboard } from '../style/components/dashboard';
import DashboardCard from '../components/dashboard/DashboardCard';

const Dashboard: FC = () => {
    const recipeTypes = ['pasta', 'cereals', 'meat', 'salad', 'vegetarian', 'vegan', 'seafood', 'dessert'];
    
    return (
        <StyledDashboard>
            {recipeTypes.map((type) => (
                <DashboardCard key={type}
                    type={type}
                />
            ))}
        </StyledDashboard>
    );
};

export default Dashboard;