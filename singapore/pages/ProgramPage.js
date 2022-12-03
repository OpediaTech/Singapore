import React from 'react';
import Header from '../components/Header/Header';
import BreakBtn from '../components/Home/BreakBtn';
import HealthManagement from '../components/Home/HealthManagement';
import ProgrammeDetails from '../components/Home/ProgrammeDetails';
import Timeline from '../components/Timeline/Timeline';

const ProgramPage = () => {
    return (
        <div>
            <Header/>
        <ProgrammeDetails />
        <HealthManagement />
        <Timeline />
        <BreakBtn />
      </div>
    );
};

export default ProgramPage;