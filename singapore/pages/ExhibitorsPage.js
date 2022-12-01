import React from 'react';
import ExhibitorBanner from '../components/Exhibitors/ExhibitorBanner';
import LineUp from '../components/Exhibitors/LineUp';
import ReportTerms from '../components/Exhibitors/ReportTerms';

const ExhibitorsPage = () => {
    return (
        <div>
            <ExhibitorBanner/>
            <LineUp/>
            <ReportTerms/>
        </div>
    );
};

export default ExhibitorsPage;