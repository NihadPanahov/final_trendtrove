import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import logo from "../img/Logo2.png";
import engineers from "../img/quality5.png";
import protect from "../img/cargo3.png";
import satisfaction from "../img/cs2.png";
import shop from "../img/secureshopping.png";
import prdct from "../img/productselection.png";
import { fetchTeamMembers } from '../redux/teamSlice';


const AboutUs = () => {
  const teamMembers = useSelector((state) => state.team.teamMembers);
  const loading = useSelector((state) => state.team.loading);
  const error = useSelector((state) => state.team.error);
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.mode);
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
    dispatch(fetchTeamMembers());
  }, [dispatch]);


  const theme = useSelector((state) => state.theme.mode);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };




  const containerClasses = `flex justify-center items-center min-h-screen ${theme === 'dark' ? 'bg-gray-700' : 'bg-slate-50'}`;


  const contentClasses = 'flex flex-wrap justify-center';

  const cardClasses = `w-64 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 m-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'
    } ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-100'}`;

  const avatarClasses = 'w-24 h-24 rounded-full mx-auto mb-4';


  const member = {
    work: [
      {
        expertise: 'Expertise 1',
        description: 'Description 1'
      },
      {
        expertise: 'Expertise 2',
        description: 'Description 2'
      },
      {
        expertise: 'Expertise 3',
        description: 'Description 3'
      }
    ]
  };





  if (loading) {
    return (
      <div className={containerClasses}>
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={containerClasses}>
        <div>Error: {error}</div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>About Us. Trend Trove</title>
        <meta name="description" content="Learn more about our company and what we do." />
      </Helmet>
      <div className={`bg-${currentTheme === 'light' ? 'slate-50' : 'gray-700'} text-${currentTheme === 'light' ? 'black' : 'white'} `}>
        <div className="container bg-">
          <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='flex justify-center'>
              <h1 className='text-7xl flex items-center my-8'>
                <img src={require("../img/Logo2.png")} alt="Logo" title="Trend Trove" />

              </h1>
            </div>

            <div className={`bg-${currentTheme === 'light' ? 'gray-400' : 'gray-800'} text-${currentTheme === 'light' ? 'black' : 'white'}  flex text-center justify-center align-center text-6xl font-bold my-8  py-7 px-[25%]`}>
              <p>{t("aboutus")}</p>
            </div>

            <div className='flex justify-center my-8'>
              <p className='text-center italic'>{t("welcome")}</p>
            </div>


            <div className='flex flex-col items-center my-8 '>
              <div className={`w-full md:w-1/2 sm:flex   md:center lg:justify-between md:flex-col lg:flex-row  `}>
                <div className='text-center'>
                  <h3 className='text-2xl underline'>{t("ps")}</h3>
                  <p className='my-4'>{t("pst")}</p>
                </div>
                <img className={` md:w-full lg:w-1/2   max-w-xs   md:center lg:justify-between `} data-aos="zoom-in" src={prdct} alt="" />
              </div>
            </div>

            <div className='flex flex-col-reverse items-center my-8'>
              <div className={"w-full md:w-1/2 sm:flex   md:center lg:justify-between md:flex-col lg:flex-row  "}>
                <img className="  md:w-full lg:w-1/2     md:center lg:justify-between  " data-aos="zoom-in" src={engineers} alt="" />
                <div className='text-center'>
                  <h3 className='text-2xl underline'>{t("qa")}</h3>
                  <p className='my-4'>{t("qat")}</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col items-center my-8'>
              <div className="w-full md:w-1/2 sm:flex   md:center lg:justify-between md:flex-col lg:flex-row  ">
                <div className='text-center'>
                  <h3 className='text-2xl underline'>{t("ses")}</h3>
                  <p className='my-4'>{t("sest")}</p>
                </div>
                <img className={`md:w-full lg:w-1/2   max-w-xs   md:center lg:justify-between  `} data-aos="zoom-in" src={protect} alt="" />
              </div>
            </div>

            <div className='flex flex-col-reverse items-center my-8'>
              <div className="w-full md:w-1/2 sm:flex   md:center lg:justify-between md:flex-col lg:flex-row  " >
                <img className={` md:w-full lg:w-1/2   max-w-xs   md:center lg:justify-between  `} data-aos="zoom-in" src={satisfaction} alt="" />
                <div className='text-center'>
                  <h3 className='text-2xl underline'>{t("cs")}</h3>
                  <p className='my-4'>{t("cst")}</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col items-center my-8'>
              <div className=" w-full md:w-1/2 sm:flex   md:center lg:justify-between md:flex-col lg:flex-row   ">
                <div className='text-center'>
                  <h3 className='text-2xl underline'>{t("sc")}</h3>
                  <p className='my-4'>{t("sct")}</p>
                </div>
                <img className=" md:w-full lg:w-1/2   max-w-xs   md:center lg:justify-between   " data-aos="zoom-in" src={shop} alt="" />
              </div>
            </div>

            <div className='text-center my-8'>
              <p className='italic'>{t("thx")}</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className={`bg-${currentTheme === 'light' ? 'slate-50' : 'gray-700'} text-${currentTheme === 'light' ? 'black' : 'white'} text-center text-6xl pt-20 font-bold pb-20 lg:pb-0 `}>{t("ourteam")}</h1>
      <div className={containerClasses}>
        <div className={contentClasses}>
          {teamMembers.map((member) => (
            <div key={member.id} className={cardClasses}>
              <img src={member.avatar} alt="Profile" className={avatarClasses} />
              <div className="text-xl font-bold">{member.first_name} {member.last_name}</div>
              <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'
                }`}>{member.email}</div>
              <ul>
                {member.work && member.work.map((expertise, index) => (
                  <li key={index}>
                    <h3>{expertise.expertise}</h3>
                    <p>{expertise.description}</p>
                  </li>
                ))}


              </ul>

            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default AboutUs;
