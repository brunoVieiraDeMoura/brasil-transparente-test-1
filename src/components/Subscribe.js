import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Subscribe = () => {
  const [plans, setPlans] = useState([]);
  const { authState } = useContext(AuthContext);
  //function para buscar os planos da api
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/plans/list"
        );
        setPlans(response.data);
      } catch (err) {
        console.error("Erro ao buscar plano", err);
      }
    };

    fetchPlans();
  }, []);
  const handleSubscribe = async (planId) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/subscriptions/subscribe",
        { planId },
        { headers: { userId: authState.user._id } }
      );
      console.log("Inscrevendo-se no plano:", response.data);
    } catch (err) {
      console.error("Erro ao se inscrever", err);
    }
  };

  return (
    <div>
      <h1>Planos Disponíveis</h1>
      <ul>
        {plans.map((plan) => (
          <li key={plan._id}>
            <h2>{plan.name}</h2>
            <p>Preço: R${plan.price}</p>
            <p>Duração: {plan.duration}</p>
            <p>Características: {plan.features.join(", ")}</p>
            <button onClick={() => handleSubscribe(plan._id)}>
              Inscrever-se
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subscribe;
