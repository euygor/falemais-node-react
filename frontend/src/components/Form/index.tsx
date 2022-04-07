import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { calculateFee } from '../../helpers/calculateFee';
import { formatBRL } from '../../helpers/formatBRL';
import { api } from "../../Api";

export const Form = () => {
    const [origin, setOrigin] = useState(0);
    const [destination, setDestination] = useState(0);
    const [plan, setPlan] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [noPlan, setNoPlan] = useState(0);
    const [withPlan, setWithPlan] = useState(0);
    const [fees, setFees] = useState([]);

    useEffect(() => {
        getFees();
        setNoPlan(calculateFee(origin, destination, 0, minutes, fees));
        setWithPlan(calculateFee(origin, destination, plan, minutes, fees));
    }, [origin, destination, plan, minutes, fees]);

    const getFees = async () => {

        try {
            let response = await api.getFees();
            setFees(response.data);
        } catch (error) {
            console.log('Erro ao carregar os dados verifique sua conexão com a API');
        }

    }

    const changeOrigin = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOrigin(parseInt(e.target.value));
    }

    const changeDestination = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDestination(parseInt(e.target.value));
    }

    const changePlan = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPlan(parseInt(e.target.value));
    }

    const changeMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
        parseInt(e.target.value) > 0 ? setMinutes(parseInt(e.target.value)) : setMinutes(0);
    }

    return (
        <div className={styles.form}>
            <fieldset>
                <legend><h4>FaleMais</h4></legend>
                <select onChange={changeOrigin}>
                    <option value={0}>Selecione a Origem</option>
                    <option value={11}>DDD - ( 11 )</option>
                    <option value={16}>DDD - ( 16 )</option>
                    <option value={17}>DDD - ( 17 )</option>
                    <option value={18}>DDD - ( 18 )</option>
                </select>
                <select onChange={changeDestination}>
                    <option value={0}>Selecione o Destino</option>
                    <option value={11}>DDD - ( 11 )</option>
                    <option value={16}>DDD - ( 16 )</option>
                    <option value={17}>DDD - ( 17 )</option>
                    <option value={18}>DDD - ( 18 )</option>
                </select>
                <select onChange={changePlan}>
                    <option value={0}>Selecione um Plano</option>
                    <option value={30}>Plano FaleMais 30</option>
                    <option value={60}>Plano FaleMais 60</option>
                    <option value={120}>Plano FaleMais 120</option>
                </select>
                <input onChange={changeMinutes} type="number" value={minutes === 0 ? "" : minutes} placeholder='Informe os minutos' />
            </fieldset>

            <div className={styles.result}>
                <p>Origem: ( {origin} )</p>
                <p>Destino: ( {destination} )</p>
                <p>Sem Plano: {formatBRL(Number(noPlan.toFixed(2)))}</p>
                <p>Com Plano: {formatBRL(Number(withPlan.toFixed(2)))}</p>
            </div>

            <div className={styles.info}>
                <p>OBS: Ligações com DDD de Origem e Destino iguais não são cobradas as tarifas.</p>
            </div>
        </div>
    );
}