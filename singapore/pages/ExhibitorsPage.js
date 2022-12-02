import React from 'react';
import ExhibitorBanner from '../components/Exhibitors/ExhibitorBanner';
import ExhibitorForm from '../components/Exhibitors/Form/ExhibitorForm';
import LineUp from '../components/Exhibitors/LineUp';
import ReportTerms from '../components/Exhibitors/ReportTerms';

const ExhibitorsPage = () => {
    return (
        <div>
            <ExhibitorBanner/>
            <LineUp/>
            <ExhibitorForm/>
            <ReportTerms/>
        </div>
    );
};

export default ExhibitorsPage;