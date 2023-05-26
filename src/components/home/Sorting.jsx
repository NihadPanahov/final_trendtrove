import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Sorting = ({ setSort }) => {
  const [t, i18n] = useTranslation('global');
  const theme = useSelector((state) => state.theme.mode);

  const selectClass = `bg-white py-3 px-5 rounded-xl cursor-pointer ${
    theme === 'dark' ? 'text-black' : 'text-black'
  }`;
  const selecttClass = `bg-gray-100 my-5 p-5 flex items-center justify-end rounded-xl ${
    theme === 'dark' ? 'bg-gray-600' : 'text-black'
  }`;

  return (
    <div className={selecttClass}>
      <select
        onChange={(e) => setSort(e.target.value)}
        className={selectClass}
        name=""
        id=""
      >
        <option disabled value="">
          {t('choose')}
        </option>
        <option value="inc">{t('i')}</option>
        <option value="dec">{t('d')}</option>
      </select>
    </div>
  );
};

export default Sorting;
