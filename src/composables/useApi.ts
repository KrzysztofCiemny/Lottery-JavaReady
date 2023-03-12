import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { lotteryResultsBody, TicketBody, TypedNumbers } from '../models/models';

let ticket = <TicketBody>{};
let lotteryResults = <lotteryResultsBody>{};

export const useApi = () => {
  const navigate = useNavigate();
  const [postRequestError, setPostRequestError] = useState(false);
  const [getRequestError, setGetRequestError] = useState(false);
  const [winningNumbersGenerated, setWinningNumbersGenerated] = useState(false);

  const sendNumbers = async (numbers: TypedNumbers) => {
    try {
      const response = await axios.post('/api/api/v1/receiver', numbers);
      ticket = response.data;
      navigate('/ticket');
    } catch (error) {
      if (error) setPostRequestError(true);
      else setPostRequestError(false);
    }
  };

  const getResults = async (ticketId: string) => {
    try {
      const response = await axios.get(`/api/api/v1/results/${ticketId}`);
      lotteryResults = response.data;
      navigate('/checkResults/results');
    } catch (error) {
      if (error) setGetRequestError(true);
      else setGetRequestError(false);
    }
  };

  const generateWinningNumbers = async () => {
    try {
      await axios.get('/api/generate');
      setWinningNumbersGenerated(true);
    } catch (error) {
      setGetRequestError(true);
    }
  };

  return {
    sendNumbers,
    getResults,
    generateWinningNumbers,
    postRequestError,
    getRequestError,
    winningNumbersGenerated,
    ticket,
    lotteryResults,
  };
};
