import { useContext } from 'react';
import { Container } from "./styles";
import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saídas.svg';
import totalImg from '../../assets/Total.svg';
import { TransactionsContext } from "../../TransactionsContext";

export function Summary () {
    const { transactions } = useContext(TransactionsContext)

    const totalDeposits = transactions.reduce((acc, transaction) => {
        if (transaction.type == 'deposit') {
            return acc + transaction.amount;
        }

        return acc
    }, 0)

    const totalWithdraws = transactions.reduce((acc, transaction) => {
        if (transaction.type == 'withdraw') {
            return acc + transaction.amount;
        }

        return acc
    }, 0)

    const totalTransactions = totalDeposits - totalWithdraws

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

                    }).format(totalDeposits)}
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

                    }).format(totalWithdraws)}
                </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'

                    }).format(totalTransactions)}
                </strong>
            </div>
        </Container>
    );
}