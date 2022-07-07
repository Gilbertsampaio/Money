import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalcomeImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary() {

    const { transacoes } = useTransactions();

    /*const totalDepositos = transacoes.reduce((acc, transacao) => {
        if(transacao.type === 'colocada') {
            return acc + transacao.amount;
        }
        return acc;
    }, 0)*/

    const sumario = transacoes.reduce((acc, transacao) => {
        if (transacao.type === 'colocada') {
            acc.colocada += transacao.amount;
            acc.total += transacao.amount;
        } else {
            acc.retirada += transacao.amount;
            acc.total -= transacao.amount;
        }

        return acc;
    }, {
        colocada: 0,
        retirada: 0,
        total: 0,
    })

    console.log(transacoes)

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumario.colocada)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>
                    - {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumario.retirada)}
                </strong>
            </div>
            <div className='destaque-fundo'>
                <header>
                    <p>Total</p>
                    <img src={totalcomeImg} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumario.total)}
                </strong>
            </div>
        </Container>
    )
}