import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onAbrirModalTransacao: () => void;
}

export function Header({ onAbrirModalTransacao }: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="gmos money" />
                <button type="button" onClick={onAbrirModalTransacao}>
                    Nova transação
                </button>
                
            </Content>
        </Container>
    )
}