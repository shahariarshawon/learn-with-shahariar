import React from 'react';
import CoursesTimeline from '../components/CourseTimeline';
import WhyOurCourses from '../components/WhyOurCourses';
import FAQ from '../components/FAQ';

const CoursesPage = () => {
    return (
        <div>
            <CoursesTimeline></CoursesTimeline>
            <WhyOurCourses></WhyOurCourses>
            <FAQ></FAQ>
        </div>
    );
};

export default CoursesPage;