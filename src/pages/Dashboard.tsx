import { FC, useState } from 'react';
import DashboardCard from '../components/dashboard/DashboardCard';
import { 
    StyledDashboard, 
    StyledSearchBar, 
    StyledSearchButton, 
    StyledSearchInput 
} from '../style/components/dashboard';

const Dashboard: FC = () => {
    const recipeTypes = ['breakfast', 'lunch', 'dinner', 'appetizers', 'snacks', 'desserts', 'vegetarian', 'vegan'];
    const [searchContent, setSearchContent] = useState('');

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchContent.trim()) {
            window.location.href = `./recipes/${searchContent.toLowerCase()}`;
        }
    };

    return (
        <>
            <StyledSearchBar onSubmit={handleSearch}>
                <StyledSearchInput type="text" value={searchContent} onChange={(e) => setSearchContent(e.target.value)} />
                <StyledSearchButton type="submit">Search</StyledSearchButton>
            </StyledSearchBar>
            <StyledDashboard>
                {recipeTypes.map((type) => (
                    <DashboardCard key={type}
                        type={type}
                    />
                ))}
            </StyledDashboard>
        </>
    );
};

export default Dashboard;