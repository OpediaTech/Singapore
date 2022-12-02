import React from 'react';
import ReportTerms from '../components/Exhibitors/ReportTerms';
import PostBanner from '../components/PostConference/PostBanner';
import PostForm from '../components/PostConference/PostForm';
import PostPayment from '../components/PostConference/PostPayment';

const PostConferencePage = () => {
    return (
        <div>
            <PostBanner/>
            <PostForm/>
            <PostPayment/>
            <ReportTerms/>
        </div>
    );
};

export default PostConferencePage;