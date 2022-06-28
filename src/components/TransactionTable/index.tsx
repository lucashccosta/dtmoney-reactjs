import { Container } from "./styles";

export function TransactionTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Data</th>
                        <th>Categoria</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td>27/06/2022</td>
                        <td>Freelancer</td>
                        <td className="deposit">R$12.000,00</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td>27/06/2022</td>
                        <td>Casa</td>
                        <td className="withdraw">-R$1.100,00</td>
                    </tr>
                    <tr>
                        <td>Água</td>
                        <td>27/06/2022</td>
                        <td>Casa</td>
                        <td className="withdraw">-R$74,80</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}