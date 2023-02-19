import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { lotteryResultsBody, TicketBody, TypedNumbers } from '../models/models';

let ticket = <TicketBody>{};
let lotteryResults = <lotteryResultsBody>{};

export const useApi = () => {
  const navigate = useNavigate();

  const sendNumbers = (numbers: TypedNumbers) => {
    axios
      .post('/api/api/v1/receiver', numbers)
      .then((response) => {
        ticket = response.data;
        navigate('/ticket');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getResults = (ticketId: string) => {
    axios
      .get(`/api/api/v1/results/${ticketId}`)
      .then((response) => {
        lotteryResults = response.data;
        navigate('/checkResults/results');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const generateWinningNumbers = () => {
    axios.get('/api/generate');
  };

  return {
    sendNumbers,
    ticket,
    getResults,
    generateWinningNumbers,
    lotteryResults,
  };
};
