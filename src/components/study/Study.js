/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Study = () => {
  const dispatch = useDispatch();
  const { category, content } = useSelector(({ data }) => ({
    category: data.category,
    content: data.content,
  }));

  return (
    <div className="">
      category : {category} <br /> content: {content}
    </div>
  );
};

export default Study;
