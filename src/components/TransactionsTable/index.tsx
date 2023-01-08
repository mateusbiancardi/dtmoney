import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable (){
    useEffect (() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </thead>

                <tbody>
                    <tr>
                        <td className="title">Desenvolvimento de Website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2023</td>
                    </tr>

                    <tr>
                        <td className="title">Aluguel</td>
                        <td className="withdraw">- R$1.100</td>
                        <td>Casa</td>
                        <td>23/01/2022</td>
                    </tr>

                    <tr>
                        <td className="title">Desenvolvimento de Website</td>
                        <td>R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2023</td>
                    </tr>

                    <tr>
                        <td className="title">Desenvolvimento de Website</td>
                        <td>R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2023</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}