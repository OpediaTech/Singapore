import React from 'react';
import iom from "../../public/supporting-organization/iom.png";
import ohta from "../../public/supporting-organization/ohta.png";
import occupation from "../../public/supporting-organization/occupation.png";
import hfess from "../../public/supporting-organization/hfess.png";
import iiha from "../../public/supporting-organization/iiha.png";
import iosh from "../../public/supporting-organization/iosh.png";
import asia from "../../public/supporting-organization/asia.png";
import national from "../../public/supporting-organization/national.png";
import wsha from "../../public/supporting-organization/wsha.png";
import nsca from "../../public/supporting-organization/nsca.png";
import miha from "../../public/supporting-organization/miha.png";
import naihe from "../../public/supporting-organization/naihe.png";
import { Container } from 'react-bootstrap';
import Image from 'next/image';

const LineUp = () => {
    const brands = [
        {
            pic:iom
        },
        {
            pic:ohta
        },
        {
            pic:hfess
        },
        {
            pic:wsha
        },
        {
            pic:nsca
        },
        {
            pic:occupation
        },
        {
            pic:iiha
        },
        {
            pic:iosh
        },
        {
            pic:asia
        },
        {
            pic:national
        },
        {
            pic:naihe
        },
        {
            pic:miha
        },
    ]
    return (
        <Container className='section_gap'>
            <h2 className='accomodation_bluetitle text-center mb-5'>Exhibitor Line up</h2>
            <div className='d-flex flex-wrap justify-content-evenly justify-content-lg-between  mb-5'>
                {
                    brands.slice(0,5).map((brand,index)=><div key={index}>
                        <Image className='img-fluid mx-auto' height={78} src={brand.pic} alt="brand img"/>
                    </div>)
                }
            </div>
            <div className='d-flex flex-wrap flex-lg-nowrap justify-content-center justify-content-lg-between  mb-5'>
                {
                    brands.slice(5,12).map((brand,index)=><div key={index}>
                        <Image className='img-fluid mx-aut0' height={78} src={brand.pic} alt="brand img"/>
                    </div>)
                }
            </div>
        </Container>
    );
};

export default LineUp;