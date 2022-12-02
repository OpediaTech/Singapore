import React from 'react';
import ExhibitorBanner from '../components/Exhibitors/ExhibitorBanner';
import ExhibitorForm from '../components/Exhibitors/Form/ExhibitorForm';
import LineUp from '../components/Exhibitors/LineUp';
import ReportTerms from '../components/Exhibitors/ReportTerms';
import Footer from '../components/Footer';

const ExhibitorsPage = () => {
    return (
        <div>
            <ExhibitorBanner/>
            <LineUp/>
            <ExhibitorForm/>
            <ReportTerms/>
            <Footer/>
        </div>
    );
};

export default ExhibitorsPage;