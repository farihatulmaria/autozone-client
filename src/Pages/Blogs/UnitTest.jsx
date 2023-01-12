import React from 'react';

const UnitTest = () => {
    return (
    <div className="blog-container">
        <h1 className='text-3xl m-8 text-center'>What is a unit test? Why should write unit tests?</h1>
        <img src="https://i.postimg.cc/KYmGNPSB/blog-5.jpg" className='my-6' alt="" />
        <div className='space-y-3 mx-6'>
            <p>Unit testing involves testing individual components of the software program or application. The main purpose behind this is to check that all the individual parts are working as intended. A unit is known as the smallest possible component of software that can be tested. Generally, it has a few inputs and a single output.</p>
            <h2 className=' text-2xl '>What is Unit Testing?</h2>
            <p>UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p>
            <p>In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing.</p>
            <h2 className=' text-2xl '>Why should write unit tests?</h2>
            <p>Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.</p>
        </div>
    </div>
    );
};

export default UnitTest;